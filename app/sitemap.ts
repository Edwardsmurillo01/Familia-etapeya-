import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://familiaetapeya.com';
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/consejos/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacidad/`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terminos/`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
