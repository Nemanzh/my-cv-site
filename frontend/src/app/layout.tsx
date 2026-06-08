import type { ReactNode } from 'react';
import './[locale]/globals.css';

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
      <body>{children}</body>
    </html>
  );
}
