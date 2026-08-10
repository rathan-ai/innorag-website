'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RAGTitle from '../components/RAGTitle';
import Partners from '../components/Partners';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

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
      <section className="text-center py-20 md:py-28 rounded-xl bg-gradient-to-br from-blue-50 via-white to-slate-100 overflow-hidden">
        <motion.h1
          className="mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <RAGTitle size="lg" animated={true} />
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Digital Transformation is not enough. It&apos;s time for AI Transformation. We build intelligent platforms that go beyond digitization — powered by data, driven by AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* The innorag Framework Section */}
      <section className="text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Philosophy</h2>
        </AnimatedSection>
        <StaggerContainer className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Retrieve Card */}
          <StaggerItem className="flex-1 p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-center">
            <RetrieveIcon />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Retrieve</h3>
            <p className="text-slate-600">We start by understanding and retrieving essential knowledge and data from complex systems.</p>
          </StaggerItem>

          {/* Arrow Connector */}
          <StaggerItem className="text-orange-500 transform rotate-90 md:rotate-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </StaggerItem>

          {/* Augment Card */}
          <StaggerItem className="flex-1 p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-center">
            <AugmentIcon />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Augment</h3>
            <p className="text-slate-600">We enhance this data with advanced analytics and cutting-edge technology to uncover deeper insights.</p>
          </StaggerItem>

          {/* Arrow Connector */}
          <StaggerItem className="text-orange-500 transform rotate-90 md:rotate-0">
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </StaggerItem>

          {/* Generate Card */}
          <StaggerItem className="flex-1 p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-center">
            <GenerateIcon />
            <h3 className="text-2xl font-semibold mb-3 text-green-600">Generate</h3>
            <p className="text-slate-600">We generate novel solutions and actionable strategies that create tangible value and drive progress.</p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Products Section */}
      <section id="products" className="text-center scroll-mt-24">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Intelligent platforms powered by data and AI
          </p>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CleverBrio */}
          <StaggerItem className="p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3m-16 0c0 1.657 3.582 3 8 3s8-1.343 8-3m-16 0v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7m-16 5c0 1.657 3.582 3 8 3s8-1.343 8-3"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-slate-800">CleverBrio</h3>
            <p className="text-sm font-medium text-blue-600 mb-4">Data Lakehouse for SMBs</p>
            <p className="text-slate-600 mb-4">
              A multi-tenant data lakehouse platform that gives small and growing businesses enterprise-grade analytics, storage, and governance without the enterprise complexity. Built on open standards — Apache Iceberg, Trino, and Superset — with compliance and cost controls designed in from day one.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span>Open lakehouse stack — Iceberg tables, distributed SQL, and rich dashboards</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span>Governance and GDPR compliance by default, with audit trails and row-level security</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span>Lifecycle management with hot-to-archive tiering and retention policies to control cost</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span>Browser-based workbench — drop a CSV, Parquet, or JSON file and query it instantly</li>
            </ul>
          </StaggerItem>

          {/* Ambitous */}
          <StaggerItem className="p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-slate-800">Ambitous</h3>
            <p className="text-sm font-medium text-purple-600 mb-4">Codebase Intelligence with Grounded Answers</p>
            <p className="text-slate-600 mb-4">
              Ask your codebase anything and get verified answers with file:line citations — no hallucination. Ambitous indexes your repositories, issues, pull requests, and schemas, and exposes that grounded context to coding agents like Claude Code and Cursor over MCP.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#10003;</span>Chain-of-Verification Q&A with file:line citations on every answer</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#10003;</span>Hybrid retrieval — semantic embeddings plus keyword search, refined by a reranker</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#10003;</span>Indexes issues, PRs, commits, and database schemas alongside code</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#10003;</span>MCP server keeps coding agents working with current, grounded project context</li>
            </ul>
          </StaggerItem>

          {/* Founders Console */}
          <StaggerItem className="p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-2xl font-semibold text-slate-800">Founders Console</h3>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap">Private Beta</span>
            </div>
            <p className="text-sm font-medium text-green-600 mb-4">Compliance-First Platform for Indian Startups</p>
            <p className="text-slate-600 mb-4">
              Company incorporation and ongoing regulatory compliance for Indian startups and the professionals who serve them. Every decision comes from formal rules and planners with a full audit trail — never a black-box answer.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span>Rules-as-code compliance logic with formal verification — every decision explainable</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span>Step-by-step filing plans with full provenance for each recommendation</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span>MCA, GST, and RBI integrations with document OCR and PDF generation</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span>Marketplace connecting founders with verified CAs, CSs, and lawyers</li>
            </ul>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Services Overview Section */}
      <AnimatedSection>
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
      </AnimatedSection>
    </div>
  );
}
