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
} from '@mui/material';
import type { IconType } from 'react-icons';
import { DiDotnet, DiMsqlServer } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import {
  SiAngular,
  SiApachekafka,
  SiAuth0,
  SiClojure,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiNodedotjs,
  SiOpentelemetry,
  SiPaypal,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSalesforce,
  SiSwagger,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { useLocale } from 'next-intl';

interface TechIcon {
  name: string;
  icon: IconType;
}

interface CapabilityLane {
  title: string;
  color: string;
  tech: TechIcon[];
}

function tech(
  name: string,
  _color: string,
  icon: IconType
): TechIcon {
  return {
    name,
    icon,
  };
}

function TechTile({
  name,
  icon,
  color,
  border,
  background,
}: {
  name: string;
  icon: IconType;
  color: string;
  border: string;
  background: string;
}) {
  return (
    <Box
      title={name}
      aria-label={name}
      role="img"
      sx={{
        height: { xs: 42, sm: 48, md: 52 },
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
      <Box
        component={icon}
        aria-hidden
        sx={{
          fontSize: { xs: 17, sm: 20, md: 22 },
          color,
        }}
      />
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
        tech('Next.js', laneColors.frontend, SiNextdotjs),
        tech('React', laneColors.frontend, SiReact),
        tech('TypeScript', laneColors.frontend, SiTypescript),
        tech('JavaScript', laneColors.frontend, SiJavascript),
        tech('Angular', laneColors.frontend, SiAngular),
        tech('HTML5', laneColors.frontend, SiHtml5),
      ],
    },
    {
      title: isSrCyrl ? 'БЕКЕНД' : 'BACKEND',
      color: laneColors.backend,
      tech: [
        tech('C#', laneColors.backend, TbBrandCSharp),
        tech('.NET', laneColors.backend, SiDotnet),
        tech('ASP.NET Core', laneColors.backend, DiDotnet),
        tech('Clojure', laneColors.backend, SiClojure),
        tech('Node.js', laneColors.backend, SiNodedotjs),
        tech('Express', laneColors.backend, SiExpress),
      ],
    },
    {
      title: isSrCyrl ? 'БАЗЕ ПОДАТАКА' : 'DATABASES',
      color: laneColors.databases,
      tech: [
        tech('SQL Server', laneColors.databases, DiMsqlServer),
        tech('PostgreSQL', laneColors.databases, SiPostgresql),
        tech('Redis', laneColors.databases, SiRedis),
        tech('MongoDB', laneColors.databases, SiMongodb),
        tech('MySQL', laneColors.databases, SiMysql),
        tech('Neo4j', laneColors.databases, SiNeo4J),
      ],
    },
    {
      title: isSrCyrl ? 'CLOUD И DEVOPS' : 'CLOUD & DEVOPS',
      color: laneColors.cloud,
      tech: [
        tech('Microsoft Azure', laneColors.cloud, VscAzure),
        tech('Docker', laneColors.cloud, SiDocker),
        tech('GitHub Actions', laneColors.cloud, SiGithubactions),
        tech('Kubernetes', laneColors.cloud, SiKubernetes),
        tech('AWS', laneColors.cloud, FaAws),
        tech('OpenTelemetry', laneColors.cloud, SiOpentelemetry),
      ],
    },
    {
      title: isSrCyrl ? 'ИНТЕГРАЦИЈЕ' : 'INTEGRATIONS',
      color: laneColors.integrations,
      tech: [
        tech('API Integration', laneColors.integrations, SiFastapi),
        tech('Payment Integrations', laneColors.integrations, SiPaypal),
        tech('Apache Kafka', laneColors.integrations, SiApachekafka),
        tech('Swagger / OpenAPI', laneColors.integrations, SiSwagger),
        tech('Auth & RBAC', laneColors.integrations, SiAuth0),
        tech('CRM / ERP (Salesforce)', laneColors.integrations, SiSalesforce),
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
                    gridTemplateColumns: { xs: '1fr', lg: '220px 1fr' },
                    gap: { xs: 1.25, md: 1.75 },
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    component="p"
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
                        sm: 'repeat(4, minmax(0, 1fr))',
                        md: 'repeat(6, minmax(0, 1fr))',
                      },
                      gap: { xs: 1, sm: 1.25 },
                    }}
                  >
                    {lane.tech.map((item) => (
                      <TechTile
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                        color={lane.color}
                        border={theme.palette.terminal.border}
                        background={theme.palette.terminal.background}
                      />
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
                  width: { xs: '100%', sm: 220 },
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
