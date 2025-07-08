import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import { Box } from '@mui/material';

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
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, 
            rgba(13, 17, 23, 1) 0%, 
            rgba(22, 27, 34, 1) 25%, 
            rgba(13, 17, 23, 1) 50%, 
            rgba(22, 27, 34, 1) 75%, 
            rgba(13, 17, 23, 1) 100%
          )
        `,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              rgba(120, 119, 198, 0.03) 100px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 98px,
              rgba(120, 119, 198, 0.03) 100px
            )
          `,
          pointerEvents: 'none',
          zIndex: 0,
        },
        '& > *': {
          position: 'relative',
          zIndex: 1,
        },
      }}
    >
      <Hero />
      <WorkExperience />
      <Education />
      <Skills />
    </Box>
  );
}
