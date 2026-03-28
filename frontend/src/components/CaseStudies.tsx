'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { useLocale } from 'next-intl';

interface Study {
  title: string;
  problem: string;
  solution: string;
  stack: string;
  result: string;
}

export default function CaseStudies() {
  const theme = useTheme();
  const locale = useLocale();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;

  const content = isSr
    ? {
        title: isSrCyrl ? 'СТУДИЈЕ СЛУЧАЈА' : 'STUDIJE SLUCAJA',
        intro: isSrCyrl
          ? 'Кратак пресек реалних испорука са јасним пословним ефектом.'
          : 'Kratak presek realnih isporuka sa jasnim poslovnim efektom.',
        labels: {
          problem: isSrCyrl ? 'Проблем' : 'Problem',
          solution: isSrCyrl ? 'Решење' : 'Resenje',
          stack: isSrCyrl ? 'Стек' : 'Stack',
          result: isSrCyrl ? 'Резултат' : 'Rezultat',
          cta: isSrCyrl ? 'Покренимо ваш пројекат' : 'Pokrenimo vas projekat',
        },
        items: [
          {
            title: isSrCyrl ? 'НФТ МАРКЕТПЛЕЈС ПЛАТФОРМА' : 'NFT MARKETPLACE PLATFORMA',
            problem: isSrCyrl
              ? 'Спор API и растући обим трансакција.'
              : 'Spor API i rastuci obim transakcija.',
            solution: isSrCyrl
              ? 'Редизајн backend-а и оптимизација критичних токова.'
              : 'Redizajn backend-a i optimizacija kriticnih tokova.',
            stack: '.NET, Node.js, Next.js, PostgreSQL',
            result: isSrCyrl
              ? '10K+ трансакција и 40% бржи одзив API-ја.'
              : '10K+ transakcija i 40% brzi odziv API-ja.',
          },
          {
            title: isSrCyrl ? 'ЕНТЕРПРАЈЗ ДОСТАВА АПЛИКАЦИЈА' : 'ENTERPRISE DOSTAVA APLIKACIJA',
            problem: isSrCyrl
              ? 'Неуједначен квалитет и кашњења у испоруци.'
              : 'Neujednacen kvalitet i kasnjenja u isporuci.',
            solution: isSrCyrl
              ? 'Стандардизација процеса, CI/CD и аутоматизовано тестирање.'
              : 'Standardizacija procesa, CI/CD i automatizovano testiranje.',
            stack: 'Next.js, .NET, Azure DevOps',
            result: isSrCyrl
              ? '15+ пројеката испоручено, 60% мање багова.'
              : '15+ projekata isporuceno, 60% manje bagova.',
          },
          {
            title: isSrCyrl ? 'МОДЕРНИЗАЦИЈА ОСИГУРАЊА' : 'MODERNIZACIJA OSIGURANJA',
            problem: isSrCyrl
              ? 'Legacy систем који успорава увођење нових функција.'
              : 'Legacy sistem koji usporava uvodjenje novih funkcija.',
            solution: isSrCyrl
              ? 'Постепена миграција и рефакторинг кључних модула.'
              : 'Postepena migracija i refaktoring kljucnih modula.',
            stack: 'C#, .NET, SQL Server',
            result: isSrCyrl
              ? '35% боље перформансе система.'
              : '35% bolje performanse sistema.',
          },
        ] as Study[],
      }
    : {
        title: 'CASE STUDIES',
        intro: 'A quick snapshot of delivery work with measurable outcomes.',
        labels: {
          problem: 'Problem',
          solution: 'Solution',
          stack: 'Stack',
          result: 'Result',
          cta: 'Start your project',
        },
        items: [
          {
            title: 'NFT MARKETPLACE PLATFORM',
            problem: 'Slow APIs under growing transaction volume.',
            solution: 'Backend redesign and optimization of critical flows.',
            stack: '.NET, Node.js, Next.js, PostgreSQL',
            result: '10K+ transactions and 40% faster API response.',
          },
          {
            title: 'ENTERPRISE APP DELIVERY',
            problem: 'Inconsistent quality and delivery delays.',
            solution: 'Standardized process, CI/CD, and test automation.',
            stack: 'Next.js, .NET, Azure DevOps',
            result: '15+ delivered projects and 60% fewer bugs.',
          },
          {
            title: 'INSURANCE MODERNIZATION',
            problem: 'Legacy system slowing feature delivery.',
            solution: 'Incremental migration and refactoring of key modules.',
            stack: 'C#, .NET, SQL Server',
            result: '35% system performance improvement.',
          },
        ] as Study[],
      };

  return (
    <Box component="section" id="case-studies" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
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
                highlightColor={theme.palette.terminal.yellow}
              />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.terminal.textSecondary,
                textAlign: 'center',
                mb: { xs: 3, sm: 4 },
                maxWidth: '860px',
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
              {content.items.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    backgroundColor: theme.palette.terminal.header,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderRadius: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ color: theme.palette.terminal.cyan }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: theme.palette.terminal.textSecondary }}>
                    <strong>{content.labels.problem}:</strong> {item.problem}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.terminal.textSecondary }}>
                    <strong>{content.labels.solution}:</strong> {item.solution}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.terminal.textSecondary }}>
                    <strong>{content.labels.stack}:</strong> {item.stack}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.terminal.green }}>
                    <strong>{content.labels.result}:</strong> {item.result}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ textAlign: 'center', mt: { xs: 3, sm: 4 } }}>
              <Button
                component="a"
                href="#contact"
                sx={{
                  border: `1px solid ${theme.palette.terminal.cyan}`,
                  color: theme.palette.terminal.cyan,
                  backgroundColor: theme.palette.terminal.header,
                  textTransform: 'none',
                  px: 2.5,
                  py: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.terminal.cyan,
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
