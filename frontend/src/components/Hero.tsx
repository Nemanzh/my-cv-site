'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  Link as MuiLink,
  Card,
  CardContent,
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Download,
} from '@mui/icons-material';
import HighlightedText, {
  highlightFirstLetters,
  highlightFirstLettersAndSymbols,
} from './HighlightedText';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: 4,
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
              p: 2,
              borderBottom: `1px solid ${theme.palette.terminal.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.terminal.red,
                }}
              />
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.terminal.yellow,
                }}
              />
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.terminal.green,
                }}
              />
            </Box>
            <Typography
              variant="body1"
              className="terminal-header-text"
              sx={{
                ml: { xs: 2, md: 0 },
                color: theme.palette.terminal.textSecondary,
              }}
            >
              nemanja@portfolio:~
            </Typography>

            <Box sx={{ width: 60 }} />
          </Box>

          <CardContent
            sx={{
              backgroundColor: theme.palette.terminal.background,
              color: theme.palette.terminal.text,
            }}
          >
            <Box
              sx={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                mb: 3,
                textAlign: 'left',
              }}
            >
              <Typography
                variant="body1"
                component="span"
                sx={{ color: theme.palette.terminal.cyan }}
              >
                $ bx install social_worker ruby_dev empathy_pack
              </Typography>
              <br />
              <Typography
                variant="body1"
                component="span"
                sx={{ color: theme.palette.terminal.cyan }}
              >
                &gt; scanning experience...
              </Typography>
              <br />
              <Typography
                variant="body1"
                component="span"
                sx={{ color: theme.palette.terminal.green }}
              >
                suitable for senior, staff, co-founder
              </Typography>
              <br />
              <Typography
                variant="body1"
                component="span"
                sx={{ color: theme.palette.terminal.cyan }}
              >
                $ bx rake min:tech_debt max:social_impact max:dev_happiness
              </Typography>
              <br />
              <Typography
                variant="body1"
                component="span"
                sx={{ color: theme.palette.terminal.green }}
              >
                &gt; compiling skills...
              </Typography>
              <br />
              <Typography
                variant="body1"
                component="span"
                sx={{ color: theme.palette.terminal.green }}
              >
                &gt; formatting resume...
              </Typography>
              <br />
              <Typography
                variant="body1"
                component="span"
                sx={{ color: theme.palette.terminal.cyan }}
              >
                $ cat profile.json
              </Typography>
            </Box>

            <Stack spacing={3} sx={{ mb: 3 }}>
              <Box>
                <Typography
                  variant="h2"
                  component="h1"
                  className="terminal-name"
                  gutterBottom
                  sx={{ color: theme.palette.terminal.text }}
                >
                  <HighlightedText
                    text="Nemanja Radulovic"
                    highlightIndices={highlightFirstLetters(
                      'Nemanja Radulovic'
                    )}
                    highlightColor={theme.palette.terminal.magenta}
                  />
                </Typography>

                <Typography
                  variant="h5"
                  component="h2"
                  className="terminal-title"
                  sx={{ color: theme.palette.terminal.textSecondary }}
                >
                  <HighlightedText
                    text="Seasoned Developer && Creative Problem Solver"
                    highlightIndices={highlightFirstLettersAndSymbols(
                      'Seasoned Developer && Creative Problem Solver'
                    )}
                    highlightColor={theme.palette.terminal.green}
                  />
                </Typography>
              </Box>

              <Box>
                <Button
                  variant="contained"
                  className="terminal-download"
                  startIcon={<Download />}
                  href="#"
                  sx={{
                    backgroundColor: theme.palette.terminal.green,
                    color: theme.palette.terminal.background,
                    border: `1px solid ${theme.palette.terminal.greenDark}`,
                    '&:hover': {
                      backgroundColor: theme.palette.terminal.greenDark,
                      boxShadow: `0 0 20px ${theme.palette.terminal.green}33`,
                    },
                  }}
                >
                  ./download_resume.sh
                </Button>
              </Box>
            </Stack>

            <Box
              sx={{
                backgroundColor: theme.palette.terminal.header,
                mx: -3,
                px: 3,
                py: 2,
                borderTop: `1px solid ${theme.palette.terminal.border}`,
                borderBottom: `1px solid ${theme.palette.terminal.border}`,
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                sx={{
                  flexWrap: 'wrap',
                  alignItems: { xs: 'flex-start', md: 'center' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <LocationOn sx={{ color: theme.palette.terminal.cyan }} />
                  <Typography
                    variant="body2"
                    className="terminal-contact-text"
                    sx={{ color: theme.palette.terminal.text }}
                  >
                    BELGRADE, SERBIA
                  </Typography>
                </Box>

                <MuiLink
                  href="mailto:jobs@nemanjaradulovic.dev"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    textDecoration: 'none',
                    color: theme.palette.terminal.green,
                    '&:hover': {
                      color: theme.palette.terminal.cyan,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  <Email />
                  <Typography
                    variant="caption"
                    className="terminal-contact-email"
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
                    '&:hover': {
                      color: theme.palette.terminal.cyan,
                    },
                  }}
                >
                  <GitHub />
                  <Typography
                    variant="body2"
                    className="terminal-contact-social"
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
                    '&:hover': {
                      color: theme.palette.terminal.cyan,
                    },
                  }}
                >
                  <LinkedIn />
                  <Typography
                    variant="body2"
                    className="terminal-contact-social"
                  >
                    LINKEDIN
                  </Typography>
                </MuiLink>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
