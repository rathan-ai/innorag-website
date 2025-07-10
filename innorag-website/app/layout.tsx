
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | innorag Technologies',
    default: 'innorag Technologies - Retrieve, Augment, Generate',
  },
  description: "innorag Technologies pioneers innovation in software support, data analytics, and R&D, turning complex data into strategic assets.",
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
      </body>
    </html>
  );
}
