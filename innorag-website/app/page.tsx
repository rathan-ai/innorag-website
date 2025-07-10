
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
