import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot - should always be empty
  formLoadedAt?: number; // client timestamp for time-trap check
  turnstileToken?: string; // Cloudflare Turnstile response token
}

async function verifyTurnstileToken(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) return true; // Turnstile not configured; skip verification

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: secretKey, response: token, remoteip: ip }),
      }
    );
    const data = await response.json();
    return data.success === true;
  } catch (err) {
    console.error('Turnstile verification error:', err);
    return false;
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

// In-memory rate limiter. Good enough for a low-traffic contact form on a
// single warm serverless instance; resets on cold start, which is an
// acceptable tradeoff over adding an external store for this volume.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);

  // Opportunistically prevent unbounded growth of the map.
  if (requestLog.size > 5000) {
    for (const [key, entries] of requestLog) {
      if (entries.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        requestLog.delete(key);
      }
    }
  }

  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, website, formLoadedAt, turnstileToken }: ContactFormData = body;

    // Honeypot: a real user never sees or fills this field. Any bot that
    // auto-fills every input trips it. Respond as if successful so bots
    // don't learn to leave it blank.
    if (website) {
      return NextResponse.json(
        { message: 'Thank you for your message! We\'ll get back to you soon.', success: true },
        { status: 200 }
      );
    }

    // Time-trap: a human needs at least a couple seconds to fill this form.
    // Bots that submit near-instantly are silently accepted (not rejected,
    // to avoid tipping them off) but never actually sent.
    if (typeof formLoadedAt === 'number' && Date.now() - formLoadedAt < 2000) {
      return NextResponse.json(
        { message: 'Thank you for your message! We\'ll get back to you soon.', success: true },
        { status: 200 }
      );
    }

    // Cloudflare Turnstile: verify the human-verification token server-side.
    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken || !(await verifyTurnstileToken(turnstileToken, ip))) {
        return NextResponse.json(
          { error: 'Verification failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 1000 characters' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'innorag Contact Form <contact@innorag.com>',
      to: 'contact@innorag.com',
      replyTo: sanitizedEmail,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Sent from innorag.com contact form at ${new Date().toISOString()}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Thank you for your message! We\'ll get back to you soon.',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}