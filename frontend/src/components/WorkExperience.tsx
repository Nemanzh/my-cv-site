'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  Stack,
  Chip,
} from '@mui/material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';

export default function WorkExperience() {
  const theme = useTheme();

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Chainapp Technologies',
      location: 'Belgrade, Serbia',
      period: 'April 2024 – Present',
      achievements: [
        'Developed multiple web applications using Node.js (Strapi headless CMS), Next.js and PostgreSQL databases.',
        'Worked on integrating payment functionality with support for both crypto wallets and Stripe payment.',
        'Added Web3Auth integration to enable crypto wallet creation, then generated and encrypted Cardano blockchain keys to allow users to securely participate in decentralized voting through the Summons platform.',
        'Implemented a Kafka-based publisher/subscriber communication layer between a web application and Hubspot CMS to ensure real-time, decoupled data synchronization and event-driven workflows.',
        'Engineered an NFT-based badge system leveraging blockchain technologies (CIP-68 standard) to enhance membership management and user engagement.',
        'Managed Docker Compose files for deploying applications on AWS and Qovery.',
      ],
      technologies: [
        'Node.js',
        'Next.js',
        'PostgreSQL',
        'Web3Auth',
        'Cardano',
        'Kafka',
        'Hubspot',
        'NFT',
        'Docker',
        'AWS',
        'Qovery',
        'Stripe',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Insicon',
      location: 'Belgrade, Serbia',
      period: 'April 2022 – April 2024',
      achievements: [
        'Developed and maintained an in-house web application serving insurance companies across the Nordic region, utilizing C# .NET, Angular, and SQL Server (T-SQL).',
        'Migrated the web application to a cloud-based, multi-tenant architecture.',
        'Helped implement new features, such as the invoicing system, the notification system.',
        'Worked on upgrades of frameworks, including migrating .NET from version 4.8 to 8 and Angular from version 8 incrementally to version 16, and optimized SQL stored procedures to significantly enhance application performance.',
        'Integrated Azure Redis Cache and Azure Key Vault for caching and securely managing application secrets.',
        'Configure Microsoft Azure DevOps tasks and scripts that deploy the application on client servers.',
      ],
      technologies: [
        'C# .NET',
        'Angular',
        'SQL Server',
        'T-SQL',
        'Azure',
        'Redis Cache',
        'Key Vault',
        'DevOps',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Saga - Public Cloud sector',
      location: 'Belgrade, Serbia',
      period: 'February 2020 – April 2022',
      achievements: [
        'Implemented Microsoft Identity Manager to automate identity lifecycle management across both cloud (Azure Active Directory) and on-premise (Active Directory) datacenter platforms.',
        'Maintained the WPF application "One Stop Shop" for the Central Registry of Compulsory Social Insurance.',
        'Migrated SharePoint on-premises to SharePoint Online, and used React to construct client-side web components to integrate with other applications in the system.',
        'Integrated Power BI and Power Automate into SharePoint websites to make file synchronization and automate tasks.',
      ],
      technologies: [
        'Microsoft Identity Manager',
        'Azure AD',
        'Active Directory',
        'WPF',
        'SharePoint',
        'React',
        'Power BI',
        'Power Automate',
      ],
    },
    {
      title: 'Junior .NET Backend Software Developer',
      company: 'Saga',
      location: 'Belgrade, Serbia',
      period: 'July 2018 – February 2020',
      achievements: [
        'Developed and maintained RESTful APIs using C# and ASP .NET for high-impact government applications (National Employment Service, Ministry of Education, Ministry of Internal Affairs).',
        'Contributing to an in-house framework by improving authorization workflows, building code generators, and enhancing database schema via T-SQL stored procedures.',
      ],
      technologies: [
        'C#',
        'ASP .NET',
        'RESTful APIs',
        'T-SQL',
        'Government Applications',
      ],
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        pt: 2,
      }}
    >
      <Container maxWidth="xl">
        <Card
          className="terminal-window"
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            backgroundColor: theme.palette.terminal.background,
            border: `1px solid ${theme.palette.terminal.border}`,
          }}
        >
          <CardContent
            sx={{
              backgroundColor: theme.palette.terminal.background,
              color: theme.palette.terminal.text,
              p: 4,
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 4,
                color: theme.palette.terminal.text,
              }}
            >
              <HighlightedText
                text="EXPERIENCE"
                highlightIndices={highlightFirstLetters('EXPERIENCE')}
                highlightColor={theme.palette.terminal.green}
              />
            </Typography>

            <Stack spacing={4}>
              {experiences.map((exp, index) => (
                <Box key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        color: theme.palette.terminal.text,
                        mb: 0.5,
                      }}
                    >
                      <HighlightedText
                        text={exp.title}
                        highlightIndices={highlightFirstLetters(exp.title)}
                        highlightColor={theme.palette.terminal.cyan}
                      />
                      {', '}
                      <Box
                        component="span"
                        sx={{
                          color: theme.palette.terminal.magenta,
                        }}
                      >
                        {exp.company}
                      </Box>
                      {' - '}
                      <Box
                        component="span"
                        sx={{
                          color: theme.palette.terminal.textSecondary,
                        }}
                      >
                        {exp.location}
                      </Box>
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.terminal.green,
                        mb: 2,
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </Box>

                  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                    {exp.achievements.map((achievement, achIndex) => (
                      <Box
                        component="li"
                        key={achIndex}
                        sx={{
                          mb: 1,
                          listStyle: 'none',
                          position: 'relative',
                          '&::before': {
                            content: '"●"',
                            color: theme.palette.terminal.cyan,
                            position: 'absolute',
                            left: '-16px',
                            top: 0,
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.terminal.textSecondary,
                            lineHeight: 1.6,
                          }}
                        >
                          {achievement}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.terminal.header,
                          color: theme.palette.terminal.green,
                          border: `1px solid ${theme.palette.terminal.border}`,
                          fontFamily:
                            'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                          fontSize: '0.75rem',
                          '&:hover': {
                            backgroundColor: theme.palette.terminal.border,
                          },
                        }}
                      />
                    ))}
                  </Box>

                  {index < experiences.length - 1 && (
                    <Box
                      sx={{
                        mt: 3,
                        height: '1px',
                        backgroundColor: theme.palette.terminal.border,
                      }}
                    />
                  )}
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
