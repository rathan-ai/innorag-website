
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // A popular icon library

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-28 rounded-xl bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
          <i>i</i>nnorag: Retrieve, Augment, Generate
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
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-200 rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">Retrieve</h3>
            <p className="text-slate-600">We start by understanding and retrieving essential knowledge and data from complex systems, laying a solid foundation for innovation.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">Augment</h3>
            <p className="text-slate-600">We enhance and enrich this data with advanced analytics, machine learning, and cutting-edge technology to uncover deeper insights.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">Generate</h3>
            <p className="text-slate-600">We generate novel solutions, actionable strategies, and new opportunities, creating tangible value and driving progress.</p>
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
