import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    // Basic rate limiting check (in production, use proper rate limiting)
    const headersList = await headers();
    const forwardedFor = headersList.get('x-forwarded-for') || 'unknown';
    
    // Parse form data
    const body = await request.json();
    const { name, email, message }: ContactFormData = body;

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
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      message: sanitizeInput(message),
      timestamp: new Date().toISOString(),
      ip: forwardedFor
    };

    // In production, you would:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store in database
    // 3. Add CSRF protection
    // 4. Implement proper rate limiting
    
    // For now, we'll just log the data (remove in production)
    console.log('Contact form submission:', sanitizedData);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

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