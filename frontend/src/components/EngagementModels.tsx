'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { useLocale } from 'next-intl';

interface ModelCard {
  title: string;
  fit: string;
  includes: string[];
}

export default function EngagementModels() {
  const theme = useTheme();
  const locale = useLocale();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;

  const content = isSr
    ? {
        title: 'MODELI SARADNJE',
        intro: 'Izaberi format saradnje prema obimu i dinamici projekta.',
        labels: {
          fit: 'Najbolje za',
          includes: 'Ukljucuje',
          cta: 'Zatrazite procenu',
        },
        cards: [
          {
            title: 'FIXED SCOPE',
            fit: 'Jasno definisani projekti sa poznatim zahtevima.',
            includes: ['Kickoff + plan', 'Fiksni milestones', 'Predvidiv budzet'],
          },
          {
            title: 'MONTHLY RETAINER',
            fit: 'Kontinuirani razvoj proizvoda i redovan delivery.',
            includes: ['Mesecni kapacitet', 'Nedeljni sync', 'Roadmap ownership'],
          },
          {
            title: 'TECHNICAL PARTNER',
            fit: 'Timovima kojima treba dugorocni tehnicki leadership.',
            includes: ['Arhitektura i kvalitet', 'Postavka procesa', 'Mentoring i scaling'],
          },
        ] as ModelCard[],
      }
    : {
        title: 'ENGAGEMENT MODELS',
        intro: 'Pick a collaboration model based on project scope and delivery cadence.',
        labels: {
          fit: 'Best for',
          includes: 'Includes',
          cta: 'Request estimate',
        },
        cards: [
          {
            title: 'FIXED SCOPE',
            fit: 'Clearly defined projects with stable requirements.',
            includes: ['Kickoff + plan', 'Fixed milestones', 'Predictable budget'],
          },
          {
            title: 'MONTHLY RETAINER',
            fit: 'Continuous product development and regular delivery.',
            includes: ['Monthly capacity', 'Weekly sync', 'Roadmap ownership'],
          },
          {
            title: 'TECHNICAL PARTNER',
            fit: 'Teams needing long-term technical leadership.',
            includes: ['Architecture and quality', 'Process setup', 'Mentoring and scaling'],
          },
        ] as ModelCard[],
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
                mb: { xs: 1.5, sm: 2 },
                color: theme.palette.terminal.text,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                textAlign: 'center',
              }}
            >
              <HighlightedText
                text={content.title}
                highlightIndices={highlightFirstLetters(content.title)}
                highlightColor={theme.palette.terminal.green}
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
              {content.cards.map((card) => (
                <Box
                  key={card.title}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    backgroundColor: theme.palette.terminal.header,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderLeft: `3px solid ${theme.palette.terminal.green}`,
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ color: theme.palette.terminal.green, mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.terminal.textSecondary, mb: 1 }}>
                    <strong>{content.labels.fit}:</strong> {card.fit}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.terminal.cyan, fontWeight: 'bold', mb: 0.75 }}
                  >
                    {content.labels.includes}:
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2, color: theme.palette.terminal.text }}>
                    {card.includes.map((item) => (
                      <Typography key={item} component="li" variant="body2" sx={{ mb: 0.5 }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
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
