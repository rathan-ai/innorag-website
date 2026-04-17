
import type { Metadata } from 'next';
import ServicePageContent from '../../../components/ServicePageContent';

export const metadata: Metadata = {
  title: 'Research & Development Partnerships',
  description: 'Partner with innorag Technologies for R&D in AI, machine learning, robotics, and data science. We support academic and industrial collaboration and research commercialization.',
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
    <ServicePageContent
      title="Research & Development Partnerships"
      description="Partner with us to explore the frontiers of technology and turn ambitious ideas into market-ready innovations."
      features={features}
      ctaTitle="Ready to Innovate Together?"
      ctaText="Collaborate on an Innovative Project"
    />
  );
}
