'use client';

import React from 'react';
import { Button, useTheme } from '@mui/material';
import { Download } from '@mui/icons-material';

export default function CVDownload() {
  const theme = useTheme();

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv/Nemanja_Radulovic_CV.pdf';
    link.download = 'Nemanja_Radulovic_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      startIcon={<Download />}
      sx={{
        backgroundColor: theme.palette.terminal.header,
        border: `2px solid ${theme.palette.terminal.cyan}`,
        color: theme.palette.terminal.cyan,
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
        textTransform: 'none',
        px: 3,
        py: 1,
        '&:hover': {
          backgroundColor: theme.palette.terminal.cyan,
          color: theme.palette.terminal.background,
          transform: 'translateY(-2px)',
          boxShadow: `0 4px 12px ${theme.palette.terminal.cyan}40`,
        },
        transition: 'all 0.3s ease-in-out',
      }}
    >
      Download CV
    </Button>
  );
}
