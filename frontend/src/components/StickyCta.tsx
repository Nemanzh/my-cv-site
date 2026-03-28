'use client';

import { Box, Button, useTheme } from '@mui/material';
import { useLocale } from 'next-intl';

export default function StickyCta() {
  const theme = useTheme();
  const locale = useLocale();
  const isSerbian = locale === 'sr' || locale === 'sr-Cyrl';

  return (
    <Box
      sx={{
        position: 'fixed',
        left: { xs: 12, sm: 'auto' },
        right: { xs: 12, sm: 20 },
        bottom: { xs: 12, sm: 20 },
        zIndex: 1400,
      }}
    >
      <Button
        component="a"
        href="#contact"
        sx={{
          textTransform: 'none',
          px: { xs: 2, sm: 2.25 },
          py: { xs: 1.05, sm: 0.9 },
          width: { xs: '100%', sm: 220 },
          fontWeight: 700,
          color: theme.palette.terminal.background,
          border: `1px solid ${theme.palette.terminal.cyan}`,
          backgroundColor: theme.palette.terminal.cyan,
          boxShadow: `0 8px 18px ${theme.palette.terminal.cyan}33`,
          '&:hover': {
            backgroundColor: theme.palette.terminal.header,
            color: theme.palette.terminal.cyan,
          },
        }}
      >
        {isSerbian ? 'Posalji brief' : 'Send brief'}
      </Button>
    </Box>
  );
}
