'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { useLocale } from 'next-intl';

export default function ContactUs() {
  const theme = useTheme();
  const locale = useLocale();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;

  const content = isSr
    ? {
        title: isSrCyrl ? 'КОНТАКТИРАЈТЕ НАС' : 'KONTAKTIRAJTE NAS',
        subtitle: isSrCyrl
          ? 'Имате идеју, постојећи производ за редизајн или вам треба технички партнер? Хајде да причамо.'
          : 'Imate ideju, postojeci proizvod za redizajn ili vam treba tehnicki partner? Hajde da pricamo.',
        primary: isSrCyrl ? 'Пошаљите упит' : 'Posaljite upit',
      }
    : {
        title: 'CONTACT US',
        subtitle:
          'Have a new idea, an existing product to improve, or need a long-term technical partner? Let’s talk.',
        primary: 'Send inquiry',
      };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 2, sm: 3, md: 4 }, pb: { xs: 4, sm: 6 } }}
    >
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
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: { xs: 2, sm: 2.5 },
                color: theme.palette.terminal.text,
                fontSize: {
                  xs: '1.4rem',
                  sm: '1.9rem',
                  md: '2.3rem',
                  lg: '2.7rem',
                },
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
                maxWidth: '780px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: { xs: 3, sm: 4 },
              }}
            >
              {content.subtitle}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              justifyContent="center"
              alignItems={{ xs: 'stretch', sm: 'center' }}
              flexWrap="wrap"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: 420, sm: 'none' },
                mx: 'auto',
              }}
            >
              <Button
                component="a"
                href="mailto:contact@nemanzh.dev"
                startIcon={<Email />}
                sx={{
                  backgroundColor: theme.palette.terminal.cyan,
                  color: theme.palette.terminal.background,
                  border: `1px solid ${theme.palette.terminal.cyan}`,
                  fontFamily:
                    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                  textTransform: 'none',
                  px: 2.5,
                  py: 1,
                  width: { xs: '100%', sm: 'auto' },
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: theme.palette.terminal.header,
                    color: theme.palette.terminal.cyan,
                  },
                }}
              >
                {content.primary}
              </Button>

              <Button
                component="a"
                href="https://www.linkedin.com/in/nemanja-radulovi%C4%87/"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LinkedIn />}
                sx={{
                  border: `1px solid ${theme.palette.terminal.border}`,
                  color: theme.palette.terminal.text,
                  backgroundColor: theme.palette.terminal.header,
                  fontFamily:
                    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                  textTransform: 'none',
                  px: 2.5,
                  py: 1,
                  width: { xs: '100%', sm: 'auto' },
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: theme.palette.terminal.border,
                    color: theme.palette.terminal.cyan,
                  },
                }}
              >
                LinkedIn
              </Button>

              <Button
                component="a"
                href="https://github.com/nemanjaradulovic"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHub />}
                sx={{
                  border: `1px solid ${theme.palette.terminal.border}`,
                  color: theme.palette.terminal.text,
                  backgroundColor: theme.palette.terminal.header,
                  fontFamily:
                    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                  textTransform: 'none',
                  px: 2.5,
                  py: 1,
                  width: { xs: '100%', sm: 'auto' },
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: theme.palette.terminal.border,
                    color: theme.palette.terminal.green,
                  },
                }}
              >
                GitHub
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
