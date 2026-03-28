'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { useLocale } from 'next-intl';

export default function Education() {
  const theme = useTheme();
  const locale = useLocale();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;
  const phaseColors = [
    theme.palette.terminal.cyan,
    theme.palette.terminal.green,
    theme.palette.terminal.yellow,
    theme.palette.terminal.magenta,
  ];

  const content = isSr
      ? {
        title: isSrCyrl ? 'КАКО РАДИМО' : 'KAKO RADIMO',
        intro: isSrCyrl
          ? 'Процес је једноставан, транспарентан и оријентисан на резултат. Microsoft стек користимо тамо где доноси највише вредности.'
          : 'Proces je jednostavan, transparentan i orijentisan na rezultat. Microsoft stack koristimo tamo gde donosi najvise vrednosti.',
        phases: [
          {
            step: '01',
            title: isSrCyrl ? 'ДИСКАВЕРИ' : 'DISCOVERY',
            text: isSrCyrl
              ? 'Анализа пословног контекста, захтева и ризика.'
              : 'Analiza poslovnog konteksta, zahteva i rizika.',
          },
          {
            step: '02',
            title: isSrCyrl ? 'АРХИТЕКТУРА' : 'ARHITEKTURA',
            text: isSrCyrl
              ? 'Дефинисање система, интеграција и планa испоруке.'
              : 'Definisanje sistema, integracija i plana isporuke.',
          },
          {
            step: '03',
            title: isSrCyrl ? 'ИМПЛЕМЕНТАЦИЈА' : 'IMPLEMENTACIJA',
            text: isSrCyrl
              ? 'Итеративни развој са кратким циклусима и честим демо прегледима.'
              : 'Iterativni razvoj sa kratkim ciklusima i cestim demo pregledima.',
          },
          {
            step: '04',
            title: isSrCyrl ? 'ЛАНСИРАЊЕ И ПОДРШКА' : 'LANSIRANJE I PODRSKA',
            text: isSrCyrl
              ? 'Пуштање у рад, мониторинг и континуирано побољшање.'
              : 'Pustanje u rad, monitoring i kontinuirano poboljsanje.',
          },
        ],
        processLabel: isSrCyrl ? 'ТОК РАДА' : 'TOK RADA',
      }
      : {
        title: 'HOW WE WORK',
        intro:
          'Our process is simple, transparent, and outcome-focused. We prioritize the Microsoft stack when it best fits product goals.',
        phases: [
          {
            step: '01',
            title: 'DISCOVERY',
            text: 'We align on business goals, constraints, and technical risks.',
          },
          {
            step: '02',
            title: 'ARCHITECTURE',
            text: 'We define system design, integrations, and rollout plan.',
          },
          {
            step: '03',
            title: 'IMPLEMENTATION',
            text: 'We deliver in short iterations with frequent demos and feedback.',
          },
          {
            step: '04',
            title: 'LAUNCH & SUPPORT',
            text: 'We release, monitor, and continuously improve.',
          },
        ],
        processLabel: 'PROCESS FLOW',
      };

  return (
    <Box component="section" id="process" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
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
                highlightColor={theme.palette.terminal.cyan}
              />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.terminal.textSecondary,
                textAlign: 'center',
                mb: { xs: 3, sm: 4 },
                maxWidth: '920px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {content.intro}
            </Typography>

            <Typography
              variant="overline"
              sx={{
                display: 'block',
                color: theme.palette.terminal.textSecondary,
                letterSpacing: '0.08em',
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              {content.processLabel}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 2, sm: 3 },
                mb: { xs: 3, sm: 4 },
              }}
            >
              {content.phases.map((phase, index) => (
                <Box
                  key={phase.step}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    background: `linear-gradient(180deg, ${theme.palette.terminal.header} 0%, ${theme.palette.terminal.background} 100%)`,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderRadius: 1,
                    borderLeft: `3px solid ${phaseColors[index] ?? theme.palette.terminal.cyan}`,
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: phaseColors[index] ?? theme.palette.terminal.yellow,
                      fontWeight: 'bold',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {phase.step}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: phaseColors[index] ?? theme.palette.terminal.green, mb: 1 }}
                  >
                    {phase.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.terminal.textSecondary }}>
                    {phase.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ textAlign: 'center', mt: { xs: 3, sm: 4 } }}>
              <Button
                component="a"
                href="#contact"
                sx={{
                  border: `1px solid ${theme.palette.terminal.magenta}`,
                  color: theme.palette.terminal.magenta,
                  backgroundColor: theme.palette.terminal.header,
                  textTransform: 'none',
                  width: { xs: '100%', sm: 220 },
                  px: 2.5,
                  py: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.terminal.magenta,
                    color: theme.palette.terminal.background,
                  },
                }}
              >
                {isSr ? (isSrCyrl ? 'Резервишите intro позив' : 'Rezervisite intro poziv') : 'Book intro call'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
