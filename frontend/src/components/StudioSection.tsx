'use client';

import { Box, Typography, useTheme } from '@mui/material';
import type { ReactNode } from 'react';

type StudioSectionProps = {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function StudioSection({
  id,
  kicker,
  title,
  intro,
  children,
}: StudioSectionProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id={id}
      sx={{
        scrollMarginTop: { xs: 88, lg: 112 },
        display: 'grid',
        gap: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gap: 1.5,
          maxWidth: '720px',
        }}
      >
        <Typography
          component="p"
          sx={{
            color: theme.palette.terminal.green,
            fontSize: '0.78rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {kicker}
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: theme.palette.terminal.text,
            fontSize: { xs: '1.9rem', md: '2.6rem' },
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            maxWidth: '13ch',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.terminal.textSecondary,
            fontSize: { xs: '0.98rem', md: '1.05rem' },
            lineHeight: 1.75,
            maxWidth: '62ch',
          }}
        >
          {intro}
        </Typography>
      </Box>

      {children}
    </Box>
  );
}
