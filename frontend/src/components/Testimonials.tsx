'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent, useTheme } from '@mui/material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { useLocale } from 'next-intl';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export default function Testimonials() {
  const theme = useTheme();
  const locale = useLocale();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;

  const content = isSr
    ? {
        title: isSrCyrl ? 'POVERENJE KLIJENATA' : 'POVERENJE KLIJENATA',
        intro: isSrCyrl
          ? 'Kratke preporuke timova sa kojima smo saradivali.'
          : 'Kratke preporuke timova sa kojima smo saradivali.',
        items: [
          {
            quote:
              'Tim je usao u kompleksnu arhitekturu brzo i isporucivao bez probijanja rokova.',
            author: 'M. Andersson',
            role: 'Engineering Manager, Stockholm',
          },
          {
            quote: 'Kvalitet koda i komunikacija su bili na nivou senior produkt tima.',
            author: 'A. Petrovic',
            role: 'Product Lead, Belgrade',
          },
          {
            quote: 'Posle modernizacije imamo stabilniji sistem i brzu isporuku funkcija.',
            author: 'L. S.',
            role: 'Operations Director, Insurance',
          },
        ] as Testimonial[],
      }
    : {
        title: 'CLIENT FEEDBACK',
        intro: 'Short recommendations from teams we have worked with.',
        items: [
          {
            quote:
              'The team onboarded into a complex architecture quickly and delivered consistently on time.',
            author: 'M. Andersson',
            role: 'Engineering Manager, Stockholm',
          },
          {
            quote:
              'Code quality and communication were on par with a senior in-house product team.',
            author: 'A. Petrovic',
            role: 'Product Lead, Belgrade',
          },
          {
            quote:
              'After modernization, we run a more stable system and ship features much faster.',
            author: 'L. S.',
            role: 'Operations Director, Insurance',
          },
        ] as Testimonial[],
      };

  return (
    <Box component="section" id="testimonials" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
      <Container maxWidth="xl">
        <Card
          className="terminal-window"
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            backgroundColor: theme.palette.terminal.background,
            border: `1px solid ${theme.palette.terminal.border}`,
          }}
        >
          <CardContent
            sx={{
              backgroundColor: theme.palette.terminal.background,
              color: theme.palette.terminal.text,
              p: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: { xs: 1.5, sm: 2 },
                color: theme.palette.terminal.text,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                textAlign: 'center',
              }}
            >
              <HighlightedText
                text={content.title}
                highlightIndices={highlightFirstLetters(content.title)}
                highlightColor={theme.palette.terminal.magenta}
              />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.terminal.textSecondary,
                textAlign: 'center',
                mb: { xs: 3, sm: 4 },
                maxWidth: '760px',
                mx: 'auto',
              }}
            >
              {content.intro}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr 1fr' },
                gap: { xs: 2, sm: 3 },
              }}
            >
              {content.items.map((item, index) => (
                <Box
                  key={`${item.author}-${index}`}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    background: `linear-gradient(180deg, ${theme.palette.terminal.header} 0%, ${theme.palette.terminal.background} 100%)`,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderLeft: `3px solid ${theme.palette.terminal.magenta}`,
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.terminal.text, mb: 1.5, lineHeight: 1.7 }}
                  >
                    {`"${item.quote}"`}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: theme.palette.terminal.cyan }}>
                    {item.author}
                  </Typography>
                  <Typography variant="caption" sx={{ color: theme.palette.terminal.textSecondary }}>
                    {item.role}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
