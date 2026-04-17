
import type { Metadata } from 'next';
import ServicesContent from '../../components/ServicesContent';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our services in software support, data analytics, and research & development.',
};

export default function ServicesHubPage() {
  return <ServicesContent />;
}
