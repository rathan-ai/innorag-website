'use client';

import { motion } from 'framer-motion';
import InnoragLogo from './InnoragLogo';
import PipeOperator from './PipeOperator';
import AnimatedSection from './AnimatedSection';

export default function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
      <motion.h1
        className="text-4xl font-extrabold text-orange-600 mb-8 border-b pb-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <InnoragLogo />: The Genesis of Innovation
      </motion.h1>

      <div className="space-y-10 text-lg text-slate-700">
        <AnimatedSection delay={0.1}>
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Name, Our Mission</h2>
            <p className="leading-relaxed">
              <strong><InnoragLogo /></strong> is a coined term derived from <strong>Innovation</strong> combined with the conceptual framework of <strong>Retrieve <PipeOperator size="sm" /> Augment <PipeOperator size="sm" /> Generate</strong>. It reflects the company&apos;s mission to retrieve knowledge or data, augment it with advanced technology, and generate new solutions, ideas, or insights.
            </p>
            <p className="mt-4 leading-relaxed">
              The term has no dictionary meaning and symbolises continuous innovation across AI, data, and emerging technologies.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <section className="p-6 bg-slate-50 rounded-lg border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Vision</h2>
            <p className="leading-relaxed">
              Our vision is to lead the shift from Digital Transformation to AI Transformation — helping businesses and institutions worldwide move beyond digitization into truly intelligent operations. We strive to create a future where AI-powered platforms make data-driven insights accessible, efficient, and transformative.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Commitment</h2>
            <p className="leading-relaxed">
              We are dedicated to carrying on the business of providing exceptional software support, data processing services, and groundbreaking research and development. Our commitment is to quality, reliability, and client success, ensuring we deliver value in every project we undertake.
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}
