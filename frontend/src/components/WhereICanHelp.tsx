'use client';

import React from 'react';
import {
  ArrowForward,
  CheckCircleOutline,
  CloudQueue,
  Code,
  Hub,
  Key,
  Memory,
  Security,
  SettingsSuggest,
  Storage,
} from '@mui/icons-material';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import {
  SiAngular,
  SiBitbucket,
  SiDocker,
  SiDotnet,
  SiGithub,
  SiHubspot,
  SiJira,
  SiJsonwebtokens,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiStrapi,
  SiStripe,
  SiTypescript,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface HelpChallengeItem {
  id: string;
  label: string;
  title: string;
  description: string;
  technologies: string[];
  projects: string[];
  impact?: string;
}

export interface WhereICanHelpContent {
  kicker: string;
  title: string;
  intro: string;
  labels: {
    technologies: string;
    projects: string;
    impact: string;
    ctaPrompt: string;
    ctaLabel: string;
  };
  items: HelpChallengeItem[];
}

type TechnologyIcon =
  | { kind: 'react-icon'; icon: IconType }
  | { kind: 'mui-icon'; icon: typeof Code };

const TECHNOLOGY_ICONS: Record<string, TechnologyIcon> = {
  '.NET': { kind: 'react-icon', icon: SiDotnet },
  '.NET APIs': { kind: 'react-icon', icon: SiDotnet },
  Angular: { kind: 'react-icon', icon: SiAngular },
  AWS: { kind: 'mui-icon', icon: CloudQueue },
  'AWS SQS': { kind: 'mui-icon', icon: CloudQueue },
  Azure: { kind: 'mui-icon', icon: CloudQueue },
  'Azure AD': { kind: 'mui-icon', icon: CloudQueue },
  Bitbucket: { kind: 'react-icon', icon: SiBitbucket },
  Docker: { kind: 'react-icon', icon: SiDocker },
  GitHub: { kind: 'react-icon', icon: SiGithub },
  HubSpot: { kind: 'react-icon', icon: SiHubspot },
  Jira: { kind: 'react-icon', icon: SiJira },
  JWT: { kind: 'react-icon', icon: SiJsonwebtokens },
  MSAL: { kind: 'mui-icon', icon: Key },
  MUI: { kind: 'react-icon', icon: SiMui },
  'Next.js': { kind: 'react-icon', icon: SiNextdotjs },
  'Node.js': { kind: 'react-icon', icon: SiNodedotjs },
  'OpenAI-compatible APIs': { kind: 'react-icon', icon: SiOpenai },
  OpenRouter: { kind: 'react-icon', icon: SiOpenai },
  PostgreSQL: { kind: 'react-icon', icon: SiPostgresql },
  RabbitMQ: { kind: 'react-icon', icon: SiRabbitmq },
  React: { kind: 'react-icon', icon: SiReact },
  Redis: { kind: 'react-icon', icon: SiRedis },
  'SQL Server': { kind: 'mui-icon', icon: Storage },
  Strapi: { kind: 'react-icon', icon: SiStrapi },
  'Strapi Admin': { kind: 'react-icon', icon: SiStrapi },
  Stripe: { kind: 'react-icon', icon: SiStripe },
  TypeScript: { kind: 'react-icon', icon: SiTypescript },
  'API optimization': { kind: 'mui-icon', icon: SettingsSuggest },
  'environment configuration': { kind: 'mui-icon', icon: SettingsSuggest },
  'frontend rendering improvements': { kind: 'mui-icon', icon: Memory },
  'Integration APIs': { kind: 'mui-icon', icon: Hub },
  'Integration Services': { kind: 'mui-icon', icon: Hub },
  IIS: { kind: 'mui-icon', icon: CloudQueue },
  'OAuth-style flows': { kind: 'mui-icon', icon: Security },
  'prompt engineering': { kind: 'mui-icon', icon: Code },
  'REST APIs': { kind: 'mui-icon', icon: Hub },
  'structured outputs': { kind: 'mui-icon', icon: Storage },
};

function TechnologyBadge({ label }: { label: string }) {
  const theme = useTheme();
  const iconDefinition = TECHNOLOGY_ICONS[label] ?? { kind: 'mui-icon', icon: Code };

  const icon =
    iconDefinition.kind === 'react-icon' ? (
      <Box
        component={iconDefinition.icon}
        aria-hidden="true"
        sx={{
          flex: '0 0 auto',
          color: 'inherit',
          fontSize: '0.95rem',
        }}
      />
    ) : (
      <Box
        component={iconDefinition.icon}
        aria-hidden="true"
        sx={{
          flex: '0 0 auto',
          color: 'inherit',
          fontSize: '1rem',
        }}
      />
    );

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.65,
        minHeight: 30,
        border: `1px solid ${theme.palette.terminal.border}`,
        borderRadius: 999,
        px: 1,
        py: 0.45,
        color: theme.palette.terminal.cyan,
        backgroundColor: `${theme.palette.terminal.background}66`,
        fontSize: '0.78rem',
        lineHeight: 1.2,
        transition: 'border-color 0.18s ease, color 0.18s ease, background-color 0.18s ease',
        '&:hover': {
          borderColor: theme.palette.terminal.cyan,
          backgroundColor: `${theme.palette.terminal.cyan}10`,
        },
      }}
    >
      {icon}
      <Typography
        component="span"
        sx={{
          color: 'inherit',
          fontSize: 'inherit',
          fontWeight: 600,
          lineHeight: 1.2,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function WhereICanHelp({
  content,
}: {
  content: WhereICanHelpContent;
}) {
  const theme = useTheme();
  const [selectedId, setSelectedId] = React.useState(content.items[0]?.id ?? '');
  const selectedItem =
    content.items.find((item) => item.id === selectedId) ?? content.items[0];

  if (!selectedItem) {
    return null;
  }

  return (
    <Box
      component="section"
      id="where-help"
      sx={{
        scrollMarginTop: { xs: 88, lg: 100 },
      }}
    >
      <Typography
        sx={{
          mb: 3,
          color: theme.palette.terminal.green,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}
      >
        {content.kicker}
      </Typography>

      <Typography
        sx={{
          color: theme.palette.terminal.text,
          fontSize: { xs: '1.3rem', md: '1.55rem' },
          fontWeight: 600,
          lineHeight: 1.35,
        }}
      >
        {content.title}
      </Typography>

      <Typography
        sx={{
          mt: 1.5,
          color: theme.palette.terminal.textSecondary,
          lineHeight: 1.85,
          maxWidth: '62ch',
        }}
      >
        {content.intro}
      </Typography>

      <Box
        sx={{
          mt: 3.5,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '230px minmax(0, 1fr)' },
          gap: { xs: 2, md: 2.4 },
          alignItems: 'stretch',
        }}
      >
        <Stack
          component="div"
          spacing={1}
          sx={{
            minWidth: 0,
          }}
        >
          {content.items.map((item) => {
            const isSelected = item.id === selectedItem.id;

            return (
              <Button
                key={item.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(item.id)}
                sx={{
                  justifyContent: 'space-between',
                  gap: 1.5,
                  minHeight: 54,
                  px: 1.6,
                  py: 1.2,
                  border: `1px solid ${
                    isSelected ? theme.palette.terminal.cyan : theme.palette.terminal.border
                  }`,
                  borderRadius: 2,
                  color: isSelected
                    ? theme.palette.terminal.text
                    : theme.palette.terminal.textSecondary,
                  background: isSelected
                    ? `linear-gradient(135deg, ${theme.palette.terminal.header} 0%, ${theme.palette.terminal.cyan}18 100%)`
                    : theme.palette.terminal.header,
                  boxShadow: isSelected
                    ? `0 0 0 1px ${theme.palette.terminal.cyan}22 inset`
                    : 'none',
                  textAlign: 'left',
                  textTransform: 'none',
                  transition:
                    'border-color 0.18s ease, background-color 0.18s ease, transform 0.18s ease, color 0.18s ease',
                  '&:hover': {
                    borderColor: theme.palette.terminal.cyan,
                    backgroundColor: `${theme.palette.terminal.header}DD`,
                    transform: 'translateY(-1px)',
                  },
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.terminal.cyan}`,
                    outlineOffset: 4,
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: 'inherit',
                    fontSize: '0.88rem',
                    fontWeight: isSelected ? 700 : 600,
                    lineHeight: 1.35,
                  }}
                >
                  {item.label}
                </Typography>
                <ArrowForward
                  sx={{
                    flex: '0 0 auto',
                    color: isSelected
                      ? theme.palette.terminal.cyan
                      : theme.palette.terminal.textSecondary,
                    fontSize: '1rem',
                    opacity: isSelected ? 1 : 0.58,
                  }}
                />
              </Button>
            );
          })}
        </Stack>

        <Box
          key={selectedItem.id}
          sx={{
            minWidth: 0,
            p: { xs: 2.2, sm: 2.8 },
            border: `1px solid ${theme.palette.terminal.border}`,
            borderRadius: 3,
            background: `linear-gradient(165deg, ${theme.palette.terminal.header} 0%, ${theme.palette.terminal.background} 100%)`,
            boxShadow: `0 0 0 1px ${theme.palette.terminal.border}33 inset`,
            animation: 'whereHelpIn 0.22s ease both',
            '@keyframes whereHelpIn': {
              from: {
                opacity: 0.76,
                transform: 'translateY(4px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Typography
            sx={{
              color: theme.palette.terminal.cyan,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
            }}
          >
            {selectedItem.label}
          </Typography>

          <Typography
            sx={{
              mt: 1.3,
              color: theme.palette.terminal.text,
              fontSize: { xs: '1.12rem', md: '1.26rem' },
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            {selectedItem.title}
          </Typography>

          <Typography
            sx={{
              mt: 1.4,
              color: theme.palette.terminal.textSecondary,
              lineHeight: 1.85,
            }}
          >
            {selectedItem.description}
          </Typography>

          <Box
            sx={{
              mt: 2.5,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: theme.palette.terminal.green,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {content.labels.technologies}
              </Typography>

              <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ mt: 1.2 }}>
                {selectedItem.technologies.map((technology) => (
                  <TechnologyBadge key={technology} label={technology} />
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: theme.palette.terminal.green,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {content.labels.projects}
              </Typography>

              <Stack spacing={0.8} sx={{ mt: 1.2 }}>
                {selectedItem.projects.map((project) => (
                  <Stack key={project} direction="row" spacing={0.8} alignItems="center">
                    <CheckCircleOutline
                      sx={{
                        color: theme.palette.terminal.green,
                        fontSize: '1rem',
                      }}
                    />
                    <Typography
                      sx={{
                        color: theme.palette.terminal.textSecondary,
                        fontSize: '0.9rem',
                        lineHeight: 1.45,
                      }}
                    >
                      {project}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>

          {selectedItem.impact ? (
            <Box
              sx={{
                mt: 2.6,
                p: 1.6,
                border: `1px dashed ${theme.palette.terminal.border}`,
                borderRadius: 2,
                backgroundColor: `${theme.palette.terminal.background}66`,
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.terminal.textSecondary,
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.terminal.green,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {content.labels.impact}:{' '}
                </Box>
                {selectedItem.impact}
              </Typography>
            </Box>
          ) : null}

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.4}
            alignItems={{ xs: 'stretch', sm: 'center' }}
            justifyContent="space-between"
            sx={{ mt: 2.6 }}
          >
            <Typography
              sx={{
                color: theme.palette.terminal.textSecondary,
                fontSize: '0.9rem',
                lineHeight: 1.55,
              }}
            >
              {content.labels.ctaPrompt}
            </Typography>

            <Button
              href="#contact"
              variant="outlined"
              sx={{
                flex: { sm: '0 0 auto' },
                borderColor: theme.palette.terminal.cyan,
                color: theme.palette.terminal.cyan,
                borderRadius: 999,
                px: 2,
                textTransform: 'none',
                '&:hover': {
                  borderColor: theme.palette.terminal.green,
                  color: theme.palette.terminal.green,
                  backgroundColor: `${theme.palette.terminal.green}12`,
                },
                '&:focus-visible': {
                  outline: `2px solid ${theme.palette.terminal.cyan}`,
                  outlineOffset: 4,
                },
              }}
            >
              {content.labels.ctaLabel}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
