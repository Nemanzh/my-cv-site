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

export default function WorkExperience({ locale }: { locale: string }) {
  const theme = useTheme();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;

  const content = isSr
      ? {
        title: isSrCyrl ? 'УСЛУГЕ СТУДИЈА' : 'USLUGE STUDIJA',
        intro: isSrCyrl
          ? 'Од идеје до production-а: испоручујемо јасне, мерљиве и одрживе софтверске системе са Microsoft технологијама у првом плану.'
          : 'Od ideje do production-a: isporucujemo jasne, merljive i odrzive softverske sisteme sa Microsoft tehnologijama u prvom planu.',
        cards: [
          {
            name: isSrCyrl ? 'МИЦРОСОФТ .НЕТ РАЗВОЈ' : 'MICROSOFT .NET RAZVOJ',
            description: isSrCyrl
              ? 'Развијамо backend системе, АПИ слојеве и пословну логику у C#/.NET екосистему.'
              : 'Razvijamo backend sisteme, API slojeve i poslovnu logiku u C#/.NET ekosistemu.',
            outcomes: isSrCyrl
              ? ['Стабилни и тестабилни сервиси', 'Чист доменски модел', 'Спремност за даље скалирање']
              : ['Stabilni i testabilni servisi', 'Cist domenski model', 'Spremnost za dalje skaliranje'],
          },
          {
            name: isSrCyrl ? 'ВЕБ ПЛАТФОРМЕ И ФУЛЛ-СТАК' : 'WEB PLATFORME I FULL-STACK',
            description: isSrCyrl
              ? 'Градимо модерне веб апликације са Next.js фронтендом и .NET/Node.js backend-ом.'
              : 'Gradimo moderne web aplikacije sa Next.js frontendom i .NET/Node.js backendom.',
            outcomes: isSrCyrl
              ? ['Бржи time-to-market', 'Стабилно скалирање', 'Лакше будуће одржавање']
              : ['Brzi time-to-market', 'Stabilno skaliranje', 'Lakse buduce odrzavanje'],
          },
          {
            name: isSrCyrl ? 'ПОСЛОВНИ СОФТВЕР И ИНТЕРНИ АЛАТИ' : 'POSLOVNI SOFTVER I INTERNI ALATI',
            description: isSrCyrl
              ? 'Развијамо прилагођене интерне системе који убрзавају операције и смањују ручни рад.'
              : 'Razvijamo prilagodjene interne sisteme koji ubrzavaju operacije i smanjuju rucni rad.',
            outcomes: isSrCyrl
              ? ['Мање ручних корака', 'Јаснији увиди у податке', 'Већа оперативна ефикасност']
              : ['Manje rucnih koraka', 'Jasniji uvidi u podatke', 'Veca operativna efikasnost'],
          },
          {
            name: isSrCyrl ? 'ИНТЕГРАЦИЈЕ И МОДЕРНИЗАЦИЈА' : 'INTEGRACIJE I MODERNIZACIJA',
            description: isSrCyrl
              ? 'Повезујемо CRM, ERP, платежне и legacy системе кроз сигурне API интеграције.'
              : 'Povezujemo CRM, ERP, platne i legacy sisteme kroz sigurne API integracije.',
            outcomes: isSrCyrl
              ? ['Стабилни интеграциони токови', 'Мање прекида у раду', 'Лакша еволуција система']
              : ['Stabilni integracioni tokovi', 'Manje prekida u radu', 'Laksa evolucija sistema'],
          },
        ],
        outcomesLabel: isSrCyrl ? 'Резултати:' : 'Rezultati:',
      }
    : {
        title: 'STUDIO SERVICES',
        intro:
          'From idea to production: we deliver clear, measurable, and maintainable software systems with Microsoft technologies in the foreground.',
        cards: [
          {
            name: 'MICROSOFT .NET DEVELOPMENT',
            description:
              'We build backend systems, API layers, and core business logic in the C#/.NET ecosystem.',
            outcomes: [
              'Stable and testable services',
              'Clean domain modeling',
              'Ready for long-term scaling',
            ],
          },
          {
            name: 'WEB PLATFORMS & FULL-STACK',
            description:
              'We deliver modern web applications with Next.js frontend and .NET/Node.js backend services.',
            outcomes: [
              'Faster time-to-market',
              'Reliable scaling',
              'Easier long-term maintenance',
            ],
          },
          {
            name: 'CUSTOM BUSINESS SOFTWARE & INTERNAL TOOLS',
            description:
              'We build internal systems that reduce manual work and support day-to-day operations.',
            outcomes: [
              'Less repetitive manual work',
              'Better visibility over business data',
              'Higher operational efficiency',
            ],
          },
          {
            name: 'INTEGRATIONS & MODERNIZATION',
            description:
              'We connect CRM, ERP, payment, and legacy systems through secure API integrations.',
            outcomes: [
              'Reliable integration flows',
              'Fewer operational disruptions',
              'Easier system evolution over time',
            ],
          },
        ],
        outcomesLabel: 'Outcomes:',
      };

  return (
    <Box component="section" id="services" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
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
                maxWidth: '920px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {content.intro}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 2, sm: 3 },
              }}
            >
              {content.cards.map((card) => (
                <Box
                  key={card.name}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    backgroundColor: theme.palette.terminal.header,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderRadius: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.terminal.cyan,
                      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.35rem' },
                    }}
                  >
                    {card.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.terminal.textSecondary, lineHeight: 1.6 }}
                  >
                    {card.description}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.terminal.green, fontWeight: 'bold' }}
                  >
                    {content.outcomesLabel}
                  </Typography>

                  <Box component="ul" sx={{ m: 0, pl: 2, color: theme.palette.terminal.text }}>
                    {card.outcomes.map((outcome) => (
                      <Typography
                        key={outcome}
                        component="li"
                        variant="body2"
                        sx={{ color: theme.palette.terminal.text, mb: 0.5 }}
                      >
                        {outcome}
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
                  border: `1px solid ${theme.palette.terminal.cyan}`,
                  color: theme.palette.terminal.cyan,
                  backgroundColor: theme.palette.terminal.header,
                  textTransform: 'none',
                  width: { xs: '100%', sm: 220 },
                  px: 2.5,
                  py: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.terminal.cyan,
                    color: theme.palette.terminal.background,
                  },
                }}
              >
                {isSr ? (isSrCyrl ? 'Затражите понуду' : 'Zatrazite ponudu') : 'Request proposal'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
