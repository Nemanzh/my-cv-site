'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';

export default function Skills() {
  const theme = useTheme();

  const skillCategories = [
    {
      category: 'FRONTEND DEVELOPMENT',
      color: theme.palette.terminal.cyan,
      skills: [
        'Next.js',
        'React',
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Material-UI',
        'Responsive Design',
        'SPA Development',
      ],
    },
    {
      category: 'BACKEND DEVELOPMENT',
      color: theme.palette.terminal.green,
      skills: [
        'Node.js',
        'C# .NET',
        'ASP.NET',
        'RESTful APIs',
        'Strapi CMS',
        'T-SQL',
        'Entity Framework',
        'Microservices',
        'API Design',
        'Server Architecture',
      ],
    },
    {
      category: 'DATABASES & STORAGE',
      color: theme.palette.terminal.magenta,
      skills: [
        'PostgreSQL',
        'SQL Server',
        'MongoDB',
        'T-SQL',
        'Database Design',
        'Schema Migration',
        'Redis Cache',
        'NoSQL',
        'Data Modeling',
        'Query Optimization',
      ],
    },
    {
      category: 'BLOCKCHAIN & WEB3',
      color: theme.palette.terminal.yellow,
      skills: [
        'Web3Auth',
        'Cardano',
        'NFT Development',
        'CIP-68 Standard',
        'Crypto Wallets',
        'Blockchain Integration',
        'Decentralized Voting',
        'Smart Contracts',
        'DeFi',
        'Cryptocurrency',
      ],
    },
    {
      category: 'CLOUD & DEVOPS',
      color: theme.palette.terminal.cyan,
      skills: [
        'Microsoft Azure',
        'AWS',
        'Docker',
        'Azure DevOps',
        'CI/CD',
        'Qovery',
        'Azure Key Vault',
        'Cloud Architecture',
        'Deployment Automation',
        'Infrastructure as Code',
      ],
    },
    {
      category: 'INTEGRATION & MESSAGING',
      color: theme.palette.terminal.green,
      skills: [
        'Kafka',
        'Hubspot CMS',
        'Stripe Payments',
        'SharePoint',
        'Power BI',
        'Power Automate',
        'Microsoft Identity Manager',
        'Azure AD',
        'Event-Driven Architecture',
        'API Integration',
      ],
    },
    {
      category: 'DEVELOPMENT PRACTICES',
      color: theme.palette.terminal.magenta,
      skills: [
        'Unit Testing',
        'Test-Driven Development',
        'Agile Methodologies',
        'Code Reviews',
        'Git Version Control',
        'Clean Code',
        'SOLID Principles',
        'Design Patterns',
        'Documentation',
        'Performance Optimization',
      ],
    },
    {
      category: 'SPECIALIZED DOMAINS',
      color: theme.palette.terminal.yellow,
      skills: [
        'Government Applications',
        'Insurance Systems',
        'Nordic Markets',
        'Multi-tenant Architecture',
        'Social Insurance',
        'Identity Management',
        'Enterprise Solutions',
        'Regulatory Compliance',
        'Data Security',
        'Legacy System Migration',
      ],
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 4,
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
                text="SKILLS && EXPERTISE"
                highlightIndices={highlightFirstLetters('SKILLS && EXPERTISE')}
                highlightColor={theme.palette.terminal.green}
              />
            </Typography>

            {/* Two-column layout using flexbox */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: 3,
              }}
            >
              {/* Left Column */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                {skillCategories
                  .filter((_, index) => index % 2 === 0)
                  .map((category, index) => (
                    <Box
                      key={index * 2}
                      sx={{
                        p: 3,
                        backgroundColor: theme.palette.terminal.header,
                        border: `1px solid ${theme.palette.terminal.border}`,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 2,
                          color: theme.palette.terminal.text,
                        }}
                      >
                        <HighlightedText
                          text={category.category}
                          highlightIndices={highlightFirstLetters(
                            category.category
                          )}
                          highlightColor={category.color}
                        />
                      </Typography>

                      {/* Terminal-style skill list */}
                      <Box
                        sx={{
                          fontFamily:
                            'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                          fontSize: '0.875rem',
                        }}
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <Box
                            key={skillIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 0.5,
                              '&:hover': {
                                backgroundColor: theme.palette.terminal.border,
                                borderRadius: '4px',
                                px: 1,
                                mx: -1,
                                transition: 'all 0.2s ease-in-out',
                              },
                            }}
                          >
                            <Typography
                              component="span"
                              sx={{
                                color: category.color,
                                mr: 1,
                                fontSize: '0.75rem',
                              }}
                            >
                              ▸
                            </Typography>
                            <Typography
                              component="span"
                              sx={{
                                color: theme.palette.terminal.textSecondary,
                                fontSize: '0.875rem',
                              }}
                            >
                              {skill}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
              </Box>

              {/* Right Column */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                {skillCategories
                  .filter((_, index) => index % 2 === 1)
                  .map((category, index) => (
                    <Box
                      key={index * 2 + 1}
                      sx={{
                        p: 3,
                        backgroundColor: theme.palette.terminal.header,
                        border: `1px solid ${theme.palette.terminal.border}`,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 2,
                          color: theme.palette.terminal.text,
                        }}
                      >
                        <HighlightedText
                          text={category.category}
                          highlightIndices={highlightFirstLetters(
                            category.category
                          )}
                          highlightColor={category.color}
                        />
                      </Typography>

                      {/* Terminal-style skill list */}
                      <Box
                        sx={{
                          fontFamily:
                            'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                          fontSize: '0.875rem',
                        }}
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <Box
                            key={skillIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 0.5,
                              '&:hover': {
                                backgroundColor: theme.palette.terminal.border,
                                borderRadius: '4px',
                                px: 1,
                                mx: -1,
                                transition: 'all 0.2s ease-in-out',
                              },
                            }}
                          >
                            <Typography
                              component="span"
                              sx={{
                                color: category.color,
                                mr: 1,
                                fontSize: '0.75rem',
                              }}
                            >
                              ▸
                            </Typography>
                            <Typography
                              component="span"
                              sx={{
                                color: theme.palette.terminal.textSecondary,
                                fontSize: '0.875rem',
                              }}
                            >
                              {skill}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>

            {/* Terminal Command Line */}
            <Box
              sx={{
                mt: 4,
                p: 2,
                backgroundColor: theme.palette.terminal.header,
                border: `1px solid ${theme.palette.terminal.border}`,
                borderRadius: 1,
                fontFamily:
                  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: theme.palette.terminal.cyan }}
              >
                $ echo &quot;Continuously learning and adapting to emerging
                technologies&quot;
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.terminal.green }}
              >
                &gt; Building scalable solutions from web2 to web3 ecosystems
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
