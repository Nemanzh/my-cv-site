'use client';

import React from 'react';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwitcher';
import { useThemeMode } from './ThemeProvider';

export default function Header() {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();
  const colors = theme.palette.terminal;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: { xs: 14, sm: 18, lg: 24 },
        right: { xs: 14, sm: 18, lg: 24 },
        zIndex: 1500,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        backgroundColor: 'transparent',
      }}
    >
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
              fontFamily: 'var(--font-mono)',
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
            backgroundColor: 'transparent',
            border: `1px solid ${colors.border}`,
            borderRadius: 999,
            color: colors.text,
            width: { xs: '36px', sm: '40px' },
            height: { xs: '36px', sm: '40px' },
            '&:hover': {
              backgroundColor: `${colors.header}cc`,
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
          aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
        >
          {mode === 'dark' ? (
            <LightMode sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }} />
          ) : (
            <DarkMode sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }} />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
