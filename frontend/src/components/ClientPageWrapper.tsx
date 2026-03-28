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
        isolation: 'isolate',
        overflow: 'hidden',
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
        '& .ambient-orb': {
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(20px)',
          animation: 'orbFloat 16s ease-in-out infinite',
        },
        '& .ambient-orb.orb-one': {
          width: { xs: '180px', md: '320px' },
          height: { xs: '180px', md: '320px' },
          top: '8%',
          left: '6%',
          background: isDark
            ? 'radial-gradient(circle, rgba(88, 166, 255, 0.22) 0%, rgba(88, 166, 255, 0.02) 62%, transparent 72%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.03) 62%, transparent 72%)',
          animationDelay: '0s',
        },
        '& .ambient-orb.orb-two': {
          width: { xs: '140px', md: '260px' },
          height: { xs: '140px', md: '260px' },
          right: '8%',
          top: { xs: '58%', md: '48%' },
          background: isDark
            ? 'radial-gradient(circle, rgba(163, 113, 247, 0.2) 0%, rgba(163, 113, 247, 0.01) 65%, transparent 75%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.02) 65%, transparent 75%)',
          animationDelay: '-6s',
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
