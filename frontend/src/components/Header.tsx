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
} from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwitcher';
import { useThemeMode } from './ThemeProvider';
import { useTerminalColors } from '@/hooks/userTerminalColors';

export default function Header() {
  const colors = useTerminalColors();
  const { mode, toggleTheme } = useThemeMode();

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
            px: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              className="terminal-mono"
              sx={{
                color: colors.cyan,
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                fontWeight: 'bold',
                letterSpacing: '0.1em',
                userSelect: 'none',
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
              cv
              <Typography
                component="span"
                sx={{
                  color: colors.yellow,
                  fontSize: 'inherit',
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
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
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
                online
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
