
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
