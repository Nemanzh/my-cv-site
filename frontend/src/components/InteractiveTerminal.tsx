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
  whoarewe: {
    input: 'whoarewe',
    output: [
      'Nemanzh Software Studio',
      'Company profile: custom software partner for SMEs and enterprise teams',
      'Core stack: .NET / C# / Azure + Next.js frontends',
    ],
  },
  'ls services': {
    input: 'ls services',
    output: [
      'product-engineering/',
      'legacy-modernization/',
      'system-integrations/',
      'managed-delivery/',
      '',
      'Use "cat services/[folder]" to inspect scope',
    ],
  },
  'cat services/product-engineering': {
    input: 'cat services/product-engineering',
    output: [
      'Service: Product Engineering',
      '  Discovery and technical planning',
      '  Full-stack implementation (.NET + Next.js)',
      '  QA automation and release pipelines',
      '  SLA-backed post-launch support',
    ],
  },
  'cat services/legacy-modernization': {
    input: 'cat services/legacy-modernization',
    output: [
      'Service: Legacy Modernization',
      '  Monolith to modular architecture',
      '  Incremental migration with zero-downtime strategy',
      '  Performance, security and maintainability uplift',
      '  Team onboarding + transition documentation',
    ],
  },
  'cat services/system-integrations': {
    input: 'cat services/system-integrations',
    output: [
      'Service: System Integrations',
      '  ERP/CRM/Billing/API integration programs',
      '  Event-driven workflows and webhooks',
      '  RBAC, SSO and audit logging',
      '  Integration observability and alerting',
    ],
  },
  'cat services/managed-delivery': {
    input: 'cat services/managed-delivery',
    output: [
      'Service: Managed Delivery',
      '  Quarterly roadmap execution',
      '  Dedicated delivery lead and weekly reporting',
      '  Scope, risk and budget tracking',
      '  Continuous optimization of delivery metrics',
    ],
  },
  'ls case-studies': {
    input: 'ls case-studies',
    output: [
      'nft-marketplace-platform/',
      'enterprise-app-delivery/',
      'insurance-system-modernization/',
      'internal-reporting-tools/',
      '',
      'Use "cat case-studies/[folder]" for outcomes',
    ],
  },
  'cat case-studies/nft-marketplace-platform': {
    input: 'cat case-studies/nft-marketplace-platform',
    output: [
      'Client: Digital product company',
      'Role: Full Stack Developer (Apr 2024 - Present)',
      'Outcome: built NFT marketplace handling 10K+ transactions',
      'Impact: reduced API response time by 40% and led 4-dev team',
    ],
  },
  'cat case-studies/enterprise-app-delivery': {
    input: 'cat case-studies/enterprise-app-delivery',
    output: [
      'Client: Enterprise consulting partner',
      'Role: Full Stack Developer (2022 - 2024)',
      'Scope: enterprise apps with React/Next.js and .NET services',
      'Impact: delivered 15+ projects and cut bugs by 60% with test automation',
    ],
  },
  'cat case-studies/insurance-system-modernization': {
    input: 'cat case-studies/insurance-system-modernization',
    output: [
      'Client: Insurance organization',
      'Role: Software Developer (2020 - 2022)',
      'Goal: modernize insurance systems while delivering new features',
      'Impact: improved system performance by 35%',
    ],
  },
  'cat case-studies/internal-reporting-tools': {
    input: 'cat case-studies/internal-reporting-tools',
    output: [
      'Client: Financial services branch office',
      'Role: System Developer (2017 - 2020)',
      'Scope: internal reporting tools and core system maintenance',
      'Impact: reduced manual data processing time by 50%',
    ],
  },
  'delivery status': {
    input: 'delivery status',
    output: [
      'Delivery board snapshot:',
      '  active_accounts: 8',
      '  on_track: 7',
      '  at_risk: 1',
      '  sprint_velocity: +12% QoQ',
      '',
      'All critical incidents resolved within SLA this quarter.',
    ],
  },
  process: {
    input: 'process',
    output: [
      'Company delivery process:',
      '',
      '1) Discovery workshop and architecture baseline',
      '2) Milestone-based implementation (2-week sprints)',
      '3) Quality gates: code review, tests, security checks',
      '4) Managed rollout and measurable business KPIs',
    ],
  },
  contact: {
    input: 'contact',
    output: [
      'Email: contact@nemanzh.dev',
      'LinkedIn: linkedin.com/in/nemanja-radulovic',
      'GitHub: github.com/nemanjaradulovic',
      'Location: Belgrade, Serbia',
      '',
      'Open for new projects and long-term partnerships.',
    ],
  },
  help: {
    input: 'help',
    output: [
      'Available commands:',
      '',
      '  whoarewe         - Company overview',
      '  ls services      - List service lines',
      '  cat services/[x] - View service details',
      '  ls case-studies  - List project outcomes',
      '  cat case-studies/[x] - View CV-based case study',
      '  delivery status  - Operational snapshot',
      '  process          - Delivery workflow',
      '  contact          - Contact information',
      '  clear            - Clear terminal',
      '  help             - Show this help',
      '',
      'Try typing any command above.',
    ],
  },
};

export default function InteractiveTerminal() {
  const theme = useTheme();
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      input: '',
      output: [
        'Welcome to Nemanzh Software Studio Terminal.',
        '',
        'Type "help" to see available commands.',
        'Try "whoarewe" or "ls services" to get started.',
        '',
      ],
    },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

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
        p: { xs: 2, sm: 3 },
        maxHeight: { xs: '300px', sm: '400px' },
        minHeight: { xs: '200px', sm: '250px' },
        overflowY: 'auto',
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
        fontSize: { xs: '0.75rem', sm: '0.875rem' },
        cursor: 'text',
        '&::-webkit-scrollbar': {
          width: { xs: '6px', sm: '8px' },
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
      {history.map((entry, index) => (
        <Box key={index} sx={{ mb: { xs: 0.5, sm: 1 } }}>
          {entry.input && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
                mb: { xs: 0.25, sm: 0.5 },
                gap: { xs: 0.5, sm: 1 },
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: theme.palette.terminal.green,
                  flexShrink: 0,
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                }}
              >
                nemanzh@softwarestudio:~$
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: theme.palette.terminal.text,
                  wordBreak: 'break-word',
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
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
                wordBreak: 'break-word',
                minHeight: { xs: '1em', sm: '1.2em' },
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                lineHeight: { xs: 1.3, sm: 1.4 },
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>
      ))}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: { xs: 0.5, sm: 1 },
        }}
      >
        <Typography
          component="span"
          sx={{
            color: theme.palette.terminal.green,
            flexShrink: 0,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          nemanzh@softwarestudio:~$
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            minWidth: { xs: '100%', sm: 'auto' },
          }}
        >
          <input
            ref={inputRef}
            type="text"
            aria-label="Terminal command input"
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
              minWidth: 0,
            }}
            placeholder="Type a command..."
          />
          <Typography
            component="span"
            sx={{
              color: theme.palette.terminal.cyan,
              animation: 'blink 1s infinite',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
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
