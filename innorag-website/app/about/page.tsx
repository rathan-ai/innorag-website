
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the story, mission, and vision of innorag Technologies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8 border-b pb-4">About <i>i</i>nnorag: The Genesis of Innovation</h1>

      <div className="space-y-10 text-lg text-slate-700">
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Name, Our Mission</h2>
          <p className="leading-relaxed">
            <strong><i>i</i>nnorag</strong> is a coined term derived from <strong>Innovation</strong> combined with the conceptual framework of <strong>Retrieve, Augment, and Generate</strong>. It reflects the company’s mission to retrieve knowledge or data, augment it with advanced technology, and generate new solutions, ideas, or insights.
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
