import os
import textwrap

# A dictionary to hold the content for each file.
# Using textwrap.dedent to keep the code clean and readable.
# All content is for Next.js 14+ with the App Router.

content_map = {
    # 1. Tailwind CSS Config: Tells Tailwind where to find class names.
    "tailwind.config.js": textwrap.dedent("""
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: [
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        };
    """),

    # 2. PostCSS Config: Corrected for a stable Tailwind CSS v3 setup.
    "postcss.config.js": textwrap.dedent("""
        module.exports = {
          plugins: {
            'tailwindcss': {},
            'autoprefixer': {},
          },
        };
    """),

    # 3. Global CSS file required by Tailwind CSS
    "app/globals.css": textwrap.dedent("""
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    """),

    # 4. Global Layout: Defines the main HTML structure and includes Header/Footer
    "app/layout.tsx": textwrap.dedent("""
        import type { Metadata } from "next";
        import { Inter } from "next/font/google";
        import { Analytics } from "@vercel/analytics/react";
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
                <Analytics />
              </body>
            </html>
          );
        }
    """),

    # 5. Homepage: The main landing page for the website
    "app/page.tsx": textwrap.dedent("""
        import Link from 'next/link';
        import { ArrowRight } from 'lucide-react'; // A popular icon library

        const RetrieveIcon = () => (
          <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7M4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2M4 7h16m-4 4h-8"></path></svg>
        );
        
        const AugmentIcon = () => (
            <svg className="w-12 h-12 mx-auto mb-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.5 2.5l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5 1.5-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 13.5l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5 1.5-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 10.5l-2-1 2-1 1-2 1 2 2 1-2 1-1 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l-8 8"></path></svg>
        );
        
        const GenerateIcon = () => (
          <svg className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
        );

        export default function HomePage() {
          return (
            <div className="space-y-24">
              {/* Hero Section */}
              <section className="text-center py-20 md:py-28 rounded-xl bg-gradient-to-br from-blue-50 via-white to-slate-100">
                <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 mb-4 tracking-tight">
                  Retrieve, Augment, Generate
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                  A Future Forged by Data and AI. We transform business through intelligent innovation.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </section>

              {/* The innorag Framework Section */}
              <section className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Philosophy</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  {/* Retrieve Card */}
                  <div className="flex-1 p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-center">
                    <RetrieveIcon />
                    <h3 className="text-2xl font-semibold mb-3 text-blue-600">Retrieve</h3>
                    <p className="text-slate-600">We start by understanding and retrieving essential knowledge and data from complex systems.</p>
                  </div>

                  {/* Arrow Connector */}
                  <div className="text-orange-500 transform rotate-90 md:rotate-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>

                  {/* Augment Card */}
                  <div className="flex-1 p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-center">
                    <AugmentIcon />
                    <h3 className="text-2xl font-semibold mb-3 text-purple-600">Augment</h3>
                    <p className="text-slate-600">We enhance this data with advanced analytics and cutting-edge technology to uncover deeper insights.</p>
                  </div>
                  
                  {/* Arrow Connector */}
                  <div className="text-orange-500 transform rotate-90 md:rotate-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>

                  {/* Generate Card */}
                  <div className="flex-1 p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-center">
                    <GenerateIcon />
                    <h3 className="text-2xl font-semibold mb-3 text-green-600">Generate</h3>
                    <p className="text-slate-600">We generate novel solutions and actionable strategies that create tangible value and drive progress.</p>
                  </div>
                </div>
              </section>

              {/* Services Overview Section */}
              <section className="text-center bg-slate-100 py-20 rounded-xl">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                    We provide a suite of services designed to support your goals and drive innovation forward.
                 </p>
                 <div className="flex justify-center">
                    <Link href="/services" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md">
                        Explore All Services
                    </Link>
                 </div>
              </section>
            </div>
          );
        }
    """),

    # 6. About Us Page
    "app/about/page.tsx": textwrap.dedent("""
        import type { Metadata } from 'next';

        export const metadata: Metadata = {
          title: 'About Us',
          description: 'Learn about the story, mission, and vision of innorag Technologies.',
        };
        
        const InnoragLogo = () => (
            <span className="inline-flex items-center gap-1 font-bold not-italic">
                <span className="bg-black text-white px-2 py-0.5 rounded-md"><i>i</i></span>
                <span className="text-black">nnorag</span>
                <span className="text-orange-600">.</span>
            </span>
        );

        export default function AboutPage() {
          return (
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <h1 className="text-4xl font-extrabold text-orange-600 mb-8 border-b pb-4">About <InnoragLogo />: The Genesis of Innovation</h1>

              <div className="space-y-10 text-lg text-slate-700">
                <section>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Name, Our Mission</h2>
                  <p className="leading-relaxed">
                    <strong><InnoragLogo /></strong> is a coined term derived from <strong>Innovation</strong> combined with the conceptual framework of <strong>Retrieve, Augment, and Generate</strong>. It reflects the company’s mission to retrieve knowledge or data, augment it with advanced technology, and generate new solutions, ideas, or insights.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    The term has no dictionary meaning and symbolises continuous innovation across AI, data, and emerging technologies.
                  </p>
                </section>

                <section className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Vision</h2>
                  <p className="leading-relaxed">
                    Our vision is to be a trusted partner for businesses and institutions worldwide, pioneering the application of research and development to solve complex, real-world problems. We strive to create a future where data-driven insights and intelligent systems are accessible, efficient, and transformative.
                  </p>
                </section>

                 <section>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Commitment</h2>
                  <p className="leading-relaxed">
                    We are dedicated to carrying on the business of providing exceptional software support, data processing services, and groundbreaking research and development. Our commitment is to quality, reliability, and client success, ensuring we deliver value in every project we undertake.
                  </p>
                </section>
              </div>
            </div>
          );
        }
    """),

    # 7. Main Services Hub Page
    "app/services/page.tsx": textwrap.dedent("""
        import type { Metadata } from 'next';
        import Link from 'next/link';

        export const metadata: Metadata = {
          title: 'Our Services',
          description: 'Explore our services in software support, data analytics, and research & development.',
        };
        
        const InnoragLogo = () => (
            <span className="inline-flex items-center gap-1 font-bold not-italic text-sm">
                <span className="bg-black text-white px-1.5 py-0.5 rounded"><i>i</i></span>
                <span className="text-black">nnorag</span>
                <span className="text-orange-600">.</span>
            </span>
        );

        const services = [
          {
            title: "Software Support & Maintenance",
            description: "Providing robust support including troubleshooting, version upgrades, and performance optimization to ensure your software assets are always reliable and efficient.",
            link: "/services/software-support",
            cta: "Explore Support Services"
          },
          {
            title: "Data Processing & Analytics",
            description: "Transforming raw information into strategic assets through comprehensive data collection, analysis, visualization, and database management.",
            link: "/services/data-analytics",
            cta: "Unlock Data Insights"
          },
          {
            title: "Research & Development",
            description: "Pioneering the future through experimental R&D in AI, machine learning, and data science, in collaboration with academic and industrial partners.",
            link: "/services/research-development",
            cta: "Partner with Us"
          }
        ];

        export default function ServicesHubPage() {
          return (
            <div>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">Our Services: A Framework for Innovation</h1>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  All <InnoragLogo /> services are built on our &quot;Retrieve, Augment, Generate&quot; philosophy to deliver tangible results and drive your business forward.
                </p>
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div key={service.title} className="bg-white p-8 rounded-lg shadow-md flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h2>
                    <p className="text-slate-600 flex-grow mb-6">{service.description}</p>
                    <Link href={service.link} className="inline-block mt-auto bg-blue-600 text-white text-center font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                      {service.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        }
    """),

    # 8. Software Support Service Page
    "app/services/software-support/page.tsx": textwrap.dedent("""
        import type { Metadata } from 'next';
        import Link from 'next/link';

        export const metadata: Metadata = {
          title: 'Software Support & Maintenance',
        };

        const features = [
            "Troubleshooting & Debugging",
            "Version Upgrades & Patch Management",
            "Performance Optimization",
            "End-User Assistance",
            "Annual Maintenance Contracts (AMCs)",
            "Remote & On-Site Technical Services"
        ];

        export default function SoftwareSupportPage() {
          return (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-extrabold text-orange-600 mb-4">Comprehensive Software Support & Maintenance</h1>
              <p className="text-lg text-slate-600 mb-10">We ensure your software solutions run smoothly, efficiently, and reliably, so you can focus on your core business.</p>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Key Offerings</h2>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-700">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center mt-12 p-8 bg-slate-100 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready for Reliable Support?</h3>
                <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                  Get a Custom Support Quote
                </Link>
              </div>
            </div>
          );
        }
    """),

    # 9. Data Analytics Service Page
    "app/services/data-analytics/page.tsx": textwrap.dedent("""
        import type { Metadata } from 'next';
        import Link from 'next/link';

        export const metadata: Metadata = {
          title: 'Data Processing & Advanced Analytics',
        };

        const features = [
            "Data Collection, Conversion & Classification",
            "Advanced Data Analysis & Interpretation",
            "Custom Report Writing & Data Visualization",
            "Scalable Database Management",
            "Insightful Data Mining",
            "Platform Development for Data Management"
        ];

        export default function DataAnalyticsPage() {
          return (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-extrabold text-orange-600 mb-4">Data Processing & Advanced Analytics</h1>
              <p className="text-lg text-slate-600 mb-10">We turn your complex data into clear, actionable insights that drive strategic decisions and business growth.</p>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Key Offerings</h2>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-700">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

               <div className="text-center mt-12 p-8 bg-slate-100 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Unlock Your Data&apos;s Potential?</h3>
                <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                  Start Your Data-Driven Journey
                </Link>
              </div>
            </div>
          );
        }
    """),

    # 10. R&D Service Page
    "app/services/research-development/page.tsx": textwrap.dedent("""
        import type { Metadata } from 'next';
        import Link from 'next/link';

        export const metadata: Metadata = {
          title: 'Research & Development Partnerships',
        };

        const features = [
            "R&D in AI, ML, & Robotics",
            "Data Science & Environmental Tech",
            "Innovative Project Development",
            "Academic & Industrial Collaboration",
            "Grant Application Support",
            "Research Commercialization Strategy"
        ];

        export default function ResearchPage() {
          return (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-extrabold text-orange-600 mb-4">Research & Development Partnerships</h1>
              <p className="text-lg text-slate-600 mb-10">Partner with us to explore the frontiers of technology and turn ambitious ideas into market-ready innovations.</p>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Key Offerings</h2>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-700">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center mt-12 p-8 bg-slate-100 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Innovate Together?</h3>
                <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                  Collaborate on an Innovative Project
                </Link>
              </div>
            </div>
          );
        }
    """),
    
    # 11. Contact Page
    "app/contact/page.tsx": textwrap.dedent("""
        export const metadata = {
          title: 'Contact Us',
          description: 'Get in touch with innorag Technologies to discuss your project.',
        };

        export default function ContactPage() {
          return (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-orange-600 mb-4">Contact Us</h1>
                <p className="text-lg text-slate-600">
                  Have a project in mind or want to learn more? We&apos;d love to hear from you.
                </p>
                <div className="mt-4 text-lg">
                  <a href="mailto:contact@innorag.com" className="font-semibold text-blue-600 hover:underline">
                    contact@innorag.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                    <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          );
        }
    """),

    # 12. Header Component
    "components/Header.tsx": textwrap.dedent("""
        'use client'; // This directive is needed for using hooks like usePathname

        import Link from 'next/link';
        import { usePathname } from 'next/navigation';

        const navLinks = [
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'About Us', href: '/about' },
          { name: 'Contact', href: '/contact' },
        ];
        
        const InnoragLogo = () => (
          <span className="text-2xl font-bold not-italic flex items-center gap-1">
            <span className="bg-black text-white px-2 py-0.5 rounded-md">
              <i>i</i>
            </span>
            <span className="text-black">nnorag</span>
            <span className="text-orange-600">.</span>
          </span>
        );

        export default function Header() {
          const pathname = usePathname();

          return (
            <header className="bg-white/80 shadow-sm sticky top-0 z-50 backdrop-blur-lg border-b border-slate-200">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <InnoragLogo />
                    </Link>
                  </div>
                  <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href || (pathname.startsWith('/services') && link.href === '/services');
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={`text-base font-medium transition-colors ${
                            isActive ? 'text-orange-600 font-semibold' : 'text-slate-500 hover:text-orange-600'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>
                  {/* Mobile menu button can be added here */}
                </div>
              </div>
            </header>
          );
        }
    """),

    # 13. Footer Component
    "components/Footer.tsx": textwrap.dedent("""
        const InnoragLogo = () => (
            <span className="inline-flex items-center gap-1 font-bold not-italic">
                <span className="bg-black text-white px-1.5 py-0.5 rounded"><i>i</i></span>
                <span className="text-black">nnorag</span>
                <span className="text-orange-600">.</span>
            </span>
        );

        export default function Footer() {
          const currentYear = new Date().getFullYear();

          return (
            <footer className="bg-slate-100 border-t border-slate-200">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500">
                <p>&copy; {currentYear} <InnoragLogo /> Technologies (OPC) Private Limited. All Rights Reserved.</p>
                <div className="mt-2">
                    <a href="mailto:contact@innorag.com" className="hover:underline">contact@innorag.com</a>
                </div>
              </div>
            </footer>
          );
        }
    """)
}

def create_files():
    """
    Creates the directory structure and files for the innorag website.
    """
    print("Starting website scaffolding...")

    # Create the components directory if it doesn't exist
    # This is a good practice, although create_files handles subdirs too.
    components_dir = "components"
    if not os.path.exists(components_dir):
        os.makedirs(components_dir)
        print(f"Created directory: {components_dir}")

    for file_path, content in content_map.items():
        # Ensure the directory for the file exists
        dir_name = os.path.dirname(file_path)
        if dir_name and not os.path.exists(dir_name):
            os.makedirs(dir_name)
            print(f"Created directory: {dir_name}")

        # Write the content to the file
        try:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Successfully created: {file_path}")
        except IOError as e:
            print(f"Error creating file {file_path}: {e}")

    print("\\n--- CRITICAL FINAL STEPS ---")
    print("The files are created, but your project is missing the required packages for styling.")
    print("Please follow these steps exactly:")
    print("\\n1. Stop your development server (Ctrl+C).")
    print("2. DELETE the '.next' folder AND the 'node_modules' folder from your project directory. This clears everything.")
    print("3. Copy and paste this ONE command into your terminal and press Enter to install the correct packages:")
    print("   npm install lucide-react @vercel/analytics && npm install -D tailwindcss@^3.4.1 postcss@^8 autoprefixer@^10.4.1")
    print("\\n4. After the installation is complete, start the server again:")
    print("   npm run dev")
    print("\\nYour website should now have the correct design.")


if __name__ == "__main__":
    create_files()
