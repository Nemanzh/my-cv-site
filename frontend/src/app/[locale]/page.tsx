import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Hero />;
}
