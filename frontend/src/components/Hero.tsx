'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  Link as MuiLink,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import InteractiveTerminal from './InteractiveTerminal';
import CVDownload from './CVDownload';
import { Email, GitHub, LinkedIn, LocationOn } from '@mui/icons-material';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
      }}
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
                    xs: '1.75rem',
                    sm: '2.5rem',
                    md: '3rem',
                    lg: '3.5rem',
                  },
                }}
              >
                <HighlightedText
                  text="NEMANJA RADULOVIC"
                  highlightIndices={highlightFirstLetters('NEMANJA RADULOVIC')}
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
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                }}
              >
                $ echo &quot;Full Stack Developer | Blockchain Enthusiast&quot;
              </Typography>

              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 2, md: 4 }}
                sx={{
                  mt: { xs: 3, sm: 4 },
                  mb: { xs: 1.5, sm: 2 },
                }}
                alignItems={{ xs: 'stretch', md: 'center' }}
                justifyContent={{ md: 'space-between' }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.terminal.textSecondary,
                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: { xs: 1.5, sm: 1.6 },
                    maxWidth: { xs: '100%', md: '800px' },
                    flex: { md: '1 1 auto' },
                  }}
                >
                  Passionate developer with 8+ years of experience building
                  scalable solutions from traditional enterprise applications to
                  cutting-edge blockchain platforms. Currently crafting the
                  future of NFT ecosystems at Chainapp Technologies.
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    alignItems: 'center',
                    flex: { md: '0 0 auto' },
                  }}
                >
                  <CVDownload />
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
                      BELGRADE, SERBIA
                    </Typography>
                  </Stack>

                  <MuiLink
                    href="mailto:jobs@nemanjaradulovic.dev"
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
                      JOBS@NEMANJARADULOVIC.DEV
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
                      NEMANJARADULOVIC
                    </Typography>
                  </MuiLink>

                  <MuiLink
                    href="https://linkedin.com/in/nemanjaradulovic"
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
                      LINKEDIN
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
                  text="EXPLORE_MY_PORTFOLIO"
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
                💡 Try typing commands like{' '}
                <code
                  style={{
                    color: theme.palette.terminal.cyan,
                    fontSize: 'inherit',
                    wordBreak: 'break-word',
                  }}
                >
                  whoami
                </code>
                ,{' '}
                <code
                  style={{
                    color: theme.palette.terminal.cyan,
                    fontSize: 'inherit',
                    wordBreak: 'break-word',
                  }}
                >
                  ls skills
                </code>
                , or{' '}
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
                Ready to collaborate?
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.terminal.textSecondary,
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                }}
              >
                Available for freelance projects and full-time opportunities •
                Let&apos;s build something amazing together! 🚀
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
