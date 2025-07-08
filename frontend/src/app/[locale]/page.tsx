import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import ClientPageWrapper from '@/components/ClientPageWrapper';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ClientPageWrapper>
      <Hero />
      <WorkExperience />
      <Education />
      <Skills />
    </ClientPageWrapper>
  );
}
