'use client';

import React from 'react';
import { Box, useTheme } from '@mui/material';
import ThemeToggle from './ThemeToggle';

interface ClientPageWrapperProps {
  children: React.ReactNode;
}

export default function ClientPageWrapper({
  children,
}: ClientPageWrapperProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background: isDark
          ? `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(13, 17, 23, 1) 0%, 
              rgba(22, 27, 34, 1) 25%, 
              rgba(13, 17, 23, 1) 50%, 
              rgba(22, 27, 34, 1) 75%, 
              rgba(13, 17, 23, 1) 100%
            )
          `
          : `
            radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(124, 58, 237, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(255, 255, 255, 1) 0%, 
              rgba(248, 250, 252, 1) 25%, 
              rgba(255, 255, 255, 1) 50%, 
              rgba(248, 250, 252, 1) 75%, 
              rgba(255, 255, 255, 1) 100%
            )
          `,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark
            ? `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 98px,
                rgba(120, 119, 198, 0.03) 100px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 98px,
                rgba(120, 119, 198, 0.03) 100px
              )
            `
            : `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 98px,
                rgba(124, 58, 237, 0.02) 100px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 98px,
                rgba(124, 58, 237, 0.02) 100px
              )
            `,
          pointerEvents: 'none',
          zIndex: 0,
        },
        '& > *': {
          position: 'relative',
          zIndex: 1,
        },
      }}
    >
      <ThemeToggle />
      {children}
    </Box>
  );
}
