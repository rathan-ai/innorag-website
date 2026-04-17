
import type { Metadata } from 'next';
import AboutContent from '../../components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the story, mission, and vision of innorag Technologies.',
};

export default function AboutPage() {
  return <AboutContent />;
}
