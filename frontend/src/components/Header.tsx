'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Link as MuiLink,
} from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwitcher';
import { useThemeMode } from './ThemeProvider';
import { useTerminalColors } from '@/hooks/userTerminalColors';
import { useLocale } from 'next-intl';

export default function Header() {
  const colors = useTerminalColors();
  const { mode, toggleTheme } = useThemeMode();
  const locale = useLocale();
  const isSerbian = locale === 'sr' || locale === 'sr-Cyrl';

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.border}`,
        backdropFilter: 'blur(10px)',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            minHeight: { xs: '56px', sm: '64px' },
            px: { xs: 0.75, sm: 2 },
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
              flex: 1,
              minWidth: 0,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              className="terminal-mono"
              sx={{
                color: colors.cyan,
                fontSize: { xs: '0.74rem', sm: '1rem', md: '1.125rem' },
                fontWeight: 'bold',
                letterSpacing: { xs: '0.04em', sm: '0.1em' },
                userSelect: 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: colors.green,
                  fontSize: 'inherit',
                }}
              >
                $
              </Typography>{' '}
              nemanzh
              <Typography
                component="span"
                sx={{
                  color: colors.magenta,
                  fontSize: 'inherit',
                }}
              >
                @
              </Typography>
              softwarestudio
              <Typography
                component="span"
                sx={{
                  color: colors.yellow,
                  fontSize: 'inherit',
                  display: { xs: 'none', sm: 'inline' },
                  animation: 'blink 1s infinite',
                  '@keyframes blink': {
                    '0%, 50%': { opacity: 1 },
                    '51%, 100%': { opacity: 0 },
                  },
                }}
              >
                _
              </Typography>
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              gap: 2.5,
              mr: 2,
            }}
          >
            <MuiLink href="#services" underline="hover" sx={{ color: colors.textSecondary }}>
              {isSerbian ? 'Usluge' : 'Services'}
            </MuiLink>
            <MuiLink href="#case-studies" underline="hover" sx={{ color: colors.textSecondary }}>
              {isSerbian ? 'Studije slucaja' : 'Case Studies'}
            </MuiLink>
            <MuiLink href="#process" underline="hover" sx={{ color: colors.textSecondary }}>
              {isSerbian ? 'Proces' : 'Process'}
            </MuiLink>
            <MuiLink href="#skills" underline="hover" sx={{ color: colors.textSecondary }}>
              {isSerbian ? 'Tehnologije' : 'Tech Stack'}
            </MuiLink>
            <MuiLink href="#faq" underline="hover" sx={{ color: colors.textSecondary }}>
              FAQ
            </MuiLink>
            <MuiLink href="#contact" underline="hover" sx={{ color: colors.textSecondary }}>
              {isSerbian ? 'Kontakt' : 'Contact'}
            </MuiLink>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 1, md: 1.25, lg: 2 },
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                px: 1.5,
                py: 0.5,
                backgroundColor: colors.header,
                border: `1px solid ${colors.border}`,
                borderRadius: 1,
                fontSize: '0.75rem',
                fontFamily:
                  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: 'green',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                    '100%': { opacity: 1 },
                  },
                }}
              />
              <Typography
                component="span"
                sx={{
                  color: colors.textSecondary,
                  fontSize: 'inherit',
                }}
              >
                accepting projects
              </Typography>
            </Box>

            <LanguageSwitcher />
            <Tooltip
              title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: colors.header,
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                    fontSize: '0.75rem',
                    fontFamily:
                      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                  },
                },
                arrow: {
                  sx: {
                    color: colors.header,
                    '&::before': {
                      border: `1px solid ${colors.border}`,
                    },
                  },
                },
              }}
            >
              <IconButton
                onClick={toggleTheme}
                size="small"
                sx={{
                  backgroundColor: colors.header,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 1,
                  color: colors.text,
                  width: { xs: '36px', sm: '40px' },
                  height: { xs: '36px', sm: '40px' },
                  '&:hover': {
                    backgroundColor: colors.border,
                    transform: 'scale(1.05)',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  },
                  '&:focus': {
                    outline: `2px solid ${colors.cyan}`,
                    outlineOffset: '2px',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
                aria-label={`Switch to ${
                  mode === 'dark' ? 'light' : 'dark'
                } mode`}
              >
                {mode === 'dark' ? (
                  <LightMode
                    sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                  />
                ) : (
                  <DarkMode sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }} />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
