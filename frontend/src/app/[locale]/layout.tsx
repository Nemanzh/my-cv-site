import type { Metadata } from 'next';
import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import WebVitals from '@/components/WebVitals';
import StickyCta from '@/components/StickyCta';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://nemanzh.dev';

function getCanonicalUrl(locale: string) {
  return locale === routing.defaultLocale ? `${SITE_URL}/` : `${SITE_URL}/${locale}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const canonical = getCanonicalUrl(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/`,
        sr: `${SITE_URL}/sr`,
        'sr-Cyrl': `${SITE_URL}/sr-Cyrl`,
        'x-default': `${SITE_URL}/`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: 'Nemanzh Software Studio',
      title: t('title'),
      description: t('description'),
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
      title: t('title'),
      description: t('description'),
      images: ['/twitter-image'],
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
        { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
      other: [
        {
          rel: 'mask-icon',
          url: '/favicon.svg',
          color: '#20E0FF',
        },
      ],
    },
    manifest: '/site.webmanifest',
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const canonical = getCanonicalUrl(locale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Nemanzh Software Studio',
        url: SITE_URL,
        logo: `${SITE_URL}/android-chrome-512x512.png`,
        sameAs: [
          'https://github.com/nemanjaradulovic',
          'https://www.linkedin.com/in/nemanja-radulovic/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Nemanzh Software Studio',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: locale,
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: 'Nemanzh Software Studio',
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        inLanguage: locale,
      },
    ],
  };

  return (
    <html lang={locale}>
      <head></head>
      <body>
        <AppRouterCacheProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <WebVitals />
          <ThemeProvider>
            <NextIntlClientProvider>
              <Header />
              <StickyCta />
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
