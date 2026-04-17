
import type { Metadata } from 'next';
import ServicePageContent from '../../../components/ServicePageContent';

export const metadata: Metadata = {
  title: 'Software Support & Maintenance',
  description: 'Comprehensive software support and maintenance services including troubleshooting, version upgrades, performance optimization, and annual maintenance contracts.',
};

const features = [
    "Troubleshooting & Debugging",
    "Version Upgrades & Patch Management",
    "Performance Optimization",
    "End-User Assistance",
    "Annual Maintenance Contracts (AMCs)",
    "Remote & On-Site Technical Services"
];

export default function SoftwareSupportPage() {
  return (
    <ServicePageContent
      title="Comprehensive Software Support & Maintenance"
      description="We ensure your software solutions run smoothly, efficiently, and reliably, so you can focus on your core business."
      features={features}
      ctaTitle="Ready for Reliable Support?"
      ctaText="Get a Custom Support Quote"
    />
  );
}
