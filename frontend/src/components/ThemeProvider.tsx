'use client';

import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    terminal: {
      background: string;
      header: string;
      border: string;
      text: string;
      textSecondary: string;
      cyan: string;
      green: string;
      greenDark: string;
      red: string;
      yellow: string;
      magenta: string;
    };
  }

  interface PaletteOptions {
    terminal?: {
      background?: string;
      header?: string;
      border?: string;
      text?: string;
      textSecondary?: string;
      cyan?: string;
      green?: string;
      greenDark?: string;
      red?: string;
      yellow?: string;
      magenta?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#64748b',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
    terminal: {
      background: '#0f172a',
      header: '#1e293b',
      border: '#334155',
      text: '#e2e8f0',
      textSecondary: '#94a3b8',
      cyan: '#22d3ee',
      green: '#10b981',
      greenDark: '#059669',
      red: '#ef4444',
      yellow: '#f59e0b',
      magenta: '#f0abfc',
    },
  },
  typography: {
    fontFamily:
      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily:
        'var(--font-major-mono-display), ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.1,
      fontFamily:
        'var(--font-major-mono-display), ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      fontFamily:
        'var(--font-major-mono-display), ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
      fontFamily:
        'var(--font-major-mono-display), ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
    h5: {
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily:
        'var(--font-major-mono-display), ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.4,
      fontFamily:
        'var(--font-major-mono-display), ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontFamily:
        'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
    caption: {
      fontFamily:
        'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          fontFamily:
            'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          '&:hover': {
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
            transform: 'translateY(-2px)',
          },
          '&.terminal-download': {
            fontWeight: 600,
            textTransform: 'none',
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
            maxWidth: 'fit-content',
            transition: 'all 0.2s ease-in-out',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          overflow: 'hidden',
          '&.terminal-window': {
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 24,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          '&.terminal-name': {
            fontWeight: 700,
            lineHeight: 1.1,
            textAlign: 'left',
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          },
        },
        h5: {
          '&.terminal-title': {
            fontWeight: 400,
            lineHeight: 1.4,
            textAlign: 'left',
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          },
        },
        body1: {
          '&.terminal-header-text': {
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          },
        },
        body2: {
          '&.terminal-contact-text': {
            whiteSpace: 'nowrap',
          },
          '&.terminal-contact-social': {
            fontWeight: 500,
            whiteSpace: 'nowrap',
          },
        },
        caption: {
          '&.terminal-contact-email': {
            fontWeight: 500,
            whiteSpace: 'nowrap',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
