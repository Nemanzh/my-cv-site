'use client';

import React from 'react';
import { Box, useTheme } from '@mui/material';

interface ClientPageWrapperProps {
  children: React.ReactNode;
}

export default function ClientPageWrapper({
  children,
}: ClientPageWrapperProps) {
  const theme = useTheme();
  const colors = theme.palette.terminal;

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at 20% 80%, ${colors.cyan}18 0%, transparent 42%),
          radial-gradient(circle at 80% 20%, ${colors.text}10 0%, transparent 34%),
          radial-gradient(circle at 42% 38%, ${colors.magenta}0e 0%, transparent 34%),
          linear-gradient(
            135deg,
            ${theme.palette.background.default} 0%,
            ${colors.background} 40%,
            ${theme.palette.background.default} 100%
          )
        `,
        position: 'relative',
        isolation: 'isolate',
        overflowX: 'hidden',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(180deg, ${colors.border}00 0%, ${colors.border}30 100%),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              ${colors.cyan}14 100px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 98px,
              ${colors.cyan}10 100px
            )
          `,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.34,
        },
        '& .ambient-orb': {
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(14px)',
        },
        '& .ambient-orb.orb-one': {
          width: { xs: '180px', md: '320px' },
          height: { xs: '180px', md: '320px' },
          top: '8%',
          left: '6%',
          background: `radial-gradient(circle, ${colors.cyan}18 0%, ${colors.cyan}04 54%, transparent 72%)`,
        },
        '& .ambient-orb.orb-two': {
          width: { xs: '140px', md: '260px' },
          height: { xs: '140px', md: '260px' },
          right: '8%',
          top: { xs: '58%', md: '48%' },
          background: `radial-gradient(circle, ${colors.green}14 0%, ${colors.green}03 58%, transparent 76%)`,
        },
        '& > *': {
          position: 'relative',
          zIndex: 1,
        },
      }}
    >
      <Box className="ambient-orb orb-one" />
      <Box className="ambient-orb orb-two" />
      {children}
    </Box>
  );
}
