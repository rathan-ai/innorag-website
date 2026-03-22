
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // A popular icon library
import RAGTitle from '../components/RAGTitle';
import Partners from '../components/Partners';

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
        <h1 className="mb-4">
          <RAGTitle size="lg" animated={true} />
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Digital Transformation is not enough. It&apos;s time for AI Transformation. We build intelligent platforms that go beyond digitization — powered by data, driven by AI.
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

      {/* Partners Section */}
      <Partners />

      {/* Products Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Intelligent platforms powered by data and AI
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AlphaSutra */}
          <div className="p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-slate-800">AlphaSutra</h3>
            <p className="text-sm font-medium text-blue-600 mb-4">AI-Powered Trading Assistant</p>
            <p className="text-slate-600 mb-4">
              An intelligent stock market trading platform that combines multiple AI models to generate consensus-driven trade signals for BankNifty options. Subscribers receive real-time trade alerts, daily market briefings, performance reports, and tax summaries — all delivered via WhatsApp.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span>Multi-AI consensus engine for trade signal generation</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span>Automated position monitoring and risk management</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span>Daily, weekly, and monthly P&L reports</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span>End-of-year tax reporting with charge breakdowns</li>
            </ul>
          </div>

          {/* AstraCelestia */}
          <div className="p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-slate-800">AstraCelestia</h3>
            <p className="text-sm font-medium text-purple-600 mb-4">Multi-Faith Matchmaking & Ceremony Planning</p>
            <p className="text-slate-600 mb-4">
              A modern matchmaking platform built for families and communities across faiths and religions. Brokers and families can upload profiles, generate compatibility insights, and discover meaningful matches rooted in their own traditions. Users stay engaged through WhatsApp notifications for new proposals, profile updates, and match recommendations.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#10003;</span>Multi-faith and multi-religion compatibility matching</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#10003;</span>Broker-managed profile listings across communities</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#10003;</span>Real-time WhatsApp notifications for proposals and updates</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#10003;</span>Tradition-specific ceremony planning tools</li>
            </ul>
          </div>

          {/* Founders Console */}
          <div className="p-8 border border-slate-200 rounded-lg bg-white shadow-sm text-left flex flex-col">
            <div className="mb-4">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-slate-800">Founders Console</h3>
            <p className="text-sm font-medium text-green-600 mb-4">Coming Soon</p>
            <p className="text-slate-600">
              Tools and insights for founders to build, measure, and scale their ventures.
            </p>
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
