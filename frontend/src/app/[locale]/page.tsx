import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import { Box } from '@mui/material';
import Skills from '@/components/Skills';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Hero />
      <WorkExperience />
      <Education />
      <Skills />
    </Box>
  );
}
