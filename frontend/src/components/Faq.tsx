'use client';

import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { useLocale } from 'next-intl';

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq() {
  const theme = useTheme();
  const locale = useLocale();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;

  const content = isSr
    ? {
        title: 'FAQ',
        intro: 'Najcesca pitanja pre pocetka saradnje.',
        items: [
          {
            q: 'Koliko brzo mozemo da krenemo?',
            a: 'Uobicajeno u roku od 3-10 radnih dana, nakon kratkog discovery sastanka.',
          },
          {
            q: 'Da li preuzimate postojeci kod?',
            a: 'Da. Prvo radimo tehnicki audit i plan stabilizacije, pa tek onda ulazimo u razvoj.',
          },
          {
            q: 'Kako izgleda komunikacija?',
            a: 'Nedeljni sync, vidljiv backlog i kratki status izvestaji po dogovorenom ritmu.',
          },
          {
            q: 'Ko je vlasnik koda i dokumentacije?',
            a: 'Klijent dobija ownership nad kodom, dokumentacijom i deployment artefaktima.',
          },
        ] as FaqItem[],
      }
    : {
        title: 'FAQ',
        intro: 'Common questions before we start working together.',
        items: [
          {
            q: 'How quickly can we start?',
            a: 'Usually within 3-10 business days after a short discovery call.',
          },
          {
            q: 'Can you take over an existing codebase?',
            a: 'Yes. We begin with a technical audit and stabilization plan before active delivery.',
          },
          {
            q: 'How do you handle communication?',
            a: 'Weekly sync calls, transparent backlog visibility, and concise status updates.',
          },
          {
            q: 'Who owns the code and documentation?',
            a: 'The client retains ownership of code, documentation, and deployment artifacts.',
          },
        ] as FaqItem[],
      };

  return (
    <Box component="section" id="faq" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
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
                maxWidth: '760px',
                mx: 'auto',
              }}
            >
              {content.intro}
            </Typography>

            <Box>
              {content.items.map((item, index) => {
                const panelId = `faq-panel-${locale}-${index}`;
                const headerId = `faq-header-${locale}-${index}`;

                return (
                <Accordion
                  key={item.q}
                  disableGutters
                  sx={{
                    mb: 1.5,
                    background: `linear-gradient(180deg, ${theme.palette.terminal.header} 0%, ${theme.palette.terminal.background} 100%)`,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderLeft: `3px solid ${theme.palette.terminal.cyan}`,
                    borderRadius: '8px !important',
                    color: theme.palette.terminal.text,
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
                    '&:before': { display: 'none' },
                    '&:hover': {
                      borderColor: theme.palette.terminal.cyan,
                      transform: 'translateY(-1px)',
                    },
                    '&.Mui-expanded': {
                      borderColor: theme.palette.terminal.green,
                      boxShadow: `0 8px 20px ${theme.palette.terminal.cyan}22`,
                    },
                  }}
                >
                  <AccordionSummary
                    id={headerId}
                    aria-controls={panelId}
                    expandIcon={
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          border: `1px solid ${theme.palette.terminal.border}`,
                          backgroundColor: theme.palette.terminal.background,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ExpandMoreIcon sx={{ color: theme.palette.terminal.cyan, fontSize: '1.1rem' }} />
                      </Box>
                    }
                    sx={{
                      px: { xs: 1.5, sm: 2 },
                      py: 0.5,
                      '& .MuiAccordionSummary-content': {
                        my: 1,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: theme.palette.terminal.green,
                          letterSpacing: '0.08em',
                          fontWeight: 700,
                          minWidth: 42,
                        }}
                      >
                        {`Q${String(index + 1).padStart(2, '0')}`}
                      </Typography>
                      <Typography
                        sx={{
                          color: theme.palette.terminal.cyan,
                          fontWeight: 700,
                          lineHeight: 1.45,
                        }}
                      >
                        {item.q}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    id={panelId}
                    sx={{
                      borderTop: `1px dashed ${theme.palette.terminal.border}`,
                      px: { xs: 1.5, sm: 2 },
                      pb: { xs: 2, sm: 2.25 },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <Box
                        sx={{
                          mt: '8px',
                          width: 7,
                          height: 7,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.terminal.green,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.terminal.textSecondary, lineHeight: 1.75 }}
                      >
                        {item.a}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                );
              })}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
