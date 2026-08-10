import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://innorag.com';
  const routes = [
    '',
    '/services',
    '/services/data-analytics',
    '/services/software-support',
    '/services/research-development',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-use',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
