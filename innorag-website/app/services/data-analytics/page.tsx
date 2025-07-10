
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
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Data Processing & Advanced Analytics</h1>
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
        <h3 className="text-2xl font-bold mb-4">Ready to Unlock Your Data's Potential?</h3>
        <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
          Start Your Data-Driven Journey
        </Link>
      </div>
    </div>
  );
}
