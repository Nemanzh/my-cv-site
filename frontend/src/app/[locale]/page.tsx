import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import CaseStudies from '@/components/CaseStudies';
import EngagementModels from '@/components/EngagementModels';
import FaqClient from '@/components/FaqClient';
import ContactUs from '@/components/ContactUs';
import ClientPageWrapper from '@/components/ClientPageWrapper';
import SectionReveal from '@/components/SectionReveal';
import { routing } from '@/i18n/routing';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://nemanzh.dev';

const PAGE_META: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Nemanzh Software Studio | Next.js & .NET Software Development',
    description:
      'Nemanzh Software Studio builds modern web products, business platforms, API integrations, and Microsoft-first backend systems.',
  },
  sr: {
    title: 'Nemanzh Software Studio | Next.js i .NET razvoj softvera',
    description:
      'Nemanzh Software Studio razvija moderne web proizvode, poslovne platforme, API integracije i backend sisteme sa Microsoft tehnologijama.',
  },
  'sr-Cyrl': {
    title: 'Nemanzh Software Studio | Next.js и .NET развој софтвера',
    description:
      'Nemanzh Software Studio развија модерне веб производе, пословне платформе, API интеграције и backend системе са Microsoft технологијама.',
  },
};

function getCanonicalUrl(locale: string) {
  return locale === routing.defaultLocale ? `${SITE_URL}/` : `${SITE_URL}/${locale}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = getCanonicalUrl(locale);
  const pageMeta = PAGE_META[locale] ?? PAGE_META.en;

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/`,
        sr: `${SITE_URL}/sr`,
        'sr-Cyrl': `${SITE_URL}/sr-Cyrl`,
        'x-default': `${SITE_URL}/`,
      },
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: 'Nemanzh Software Studio',
      title: pageMeta.title,
      description: pageMeta.description,
      locale: locale === 'en' ? 'en_US' : 'sr_RS',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'Nemanzh Software Studio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      images: ['/twitter-image'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const canonical = getCanonicalUrl(locale);
  const isSerbian = locale === 'sr' || locale === 'sr-Cyrl';
  const serviceNames = isSerbian
    ? [
        'Microsoft .NET razvoj',
        'Next.js full-stack platforme',
        'Poslovni softver po meri',
        'API integracije i modernizacija',
      ]
    : [
        'Microsoft .NET development',
        'Next.js full-stack platforms',
        'Custom business software',
        'API integrations and modernization',
      ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: PAGE_META[locale]?.title ?? PAGE_META.en.title,
        description: PAGE_META[locale]?.description ?? PAGE_META.en.description,
        inLanguage: locale,
        about: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      ...serviceNames.map((name) => ({
        '@type': 'Service',
        serviceType: name,
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        areaServed: 'Worldwide',
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientPageWrapper>
        <SectionReveal>
          <Hero />
        </SectionReveal>
        <SectionReveal delayMs={70}>
          <WorkExperience />
        </SectionReveal>
        <SectionReveal delayMs={90}>
          <CaseStudies />
        </SectionReveal>
        <SectionReveal delayMs={110}>
          <Education />
        </SectionReveal>
        <SectionReveal delayMs={130}>
          <EngagementModels />
        </SectionReveal>
        <SectionReveal delayMs={150}>
          <Skills />
        </SectionReveal>
        <SectionReveal delayMs={190}>
          <FaqClient />
        </SectionReveal>
        <SectionReveal delayMs={210}>
          <ContactUs />
        </SectionReveal>
      </ClientPageWrapper>
    </>
  );
}
