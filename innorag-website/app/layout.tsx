
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://innorag.com'),
  title: {
    template: '%s | innorag Technologies',
    default: 'innorag Technologies - Retrieve |> Augment |> Generate',
  },
  description: "innorag Technologies drives AI Transformation for businesses ready to go beyond digital. We build intelligent platforms powered by data and AI across finance, matchmaking, and entrepreneurship.",
  keywords: [
    'data analytics',
    'software support',
    'research development',
    'AI solutions',
    'data processing',
    'machine learning',
    'technology consulting',
    'innorag'
  ],
  authors: [{ name: 'innorag Technologies' }],
  creator: 'innorag Technologies',
  publisher: 'innorag Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://innorag.com',
    siteName: 'innorag Technologies',
    title: 'innorag Technologies - Retrieve |> Augment |> Generate',
    description: 'Digital Transformation is not enough — it\'s time for AI Transformation. innorag builds intelligent platforms powered by data and AI through our Retrieve |> Augment |> Generate framework.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'innorag Technologies - Data-Driven Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'innorag Technologies - Retrieve |> Augment |> Generate',
    description: 'Digital Transformation is not enough — it\'s time for AI Transformation. We build intelligent platforms powered by data and AI.',
    images: ['/twitter-image.jpg'],
    creator: '@innorag',
  },
  verification: {
    // Add verification tokens when available
    // google: 'google-verification-token',
    // yandex: 'yandex-verification-token',
  },
  alternates: {
    canonical: 'https://innorag.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
