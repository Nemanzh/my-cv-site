'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  useTheme,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
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
  const railRef = React.useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: 'left' | 'right') => {
    if (!railRef.current) return;
    const rail = railRef.current;
    const firstCard = rail.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(window.getComputedStyle(rail).gap || '0');
    const amount = firstCard ? firstCard.clientWidth + gap : Math.round(rail.clientWidth * 0.82);
    const maxScrollLeft = Math.max(rail.scrollWidth - rail.clientWidth, 0);
    const nearStart = rail.scrollLeft <= 8;
    const nearEnd = rail.scrollLeft >= maxScrollLeft - 8;

    if (direction === 'right' && nearEnd) {
      rail.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    if (direction === 'left' && nearStart) {
      rail.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
      return;
    }

    rail.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const content = isSr
    ? {
        title: 'POVERENJE KLIJENATA',
        intro: 'Utisci timova sa kojima smo saradivali kroz razlicite modele angazmana.',
        items: [
          {
            quote:
              'Tim je usao u kompleksnu arhitekturu brzo i isporucivao bez probijanja rokova.',
            author: 'M.A.',
            role: 'Engineering Manager, Stockholm',
          },
          {
            quote: 'Kvalitet koda i komunikacija su bili na nivou senior produkt tima.',
            author: 'A.P.',
            role: 'Product Lead, Belgrade',
          },
          {
            quote: 'Posle modernizacije imamo stabilniji sistem i brzu isporuku funkcija.',
            author: 'L.S.',
            role: 'Operations Director, Insurance',
          },
          {
            quote: 'Isporuka je bila veoma predvidiva, bez iznenadjenja u poslednjem trenutku.',
            author: 'N.I.',
            role: 'COO, SaaS Startup',
          },
          {
            quote: 'Preuzimanje postojeceg sistema je uradjeno bez prekida poslovanja.',
            author: 'D.M.',
            role: 'CTO, Enterprise Partner',
          },
          {
            quote: 'Odlicna saradnja, posebno u postavljanju procesa i tehnickih standarda.',
            author: 'E.H.',
            role: 'Head of Product, Fintech',
          },
        ] as Testimonial[],
      }
    : {
        title: 'CLIENT FEEDBACK',
        intro: 'Feedback from teams we worked with across different engagement models.',
        items: [
          {
            quote:
              'The team onboarded into a complex architecture quickly and delivered consistently on time.',
            author: 'M.A.',
            role: 'Engineering Manager, Stockholm',
          },
          {
            quote:
              'Code quality and communication were on par with a senior in-house product team.',
            author: 'A.P.',
            role: 'Product Lead, Belgrade',
          },
          {
            quote:
              'After modernization, we run a more stable system and ship features much faster.',
            author: 'L.S.',
            role: 'Operations Director, Insurance',
          },
          {
            quote:
              'Delivery became highly predictable, with no last-minute surprises across milestones.',
            author: 'N.I.',
            role: 'COO, SaaS Startup',
          },
          {
            quote:
              'They took over an existing system smoothly without disrupting day-to-day operations.',
            author: 'D.M.',
            role: 'CTO, Enterprise Partner',
          },
          {
            quote:
              'Great collaboration, especially in setting engineering process and quality standards.',
            author: 'E.H.',
            role: 'Head of Product, Fintech',
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
                mb: 1.5,
                maxWidth: '760px',
                mx: 'auto',
              }}
            >
              {content.intro}
            </Typography>

            <Box sx={{ position: 'relative' }}>
              <IconButton
                onClick={() => scrollByCards('left')}
                aria-label="Scroll testimonials left"
                sx={{
                  position: 'absolute',
                  display: { xs: 'none', md: 'inline-flex' },
                  left: { md: -12, lg: -14 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 3,
                  border: `1px solid ${theme.palette.terminal.border}`,
                  color: theme.palette.terminal.text,
                  backgroundColor: theme.palette.terminal.header,
                  backdropFilter: 'blur(6px)',
                  '&:hover': { color: theme.palette.terminal.cyan },
                }}
              >
                <ChevronLeft />
              </IconButton>

              <IconButton
                onClick={() => scrollByCards('right')}
                aria-label="Scroll testimonials right"
                sx={{
                  position: 'absolute',
                  display: { xs: 'none', md: 'inline-flex' },
                  right: { md: -12, lg: -14 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 3,
                  border: `1px solid ${theme.palette.terminal.border}`,
                  color: theme.palette.terminal.text,
                  backgroundColor: theme.palette.terminal.header,
                  backdropFilter: 'blur(6px)',
                  '&:hover': { color: theme.palette.terminal.cyan },
                }}
              >
                <ChevronRight />
              </IconButton>

              <Box
                sx={{
                  pointerEvents: 'none',
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 8,
                  width: 44,
                  zIndex: 2,
                  background: `linear-gradient(90deg, ${theme.palette.terminal.background} 0%, transparent 100%)`,
                }}
              />
              <Box
                sx={{
                  pointerEvents: 'none',
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 8,
                  width: 44,
                  zIndex: 2,
                  background: `linear-gradient(270deg, ${theme.palette.terminal.background} 0%, transparent 100%)`,
                }}
              />

              <Box
                ref={railRef}
                sx={{
                  display: 'flex',
                  gap: { xs: 1.5, sm: 2 },
                  overflowX: 'auto',
                  scrollBehavior: 'smooth',
                  pb: 1,
                  pr: 0.5,
                  px: { xs: 0.5, sm: 1 },
                  scrollSnapType: 'x mandatory',
                  '&::-webkit-scrollbar': {
                    height: 8,
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: theme.palette.terminal.header,
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.terminal.border,
                    borderRadius: 8,
                  },
                }}
              >
                {content.items.map((item, index) => (
                  <Box
                    key={`${item.author}-${index}`}
                    sx={{
                      minWidth: { xs: '92%', sm: '70%', md: '56%', lg: '38%' },
                      scrollSnapAlign: 'start',
                      p: { xs: 2, sm: 2.5 },
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
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
