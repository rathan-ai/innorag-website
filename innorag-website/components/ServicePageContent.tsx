'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './AnimatedSection';
import AnimatedSection from './AnimatedSection';

interface ServicePageContentProps {
  title: string;
  description: string;
  features: string[];
  ctaTitle: string;
  ctaText: string;
}

export default function ServicePageContent({ title, description, features, ctaTitle, ctaText }: ServicePageContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-extrabold text-orange-600 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg text-slate-600 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {description}
      </motion.p>

      <AnimatedSection delay={0.2}>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Key Offerings</h2>
          <StaggerContainer className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {features.map((feature) => (
              <StaggerItem key={feature}>
                <li className="flex items-center text-slate-700 list-none">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>{feature}</span>
                </li>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="text-center mt-12 p-8 bg-slate-100 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">{ctaTitle}</h3>
          <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
            {ctaText}
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
