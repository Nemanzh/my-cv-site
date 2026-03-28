import type { MetadataRoute } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://nemanzh.dev';

const LOCALE_PATHS = ['', '/sr', '/sr-Cyrl'] as const;
const SERVICE_SLUGS = [
  'microsoft-dotnet-development',
  'web-platforms-full-stack',
  'custom-business-software',
  'integrations-modernization',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries = LOCALE_PATHS.map((path) => {
    const url = `${SITE_URL}${path || '/'}`;
    return {
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
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

  const serviceEntries = LOCALE_PATHS.flatMap((path) =>
    SERVICE_SLUGS.map((slug) => ({
      url: `${SITE_URL}${path || ''}/services/${slug}`.replace('//services', '/services'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 0.85 : 0.75,
    })),
  );

  return [...homeEntries, ...serviceEntries];
}
