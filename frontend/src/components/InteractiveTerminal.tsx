'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface Command {
  input: string;
  output: string[];
  delay?: number;
}

interface HistoryEntry {
  input: string;
  output: string[];
}

const commands: Record<string, Command> = {
  whoami: {
    input: 'whoami',
    output: [
      'nemanja-radulovic',
      'Full Stack Developer | Blockchain Enthusiast',
      'Location: Stockholm, Sweden 🇸🇪',
    ],
  },
  'ls skills': {
    input: 'ls skills',
    output: [
      'frontend/',
      'backend/',
      'blockchain/',
      'cloud/',
      'databases/',
      'devops/',
      '',
      'Use "cat skills/[folder]" to explore',
    ],
  },
  'cat skills/frontend': {
    input: 'cat skills/frontend',
    output: [
      '📦 Frontend Technologies:',
      '  ⚛️  React & Next.js',
      '  📘 TypeScript',
      '  🎨 Material-UI',
      '  📱 Responsive Design',
    ],
  },
  'cat skills/backend': {
    input: 'cat skills/backend',
    output: [
      '🔧 Backend Technologies:',
      '  🟢 Node.js',
      '  🔷 C# .NET',
      '  🌐 RESTful APIs',
      '  🏗️  Microservices',
    ],
  },
  'cat skills/blockchain': {
    input: 'cat skills/blockchain',
    output: [
      '⛓️  Blockchain & Web3:',
      '  ₳  Cardano Development',
      '  🖼️  NFT Platforms',
      '  🔐 Web3Auth',
      '  🗳️  Decentralized Voting',
    ],
  },
  'git status': {
    input: 'git status',
    output: [
      'On branch main',
      'Your portfolio is up to date.',
      '',
      'nothing to commit, working tree clean ✅',
    ],
  },
  experience: {
    input: 'experience',
    output: [
      '💼 Professional Journey:',
      '',
      '2024-Present: Senior Developer @ Chainapp Technologies',
      '2022-2024: Full Stack Developer @ Insicon AB',
      '2020-2022: Software Developer @ Saga Länsförsäkringar',
      '2017-2020: System Developer @ Länsförsäkringar Göteborg',
      '',
      'Total experience: 8+ years',
    ],
  },
  contact: {
    input: 'contact',
    output: [
      '📧 Email: jobs@nemanjaradulovic.dev',
      '💼 LinkedIn: linkedin.com/in/nemanjaradulovic',
      '🐙 GitHub: github.com/nemanjaradulovic',
      '📍 Location: Belgrade, Serbia',
      '',
      'Available for new opportunities! 🚀',
    ],
  },
  help: {
    input: 'help',
    output: [
      'Available commands:',
      '',
      '  whoami           - About me',
      '  ls skills        - List skill categories',
      '  cat skills/[dir] - View specific skills',
      '  experience       - Work history',
      '  git status       - Current status',
      '  contact          - Contact information',
      '  clear            - Clear terminal',
      '  help             - Show this help',
      '',
      'Try typing any command above! 💻',
    ],
  },
};

export default function InteractiveTerminal() {
  const theme = useTheme();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Welcome message on mount
  useEffect(() => {
    setHistory([
      {
        input: '',
        output: [
          "Welcome to Nemanja's Portfolio Terminal! 💻",
          '',
          'Type "help" to see available commands.',
          'Try "whoami" or "ls skills" to get started!',
          '',
        ],
      },
    ]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when clicking anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (input: string) => {
    const trimmedInput = input.trim().toLowerCase();

    if (trimmedInput === 'clear') {
      setHistory([]);
      return;
    }

    const command = commands[trimmedInput];
    const output = command
      ? command.output
      : [
          `Command not found: ${input}`,
          '',
          'Type "help" to see available commands.',
        ];

    setHistory((prev) => [...prev, { input, output }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  return (
    <Box
      ref={terminalRef}
      onClick={handleTerminalClick}
      sx={{
        backgroundColor: theme.palette.terminal.background,
        border: `1px solid ${theme.palette.terminal.border}`,
        borderRadius: 1,
        p: { xs: 2, sm: 3 }, // Responsive padding
        maxHeight: { xs: '300px', sm: '400px' }, // Responsive max height
        minHeight: { xs: '200px', sm: '250px' }, // Responsive min height
        overflowY: 'auto',
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
        fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
        cursor: 'text',
        '&::-webkit-scrollbar': {
          width: { xs: '6px', sm: '8px' }, // Responsive scrollbar width
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: theme.palette.terminal.header,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.terminal.border,
          borderRadius: '4px',
        },
      }}
    >
      {/* Command History */}
      {history.map((entry, index) => (
        <Box key={index} sx={{ mb: { xs: 0.5, sm: 1 } }}>
          {' '}
          {/* Responsive margin */}
          {entry.input && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start', // Changed from 'center' to 'flex-start'
                flexWrap: { xs: 'wrap', sm: 'nowrap' }, // Wrap on mobile
                mb: { xs: 0.25, sm: 0.5 }, // Responsive margin
                gap: { xs: 0.5, sm: 1 }, // Responsive gap
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: theme.palette.terminal.green,
                  flexShrink: 0, // Prevent shrinking
                  fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
                }}
              >
                nemanja@portfolio:~$
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: theme.palette.terminal.text,
                  wordBreak: 'break-word', // Allow word breaking
                  fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
                }}
              >
                {entry.input}
              </Typography>
            </Box>
          )}
          {entry.output.map((line, lineIndex) => (
            <Typography
              key={lineIndex}
              component="div"
              sx={{
                color: theme.palette.terminal.textSecondary,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word', // Allow word breaking
                minHeight: { xs: '1em', sm: '1.2em' }, // Responsive min height
                fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
                lineHeight: { xs: 1.3, sm: 1.4 }, // Responsive line height
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>
      ))}

      {/* Current Input Line */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start', // Changed from 'center' to 'flex-start'
          flexWrap: { xs: 'wrap', sm: 'nowrap' }, // Wrap on mobile
          gap: { xs: 0.5, sm: 1 }, // Responsive gap
        }}
      >
        <Typography
          component="span"
          sx={{
            color: theme.palette.terminal.green,
            flexShrink: 0, // Prevent shrinking
            fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
          }}
        >
          nemanja@portfolio:~$
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            minWidth: { xs: '100%', sm: 'auto' }, // Full width on mobile
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: theme.palette.terminal.text,
              fontFamily: 'inherit',
              fontSize: 'inherit',
              flex: 1,
              caretColor: theme.palette.terminal.cyan,
              minWidth: 0, // Allow input to shrink
            }}
            placeholder="Type a command..."
          />
          <Typography
            component="span"
            sx={{
              color: theme.palette.terminal.cyan,
              animation: 'blink 1s infinite',
              fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
              '@keyframes blink': {
                '0%, 50%': { opacity: 1 },
                '51%, 100%': { opacity: 0 },
              },
            }}
          >
            █
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
