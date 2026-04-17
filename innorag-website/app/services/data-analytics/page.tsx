
import type { Metadata } from 'next';
import ServicePageContent from '../../../components/ServicePageContent';

export const metadata: Metadata = {
  title: 'Data Processing & Advanced Analytics',
  description: 'Transform complex data into actionable insights with our data processing and advanced analytics services including data visualization, database management, and data mining.',
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
    <ServicePageContent
      title="Data Processing & Advanced Analytics"
      description="We turn your complex data into clear, actionable insights that drive strategic decisions and business growth."
      features={features}
      ctaTitle="Ready to Unlock Your Data's Potential?"
      ctaText="Start Your Data-Driven Journey"
    />
  );
}
