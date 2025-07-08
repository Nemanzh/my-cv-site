'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};

const getColors = (mode: ThemeMode) => {
  if (mode === 'dark') {
    // VS Code Dark Theme Colors
    return {
      background: {
        default: '#1e1e1e', // VS Code main background
        paper: '#252526', // VS Code sidebar/panel background
      },
      terminal: {
        background: '#1e1e1e', // VS Code editor background
        header: '#2d2d30', // VS Code tab/header background
        border: '#3e3e42', // VS Code border color
        text: '#cccccc', // VS Code main text (light gray)
        textSecondary: '#969696', // VS Code muted text
        cyan: '#9cdcfe', // VS Code light blue (types, properties)
        green: '#6a9955', // VS Code green (comments, strings)
        greenDark: '#4ec9b0', // VS Code teal (interfaces, classes)
        red: '#f44747', // VS Code red (errors, keywords)
        yellow: '#dcdcaa', // VS Code yellow (functions, methods)
        magenta: '#c586c0', // VS Code purple (keywords, control flow)
      },
    };
  } else {
    // VS Code Light Theme Colors
    return {
      background: {
        default: '#ffffff', // VS Code light background
        paper: '#f3f3f3', // VS Code light sidebar
      },
      terminal: {
        background: '#ffffff', // VS Code light editor background
        header: '#f3f3f3', // VS Code light tab background
        border: '#e5e5e5', // VS Code light border
        text: '#383a42', // VS Code dark text
        textSecondary: '#7f848e', // VS Code muted text
        cyan: '#0184bc', // VS Code light blue
        green: '#50a14f', // VS Code light green
        greenDark: '#0997b3', // VS Code light teal
        red: '#e45649', // VS Code light red
        yellow: '#c18401', // VS Code light yellow/orange
        magenta: '#a626a4', // VS Code light purple
      },
    };
  }
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) {
      setMode(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  const colors = getColors(mode);
  const theme = createTheme({
    palette: {
      mode,
      ...colors,
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
      h1: {
        fontFamily: '"Major Mono Display", monospace',
        fontWeight: 400,
      },
      h2: {
        fontFamily: '"Major Mono Display", monospace',
        fontWeight: 400,
      },
      h3: {
        fontFamily: '"Major Mono Display", monospace',
        fontWeight: 400,
      },
      h4: {
        fontFamily: '"Major Mono Display", monospace',
        fontWeight: 400,
      },
      h5: {
        fontFamily: '"Major Mono Display", monospace',
        fontWeight: 400,
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
