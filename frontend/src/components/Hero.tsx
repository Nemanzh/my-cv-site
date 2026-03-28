'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Container,
  Typography,
  useTheme,
  Link as MuiLink,
  Card,
  CardContent,
  Stack,
  Button,
} from '@mui/material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { Email, GitHub, LinkedIn, LocationOn } from '@mui/icons-material';
import { useTranslations } from 'next-intl';

const InteractiveTerminal = dynamic(() => import('./InteractiveTerminal'), {
  ssr: false,
});

export default function Hero() {
  const theme = useTheme();
  const t = useTranslations('Hero');
  const heroMetrics = [
    { value: '15+', label: 'projects delivered' },
    { value: '40%', label: 'faster APIs' },
    { value: '60%', label: 'fewer bugs' },
  ];

  const handleCtaPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const moveX = ((x / rect.width) - 0.5) * 10;
    const moveY = ((y / rect.height) - 0.5) * 8;

    target.style.setProperty('--magnet-x', `${moveX.toFixed(2)}px`);
    target.style.setProperty('--magnet-y', `${moveY.toFixed(2)}px`);
    target.style.setProperty('--cta-glow-x', `${((x / rect.width) * 100).toFixed(2)}%`);
    target.style.setProperty('--cta-glow-y', `${((y / rect.height) * 100).toFixed(2)}%`);
  };

  const handleCtaPointerLeave = (event: React.PointerEvent<HTMLElement>) => {
    const target = event.currentTarget;
    target.style.setProperty('--magnet-x', '0px');
    target.style.setProperty('--magnet-y', '0px');
    target.style.setProperty('--cta-glow-x', '50%');
    target.style.setProperty('--cta-glow-y', '50%');
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            '--hero-x': '50%',
            '--hero-y': '35%',
          }}
        >
          <Card
            className="terminal-window"
            sx={{
              maxWidth: '1200px',
              mx: 'auto',
              backgroundColor: theme.palette.terminal.background,
              border: `1px solid ${theme.palette.terminal.border}`,
              position: 'relative',
              overflow: 'hidden',
              transform: 'translate3d(0, 0, 0)',
              transition:
                'box-shadow 0.35s cubic-bezier(0.2, 0.7, 0, 1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: `radial-gradient(500px circle at var(--hero-x) var(--hero-y), ${theme.palette.terminal.cyan}33 0%, ${theme.palette.terminal.cyan}08 32%, transparent 60%)`,
                mixBlendMode: 'screen',
                transition: 'background-position 0.2s ease',
                zIndex: 0,
              },
              '& > *': {
                position: 'relative',
                zIndex: 1,
              },
              '@media (hover: none), (pointer: coarse)': {
                '&::before': {
                  background: 'none',
                },
              },
            }}
          >
          <Box
            sx={{
              backgroundColor: theme.palette.terminal.header,
              color: theme.palette.terminal.text,
              fontFamily:
                'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              p: { xs: 1.5, sm: 2 },
              borderBottom: `1px solid ${theme.palette.terminal.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 1,
            }}
          >
            <Stack direction="row" spacing={1}>
              <Box
                sx={{
                  width: { xs: 10, sm: 12 },
                  height: { xs: 10, sm: 12 },
                  borderRadius: '50%',
                  backgroundColor: theme.palette.terminal.red,
                }}
              />
              <Box
                sx={{
                  width: { xs: 10, sm: 12 },
                  height: { xs: 10, sm: 12 },
                  borderRadius: '50%',
                  backgroundColor: theme.palette.terminal.yellow,
                }}
              />
              <Box
                sx={{
                  width: { xs: 10, sm: 12 },
                  height: { xs: 10, sm: 12 },
                  borderRadius: '50%',
                  backgroundColor: theme.palette.terminal.green,
                }}
              />
            </Stack>
          </Box>

          <CardContent
            sx={{
              backgroundColor: theme.palette.terminal.background,
              color: theme.palette.terminal.text,
              p: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Box
              sx={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                mb: { xs: 2, sm: 3 },
                textAlign: 'left',
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mb: { xs: 1.5, sm: 2 },
                  color: theme.palette.terminal.text,
                  fontSize: {
                    xs: '1.5rem',
                    sm: '2.2rem',
                    md: '2.8rem',
                    lg: '3.2rem',
                  },
                }}
              >
                <HighlightedText
                  text={t('name')}
                  highlightIndices={highlightFirstLetters(t('name'))}
                  highlightColor={theme.palette.terminal.green}
                />
              </Typography>

              <Typography
                variant="h4"
                component="h2"
                sx={{
                  mb: { xs: 3, sm: 4 },
                  color: theme.palette.terminal.cyan,
                  fontFamily:
                    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                  fontSize: { xs: '0.95rem', sm: '1.2rem', md: '1.4rem' },
                }}
              >
                {t('echo')}
              </Typography>

              <Stack
                direction={{ xs: 'column', lg: 'row' }}
                spacing={{ xs: 2, md: 2.5, lg: 4 }}
                sx={{
                  mt: { xs: 2, sm: 2.5 },
                  mb: { xs: 2, sm: 2.5 },
                }}
                alignItems={{ xs: 'stretch', lg: 'flex-start' }}
                justifyContent={{ lg: 'space-between' }}
              >
                <Box sx={{ flex: { lg: '1 1 auto' }, maxWidth: { xs: '100%', lg: '760px' } }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.terminal.textSecondary,
                      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem' },
                      lineHeight: { xs: 1.5, sm: 1.6 },
                    }}
                  >
                    {t('bio')}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.terminal.textSecondary,
                      fontSize: { xs: '0.75rem', sm: '0.82rem' },
                      mt: { xs: 1.5, sm: 2 },
                      maxWidth: { lg: '92%' },
                    }}
                  >
                    Best for SME and enterprise teams shipping business-critical products. Typical kickoff: 3-10
                    business days.
                  </Typography>
                </Box>

                <Box sx={{ width: { xs: '100%', lg: 420 }, flex: { lg: '0 0 420px' } }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
                      gap: { xs: 0.9, sm: 1 },
                    }}
                  >
                    {heroMetrics.map((item) => (
                      <Box
                        key={item.label}
                        sx={{
                          px: { xs: 1, sm: 1.25 },
                          py: { xs: 1, sm: 1.2 },
                          border: `1px solid ${theme.palette.terminal.border}`,
                          backgroundColor: theme.palette.terminal.header,
                          borderRadius: 1,
                          minHeight: { xs: 72, sm: 96 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: 0.35,
                          transition: 'transform 0.18s ease, border-color 0.18s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            borderColor: theme.palette.terminal.cyan,
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.terminal.cyan,
                            fontFamily:
                              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                            fontWeight: 700,
                            letterSpacing: '0.02em',
                            lineHeight: 1.1,
                            fontSize: { xs: '1rem', sm: '1.2rem' },
                          }}
                        >
                          {item.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.palette.terminal.textSecondary,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            fontSize: { xs: '0.56rem', sm: '0.62rem' },
                            lineHeight: 1.35,
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: { xs: 'stretch', sm: 'center', lg: 'flex-end' },
                      alignItems: 'center',
                      mt: { xs: 1.5, sm: 2 },
                      pr: { lg: 0.5 },
                    }}
                  >
                  <Button
                    href="#contact"
                    startIcon={<Email />}
                    onPointerMove={handleCtaPointerMove}
                    onPointerLeave={handleCtaPointerLeave}
                    sx={{
                      '--magnet-x': '0px',
                      '--magnet-y': '0px',
                      '--cta-glow-x': '50%',
                      '--cta-glow-y': '50%',
                      backgroundColor: theme.palette.terminal.header,
                      border: `2px solid ${theme.palette.terminal.cyan}`,
                      color: theme.palette.terminal.cyan,
                      fontFamily:
                        'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                      textTransform: 'none',
                      px: { xs: 2, sm: 3 },
                      py: { xs: 1.1, sm: 1.5 },
                      fontWeight: 'bold',
                      width: { xs: '100%', sm: 220 },
                      whiteSpace: 'nowrap',
                      position: 'relative',
                      overflow: 'hidden',
                      transform:
                        'translate3d(var(--magnet-x), var(--magnet-y), 0)',
                      transition:
                        'transform 0.18s ease-out, box-shadow 0.24s ease, background-color 0.24s ease, color 0.24s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        background: `radial-gradient(140px circle at var(--cta-glow-x) var(--cta-glow-y), ${theme.palette.terminal.cyan}55 0%, transparent 62%)`,
                        opacity: 0,
                        transition: 'opacity 0.22s ease',
                      },
                      '&:hover': {
                        backgroundColor: theme.palette.terminal.cyan,
                        color: theme.palette.terminal.background,
                        transform:
                          'translate3d(var(--magnet-x), calc(var(--magnet-y) - 2px), 0)',
                        boxShadow: `0 4px 12px ${theme.palette.terminal.cyan}40`,
                        animation: 'ctaPulse 1.45s ease-in-out infinite',
                        '&::before': {
                          opacity: 0.45,
                        },
                      },
                      '&:active': {
                        animation: 'none',
                        transform:
                          'translate3d(calc(var(--magnet-x) * 0.4), calc(var(--magnet-y) * 0.4), 0)',
                      },
                      '@media (hover: none), (pointer: coarse)': {
                        transform: 'none',
                        '&::before': {
                          display: 'none',
                        },
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          animation: 'none',
                        },
                      },
                    }}
                  >
                    {t('cta')}
                  </Button>
                </Box>
                </Box>
              </Stack>

              <Box
                sx={{
                  backgroundColor: theme.palette.terminal.header,
                  mx: { xs: -2, sm: -3, md: -4 },
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1.5, sm: 2 },
                  borderTop: `1px solid ${theme.palette.terminal.border}`,
                  borderBottom: `1px solid ${theme.palette.terminal.border}`,
                }}
              >
                <Stack
                  direction={{ xs: 'column', lg: 'row' }}
                  spacing={{ xs: 1.5, sm: 2, lg: 4 }}
                  alignItems={{ xs: 'flex-start', lg: 'center' }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOn
                      sx={{
                        color: theme.palette.terminal.cyan,
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      }}
                    />
                    <Typography
                      variant="body2"
                      className="terminal-contact-text"
                      sx={{
                        color: theme.palette.terminal.text,
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                      }}
                    >
                      {t('location')}
                    </Typography>
                  </Stack>

                  <MuiLink
                    href="mailto:contact@nemanzh.dev"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      textDecoration: 'none',
                      color: theme.palette.terminal.green,
                      minWidth: 'fit-content',
                      '&:hover': {
                        color: theme.palette.terminal.cyan,
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <Email
                      sx={{
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      }}
                    />
                    <Typography
                      variant="caption"
                      className="terminal-contact-email"
                      sx={{
                        fontSize: {
                          xs: '0.625rem',
                          sm: '0.75rem',
                          md: '0.875rem',
                        },
                      }}
                    >
                      {t('email')}
                    </Typography>
                  </MuiLink>

                  <MuiLink
                    href="https://github.com/nemanjaradulovic"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      textDecoration: 'none',
                      color: theme.palette.terminal.textSecondary,
                      minWidth: 'fit-content',
                      '&:hover': {
                        color: theme.palette.terminal.cyan,
                      },
                    }}
                  >
                    <GitHub
                      sx={{
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      }}
                    />
                    <Typography
                      variant="body2"
                      className="terminal-contact-social"
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                      }}
                    >
                      {t('github')}
                    </Typography>
                  </MuiLink>

                  <MuiLink
                    href="https://www.linkedin.com/in/nemanja-radulovic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      textDecoration: 'none',
                      color: theme.palette.terminal.textSecondary,
                      minWidth: 'fit-content',
                      '&:hover': {
                        color: theme.palette.terminal.cyan,
                      },
                    }}
                  >
                    <LinkedIn
                      sx={{
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      }}
                    />
                    <Typography
                      variant="body2"
                      className="terminal-contact-social"
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                      }}
                    >
                      {t('linkedin')}
                    </Typography>
                  </MuiLink>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ mt: { xs: 4, sm: 5, md: 6 } }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  color: theme.palette.terminal.text,
                  textAlign: 'center',
                  fontSize: {
                    xs: '1.25rem',
                    sm: '1.75rem',
                    md: '2rem',
                    lg: '2.125rem',
                  },
                  wordBreak: 'break-word',
                }}
              >
                <HighlightedText
                  text={t('explorePortfolio')}
                  highlightIndices={[0, 8, 11]}
                  highlightColor={theme.palette.terminal.cyan}
                />
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  color: theme.palette.terminal.textSecondary,
                  textAlign: 'center',
                  fontFamily:
                    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                  px: { xs: 1, sm: 2, md: 0 },
                }}
              >
                {t('tryTyping')}{' '}
                <code
                  style={{
                    color: theme.palette.terminal.cyan,
                    fontSize: 'inherit',
                    wordBreak: 'break-word',
                  }}
                >
                  whoarewe
                </code>
                ,{' '}
                <code
                  style={{
                    color: theme.palette.terminal.cyan,
                    fontSize: 'inherit',
                    wordBreak: 'break-word',
                  }}
                >
                  ls services
                </code>
                , {t('or')}{' '}
                <code
                  style={{
                    color: theme.palette.terminal.cyan,
                    fontSize: 'inherit',
                    wordBreak: 'break-word',
                  }}
                >
                  help
                </code>
              </Typography>

              <InteractiveTerminal />
            </Box>

            <Box
              sx={{
                mt: { xs: 4, sm: 5, md: 6 },
                p: { xs: 2, sm: 3 },
                backgroundColor: theme.palette.terminal.header,
                border: `1px solid ${theme.palette.terminal.border}`,
                borderRadius: 1,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.terminal.text,
                  fontFamily:
                    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                <span style={{ color: theme.palette.terminal.green }}>$</span>{' '}
                {t('readyToCollaborate')}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.terminal.textSecondary,
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                }}
              >
                {t('availableForFreelance')}
              </Typography>
            </Box>
          </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
