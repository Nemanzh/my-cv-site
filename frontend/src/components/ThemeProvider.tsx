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

// Step 1: Define types
type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

// Step 2: Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Step 3: Custom hook to use theme
export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};

// Step 4: Extend MUI theme interface
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

// Step 5: Define color palettes
const getColors = (mode: ThemeMode) => {
  if (mode === 'dark') {
    return {
      background: {
        default: '#0d1117',
        paper: '#161b22',
      },
      terminal: {
        background: '#0d1117',
        header: '#161b22',
        border: '#30363d',
        text: '#f0f6fc',
        textSecondary: '#8b949e',
        cyan: '#00d8ff',
        green: '#7c3aed',
        greenDark: '#6d28d9',
        red: '#ff6b6b',
        yellow: '#ffd700',
        magenta: '#ff6ac1',
      },
    };
  } else {
    return {
      background: {
        default: '#ffffff',
        paper: '#f8fafc',
      },
      terminal: {
        background: '#ffffff',
        header: '#f8fafc',
        border: '#e2e8f0',
        text: '#1e293b',
        textSecondary: '#64748b',
        cyan: '#0ea5e9',
        green: '#7c3aed',
        greenDark: '#6d28d9',
        red: '#ef4444',
        yellow: '#f59e0b',
        magenta: '#ec4899',
      },
    };
  }
};

// Step 6: Theme Provider Component
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>('dark');

  // Step 7: Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) {
      setMode(savedTheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  // Step 8: Toggle function
  const toggleTheme = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  // Step 9: Create theme
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
