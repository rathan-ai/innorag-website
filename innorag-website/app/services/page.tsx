
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our services in software support, data analytics, and research & development.',
};

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
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Services: A Framework for Innovation</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          All Innorag services are built on our "Retrieve, Augment, Generate" philosophy to deliver tangible results and drive your business forward.
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
