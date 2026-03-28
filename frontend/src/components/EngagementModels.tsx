'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import { CalendarMonth, Hub, PrecisionManufacturing } from '@mui/icons-material';
import { useLocale } from 'next-intl';

interface ModelCard {
  title: string;
  fit: string;
  includes: string[];
  icon: React.ReactNode;
  accent: string;
}

interface QualityPillar {
  title: string;
  text: string;
  accent: string;
}

export default function EngagementModels() {
  const theme = useTheme();
  const locale = useLocale();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;

  const content = isSr
    ? {
        titleMain: 'MODELI',
        titleAccent: 'SARADNJE',
        intro: 'Izaberi format saradnje prema obimu projekta, brzini isporuke i nivou ownership-a.',
        labels: {
          fit: 'Najbolje za',
          includes: 'Ukljucuje',
          qualityTitle: 'STANDARDI KVALITETA',
          cta: 'Zatrazite procenu',
          trust: 'Jasni scope, transparentna komunikacija i merljiv delivery.',
        },
        cards: [
          {
            title: 'FIXED SCOPE',
            fit: 'Jasno definisani projekti sa poznatim zahtevima i rokovima.',
            includes: ['Kickoff + plan', 'Fiksni milestones', 'Predvidiv budzet'],
            icon: <PrecisionManufacturing sx={{ color: theme.palette.terminal.cyan }} />,
            accent: theme.palette.terminal.cyan,
          },
          {
            title: 'MONTHLY RETAINER',
            fit: 'Kontinuirani razvoj proizvoda i stabilan mesecni kapacitet.',
            includes: ['Mesecni kapacitet', 'Nedeljni sync', 'Roadmap ownership'],
            icon: <CalendarMonth sx={{ color: theme.palette.terminal.green }} />,
            accent: theme.palette.terminal.green,
          },
          {
            title: 'TECHNICAL PARTNER',
            fit: 'Timovima kojima treba dugorocni tehnicki leadership i arhitektura.',
            includes: ['Arhitektura i kvalitet', 'Postavka procesa', 'Mentoring i scaling'],
            icon: <Hub sx={{ color: theme.palette.terminal.magenta }} />,
            accent: theme.palette.terminal.magenta,
          },
        ] as ModelCard[],
        quality: [
          {
            title: 'Code Quality',
            text: 'Cist, dokumentovan i odrziv kod sa jasnim ownership-om.',
            accent: theme.palette.terminal.cyan,
          },
          {
            title: 'Testing Discipline',
            text: 'Testiranje kriticnih tokova na backendu i frontendu.',
            accent: theme.palette.terminal.green,
          },
          {
            title: 'Delivery Communication',
            text: 'Predvidiv ritam rada sa transparentnim statusima i rizicima.',
            accent: theme.palette.terminal.magenta,
          },
        ] as QualityPillar[],
      }
    : {
        titleMain: 'ENGAGEMENT',
        titleAccent: 'MODELS',
        intro:
          'Choose the collaboration format based on project scope, delivery speed, and ownership level.',
        labels: {
          fit: 'Best for',
          includes: 'Includes',
          qualityTitle: 'QUALITY STANDARDS',
          cta: 'Request estimate',
          trust: 'Clear scope, transparent communication, and measurable delivery.',
        },
        cards: [
          {
            title: 'FIXED SCOPE',
            fit: 'Clearly defined projects with stable requirements and timelines.',
            includes: ['Kickoff + plan', 'Fixed milestones', 'Predictable budget'],
            icon: <PrecisionManufacturing sx={{ color: theme.palette.terminal.cyan }} />,
            accent: theme.palette.terminal.cyan,
          },
          {
            title: 'MONTHLY RETAINER',
            fit: 'Continuous product development with steady monthly capacity.',
            includes: ['Monthly capacity', 'Weekly sync', 'Roadmap ownership'],
            icon: <CalendarMonth sx={{ color: theme.palette.terminal.green }} />,
            accent: theme.palette.terminal.green,
          },
          {
            title: 'TECHNICAL PARTNER',
            fit: 'Teams needing long-term technical leadership and architecture ownership.',
            includes: ['Architecture and quality', 'Process setup', 'Mentoring and scaling'],
            icon: <Hub sx={{ color: theme.palette.terminal.magenta }} />,
            accent: theme.palette.terminal.magenta,
          },
        ] as ModelCard[],
        quality: [
          {
            title: 'Code Quality',
            text: 'Clean, documented, and maintainable code with explicit ownership.',
            accent: theme.palette.terminal.cyan,
          },
          {
            title: 'Testing Discipline',
            text: 'Critical-path testing coverage on backend and frontend.',
            accent: theme.palette.terminal.green,
          },
          {
            title: 'Delivery Communication',
            text: 'Predictable cadence with transparent status and risk reporting.',
            accent: theme.palette.terminal.magenta,
          },
        ] as QualityPillar[],
      };

  return (
    <Box component="section" id="engagement" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
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
                mb: 1.25,
                textAlign: 'center',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '2.85rem' },
                letterSpacing: '0.02em',
              }}
            >
              <Box component="span" sx={{ color: theme.palette.terminal.text }}>
                {content.titleMain}{' '}
              </Box>
              <Box component="span" sx={{ color: theme.palette.terminal.green }}>
                {content.titleAccent}
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.terminal.textSecondary,
                textAlign: 'center',
                mb: { xs: 2.5, sm: 3 },
                maxWidth: '820px',
                mx: 'auto',
              }}
            >
              {content.intro}
            </Typography>

            <Box
              sx={{
                mb: { xs: 2.5, sm: 3 },
                px: { xs: 1.5, sm: 2 },
                py: 1.25,
                border: `1px dashed ${theme.palette.terminal.border}`,
                borderRadius: 1,
                backgroundColor: theme.palette.terminal.header,
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" sx={{ color: theme.palette.terminal.textSecondary }}>
                {content.labels.trust}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', xl: '1fr 1fr 1fr' },
                gap: { xs: 2, sm: 2.5 },
              }}
            >
              {content.cards.map((card, index) => (
                <Box
                  key={card.title}
                  sx={{
                    p: { xs: 2, sm: 2.5 },
                    background: `linear-gradient(170deg, ${theme.palette.terminal.header} 0%, ${theme.palette.terminal.background} 100%)`,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderTop: `3px solid ${card.accent}`,
                    borderRadius: 1,
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderColor: card.accent,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Typography
                      variant="overline"
                      sx={{ color: theme.palette.terminal.textSecondary, letterSpacing: '0.08em' }}
                    >
                      {`MODEL 0${index + 1}`}
                    </Typography>
                    {card.icon}
                  </Box>
                  <Typography variant="h6" sx={{ color: card.accent, mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.terminal.textSecondary, mb: 1.25 }}>
                    <strong>{content.labels.fit}:</strong> {card.fit}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.terminal.text, fontWeight: 700, mb: 0.6 }}
                  >
                    {content.labels.includes}
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2, color: theme.palette.terminal.text }}>
                    {card.includes.map((item) => (
                      <Typography key={item} component="li" variant="body2" sx={{ mb: 0.4 }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: { xs: 2.5, sm: 3 } }}>
              <Typography
                variant="overline"
                sx={{
                  display: 'block',
                  color: theme.palette.terminal.magenta,
                  letterSpacing: '0.08em',
                  mb: 1.25,
                }}
              >
                {content.labels.qualityTitle}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
                  gap: { xs: 1.5, sm: 2 },
                }}
              >
                {content.quality.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      p: { xs: 1.75, sm: 2 },
                      border: `1px solid ${theme.palette.terminal.border}`,
                      borderLeft: `3px solid ${item.accent}`,
                      borderRadius: 1,
                      backgroundColor: theme.palette.terminal.header,
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: item.accent, fontWeight: 700, mb: 0.6 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.terminal.textSecondary }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ textAlign: 'center', mt: { xs: 3, sm: 4 } }}>
              <Button
                component="a"
                href="#contact"
                sx={{
                  border: `1px solid ${theme.palette.terminal.green}`,
                  color: theme.palette.terminal.green,
                  backgroundColor: theme.palette.terminal.header,
                  textTransform: 'none',
                  width: { xs: '100%', sm: 220 },
                  px: 2.5,
                  py: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.terminal.green,
                    color: theme.palette.terminal.background,
                  },
                }}
              >
                {content.labels.cta}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
