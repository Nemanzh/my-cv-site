'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  Tooltip,
} from '@mui/material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { useLocale } from 'next-intl';

interface TechIcon {
  name: string;
  iconUrls?: string[];
}

interface CapabilityLane {
  title: string;
  color: string;
  tech: TechIcon[];
}

function iconUrl(slug: string, color: string) {
  return `https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`;
}

function deviconUrl(slug: string, variant: 'original' | 'plain' = 'original') {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;
}

function tech(
  name: string,
  color: string,
  options: {
    customUrls?: string[];
    simpleIconSlug?: string;
    deviconSlug?: string;
    deviconVariant?: 'original' | 'plain';
  } = {}
): TechIcon {
  const urls: string[] = options.customUrls ? [...options.customUrls] : [];

  if (options.simpleIconSlug) {
    urls.push(iconUrl(options.simpleIconSlug, color));
  }

  if (options.deviconSlug) {
    urls.push(deviconUrl(options.deviconSlug, options.deviconVariant));
  }

  return {
    name,
    iconUrls: urls.length > 0 ? urls : undefined,
  };
}

function fallbackLabel(name: string) {
  const cleaned = name.replace(/[^a-zA-Z0-9]/g, '');
  return cleaned.slice(0, 3).toUpperCase() || 'APP';
}

function TechTile({
  name,
  iconUrls,
  color,
  border,
  background,
}: {
  name: string;
  iconUrls?: string[];
  color: string;
  border: string;
  background: string;
}) {
  const [urlIndex, setUrlIndex] = React.useState(0);
  const [imageFailed, setImageFailed] = React.useState(!iconUrls || iconUrls.length === 0);

  React.useEffect(() => {
    setUrlIndex(0);
    setImageFailed(!iconUrls || iconUrls.length === 0);
  }, [iconUrls, name]);

  const currentIconUrl = iconUrls?.[urlIndex];

  const handleImageError = () => {
    if (!iconUrls || urlIndex >= iconUrls.length - 1) {
      setImageFailed(true);
      return;
    }

    setUrlIndex((prev) => prev + 1);
  };

  return (
    <Box
      sx={{
        height: { xs: 46, sm: 52 },
        border: `1px solid ${border}`,
        borderRadius: 1,
        backgroundColor: background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.18s ease, border-color 0.18s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          borderColor: color,
        },
      }}
    >
      {imageFailed ? (
        <Typography
          component="span"
          sx={{
            color,
            fontSize: { xs: '0.65rem', sm: '0.7rem' },
            fontWeight: 700,
            letterSpacing: '0.06em',
          }}
        >
          {fallbackLabel(name)}
        </Typography>
      ) : (
        <Box
          component="img"
          src={currentIconUrl}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
          sx={{
            width: { xs: 18, sm: 22 },
            height: { xs: 18, sm: 22 },
          }}
        />
      )}
    </Box>
  );
}

export default function Skills() {
  const theme = useTheme();
  const locale = useLocale();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;
  const terminal = theme.palette.terminal;
  const laneColors = {
    frontend: terminal.cyan,
    backend: terminal.green,
    databases: terminal.yellow,
    cloud: terminal.magenta,
    integrations: terminal.textSecondary,
  };

  const lanes: CapabilityLane[] = [
    {
      title: isSrCyrl ? 'ФРОНТЕНД' : 'FRONTEND',
      color: laneColors.frontend,
      tech: [
        tech('Next.js', laneColors.frontend, {
          simpleIconSlug: 'nextdotjs',
          deviconSlug: 'nextjs',
        }),
        tech('React', laneColors.frontend, {
          simpleIconSlug: 'react',
          deviconSlug: 'react',
        }),
        tech('TypeScript', laneColors.frontend, {
          simpleIconSlug: 'typescript',
          deviconSlug: 'typescript',
        }),
        tech('JavaScript', laneColors.frontend, {
          simpleIconSlug: 'javascript',
          deviconSlug: 'javascript',
        }),
        tech('Angular', laneColors.frontend, {
          simpleIconSlug: 'angular',
          deviconSlug: 'angular',
        }),
        tech('HTML5', laneColors.frontend, {
          simpleIconSlug: 'html5',
          deviconSlug: 'html5',
        }),
      ],
    },
    {
      title: isSrCyrl ? 'БЕКЕНД' : 'BACKEND',
      color: laneColors.backend,
      tech: [
        tech('C#', laneColors.backend, { deviconSlug: 'csharp' }),
        tech('.NET', laneColors.backend, {
          simpleIconSlug: 'dotnet',
          deviconSlug: 'dot-net',
        }),
        tech('ASP.NET Core', laneColors.backend, {
          deviconSlug: 'dot-net',
        }),
        tech('Clojure', laneColors.backend, {
          simpleIconSlug: 'clojure',
          deviconSlug: 'clojure',
        }),
        tech('Node.js', laneColors.backend, {
          simpleIconSlug: 'nodedotjs',
          deviconSlug: 'nodejs',
        }),
        tech('Express', laneColors.backend, {
          simpleIconSlug: 'express',
          deviconSlug: 'express',
        }),
      ],
    },
    {
      title: isSrCyrl ? 'БАЗЕ ПОДАТАКА' : 'DATABASES',
      color: laneColors.databases,
      tech: [
        tech('SQL Server', laneColors.databases, {
          deviconSlug: 'microsoftsqlserver',
          deviconVariant: 'plain',
        }),
        tech('PostgreSQL', laneColors.databases, {
          simpleIconSlug: 'postgresql',
          deviconSlug: 'postgresql',
        }),
        tech('Redis', laneColors.databases, {
          simpleIconSlug: 'redis',
          deviconSlug: 'redis',
        }),
        tech('MongoDB', laneColors.databases, {
          simpleIconSlug: 'mongodb',
          deviconSlug: 'mongodb',
        }),
        tech('MySQL', laneColors.databases, {
          simpleIconSlug: 'mysql',
          deviconSlug: 'mysql',
        }),
        tech('Neo4j', laneColors.databases, {
          simpleIconSlug: 'neo4j',
          deviconSlug: 'neo4j',
        }),
      ],
    },
    {
      title: isSrCyrl ? 'CLOUD И DEVOPS' : 'CLOUD & DEVOPS',
      color: laneColors.cloud,
      tech: [
        tech('Microsoft Azure', laneColors.cloud, {
          deviconSlug: 'azure',
        }),
        tech('Docker', laneColors.cloud, {
          simpleIconSlug: 'docker',
          deviconSlug: 'docker',
        }),
        tech('GitHub Actions', laneColors.cloud, { simpleIconSlug: 'githubactions' }),
        tech('Kubernetes', laneColors.cloud, {
          simpleIconSlug: 'kubernetes',
          deviconSlug: 'kubernetes',
        }),
        tech('AWS', laneColors.cloud, {
          customUrls: ['/icons/aws.svg'],
          deviconSlug: 'amazonwebservices',
        }),
        tech('OpenTelemetry', laneColors.cloud, {
          simpleIconSlug: 'opentelemetry',
        }),
      ],
    },
    {
      title: isSrCyrl ? 'ИНТЕГРАЦИЈЕ' : 'INTEGRATIONS',
      color: laneColors.integrations,
      tech: [
        tech('API Integration', laneColors.integrations, { simpleIconSlug: 'fastapi' }),
        tech('Payment Integrations', laneColors.integrations, {
          simpleIconSlug: 'paypal',
          deviconSlug: 'paypal',
        }),
        tech('Apache Kafka', laneColors.integrations, {
          simpleIconSlug: 'apachekafka',
          deviconSlug: 'apachekafka',
        }),
        tech('Swagger / OpenAPI', laneColors.integrations, {
          simpleIconSlug: 'swagger',
        }),
        tech('Auth & RBAC', laneColors.integrations, { simpleIconSlug: 'auth0' }),
        tech('CRM / ERP (Salesforce)', laneColors.integrations, {
          deviconSlug: 'salesforce',
        }),
      ],
    },
  ];

  const content = isSr
    ? {
        title: isSrCyrl
          ? 'ТЕХНОЛОГИЈЕ И СТУДИО КАПАЦИТЕТИ'
          : 'TEHNOLOGIJE I STUDIO KAPACITETI',
        subtitle: isSrCyrl
          ? 'Frontend, backend, базе података, cloud/devops и интеграције.'
          : 'Frontend, backend, baze podataka, cloud/devops i integracije.',
        lanes,
      }
    : {
        title: 'TECHNOLOGY & STUDIO CAPABILITIES',
        subtitle: 'Frontend, backend, databases, cloud/devops, and integrations.',
        lanes,
      };

  return (
    <Box component="section" id="skills" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
      <Container maxWidth="xl">
        <Card
          className="terminal-window"
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            backgroundColor: theme.palette.terminal.background,
            border: `1px solid ${theme.palette.terminal.border}`,
            overflow: 'hidden',
          }}
        >
          <CardContent
            sx={{
              backgroundColor: theme.palette.terminal.background,
              color: theme.palette.terminal.text,
              p: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: { xs: 1.5, sm: 2 },
                color: theme.palette.terminal.text,
                fontSize: {
                  xs: '1.5rem',
                  sm: '2rem',
                  md: '2.5rem',
                  lg: '3rem',
                },
                textAlign: 'center',
              }}
            >
              <HighlightedText
                text={content.title}
                highlightIndices={highlightFirstLetters(content.title)}
                highlightColor={theme.palette.terminal.green}
              />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.terminal.textSecondary,
                textAlign: 'center',
                mb: { xs: 3, sm: 4 },
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              {content.subtitle}
            </Typography>

            <Box
              sx={{
                backgroundColor: theme.palette.terminal.header,
                border: `1px solid ${theme.palette.terminal.border}`,
                borderRadius: 1,
                overflow: 'hidden',
              }}
            >
              {content.lanes.map((lane, laneIndex) => (
                <Box
                  key={lane.title}
                  sx={{
                    px: { xs: 1.5, sm: 2.5 },
                    py: { xs: 1.5, sm: 2 },
                    borderBottom:
                      laneIndex !== content.lanes.length - 1
                        ? `1px solid ${theme.palette.terminal.border}`
                        : 'none',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '240px 1fr' },
                    gap: { xs: 1.5, md: 2 },
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: lane.color,
                      fontWeight: 'bold',
                      letterSpacing: '0.06em',
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                  >
                    {lane.title}
                  </Typography>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: 'repeat(3, minmax(0, 1fr))',
                        sm: 'repeat(6, minmax(0, 1fr))',
                      },
                      gap: { xs: 1, sm: 1.25 },
                    }}
                  >
                    {lane.tech.map((item) => (
                      <Tooltip key={item.name} title={item.name} arrow>
                        <Box>
                          <TechTile
                            name={item.name}
                            iconUrls={item.iconUrls}
                            color={lane.color}
                            border={theme.palette.terminal.border}
                            background={theme.palette.terminal.background}
                          />
                        </Box>
                      </Tooltip>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ textAlign: 'center', mt: { xs: 3, sm: 4 } }}>
              <Button
                component="a"
                href="#contact"
                sx={{
                  border: `1px solid ${theme.palette.terminal.green}`,
                  color: theme.palette.terminal.green,
                  backgroundColor: theme.palette.terminal.header,
                  textTransform: 'none',
                  px: 2.5,
                  py: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.terminal.green,
                    color: theme.palette.terminal.background,
                  },
                }}
              >
                {isSr ? (isSrCyrl ? 'Планирајте технички discovery' : 'Planirajte tehnicki discovery') : 'Plan technical discovery'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
