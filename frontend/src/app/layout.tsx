import type { ReactNode } from 'react';
import Script from 'next/script';
import './[locale]/globals.css';

const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params?: Promise<{ locale?: string }>;
}>) {
  const locale = (await params)?.locale ?? 'en';

  return (
    <html lang={locale}>
      <body>
        {children}
        {UMAMI_WEBSITE_ID ? (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id={UMAMI_WEBSITE_ID}
            data-domains="nemanzh.dev,www.nemanzh.dev"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
