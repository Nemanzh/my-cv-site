import type { MetadataRoute } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://nemanzh.dev';

const LOCALE_PATHS = ['', '/sr', '/sr-Cyrl'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALE_PATHS.map((path) => {
    const url = `${SITE_URL}${path || '/'}`;
    return {
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: path === '' ? 1 : 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/`,
          sr: `${SITE_URL}/sr`,
          'sr-Cyrl': `${SITE_URL}/sr-Cyrl`,
          'x-default': `${SITE_URL}/`,
        },
      },
    };
  });
}
