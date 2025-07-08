'use client';

import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeMode } from './ThemeProvider';

export default function ThemeToggle() {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
        backgroundColor: theme.palette.terminal.header,
        border: `2px solid ${theme.palette.terminal.border}`,
        color: theme.palette.terminal.text,
        width: 56,
        height: 56,
        '&:hover': {
          backgroundColor: theme.palette.terminal.border,
          transform: 'scale(1.1)',
          boxShadow: `0 4px 20px ${theme.palette.terminal.cyan}40`,
        },
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {mode === 'dark' ? (
        <LightMode sx={{ fontSize: 24 }} />
      ) : (
        <DarkMode sx={{ fontSize: 24 }} />
      )}
    </IconButton>
  );
}
