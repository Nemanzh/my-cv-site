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
import { useTranslations } from 'next-intl';

export default function Skills() {
  const theme = useTheme();
  const t = useTranslations('Skills');

  const skillCategories = [
    {
      category: t('categories.frontend.title'),
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
        t('categories.frontend.skills.responsiveDesign'),
        t('categories.frontend.skills.spaDeployment'),
      ],
    },
    {
      category: t('categories.backend.title'),
      color: theme.palette.terminal.green,
      skills: [
        'C# .NET',
        'ASP.NET',
        'RESTful APIs',
        'Node.js',
        'Strapi CMS',
        t('categories.backend.skills.monolithicArchitecture'),
        t('categories.backend.skills.apiDesign'),
      ],
    },
    {
      category: t('categories.databases.title'),
      color: theme.palette.terminal.magenta,
      skills: [
        'MSSQL Server',
        'PostgreSQL',
        'MongoDB',
        t('categories.databases.skills.databaseDesign'),
        t('categories.databases.skills.schemaMigration'),
        'Redis Cache',
        'NoSQL',
        t('categories.databases.skills.dataModeling'),
        t('categories.databases.skills.queryOptimization'),
      ],
    },
    {
      category: t('categories.blockchain.title'),
      color: theme.palette.terminal.yellow,
      skills: [
        'Web3Auth',
        'Cardano',
        t('categories.blockchain.skills.nftMinting'),
        'CIP-68 Standard',
        t('categories.blockchain.skills.cryptoWallets'),
        t('categories.blockchain.skills.blockchainIntegration'),
        t('categories.blockchain.skills.decentralizedVoting'),
      ],
    },
    {
      category: t('categories.cloud.title'),
      color: theme.palette.terminal.cyan,
      skills: [
        'Microsoft Azure',
        'AWS',
        'Docker/Docker Compose',
        'Azure DevOps',
        'CI/CD',
        'Qovery',
        'Azure Key Vault',
        'Kafka',
        t('categories.cloud.skills.deploymentAutomation'),
      ],
    },
    {
      category: t('categories.integration.title'),
      color: theme.palette.terminal.green,
      skills: [
        'Hubspot CMS',
        'Stripe Payments',
        'SharePoint',
        'Power BI',
        'Power Automate',
        'Microsoft Identity Manager',
        'Azure AD',
        t('categories.integration.skills.eventDrivenArchitecture'),
        t('categories.integration.skills.apiIntegration'),
      ],
    },
    {
      category: t('categories.practices.title'),
      color: theme.palette.terminal.magenta,
      skills: [
        t('categories.practices.skills.unitTesting'),
        t('categories.practices.skills.testDrivenDevelopment'),
        t('categories.practices.skills.agileMethodologies'),
        t('categories.practices.skills.codeReviews'),
        t('categories.practices.skills.gitVersionControl'),
        t('categories.practices.skills.cleanCode'),
        t('categories.practices.skills.solidPrinciples'),
        t('categories.practices.skills.designPatterns'),
        t('categories.practices.skills.documentation'),
        t('categories.practices.skills.performanceOptimization'),
      ],
    },
    {
      category: t('categories.specialized.title'),
      color: theme.palette.terminal.yellow,
      skills: [
        t('categories.specialized.skills.enterpriseSolutions'),
        t('categories.specialized.skills.governmentApplications'),
        t('categories.specialized.skills.insuranceSystems'),
        t('categories.specialized.skills.multiTenantArchitecture'),
        t('categories.specialized.skills.identityManagement'),
        t('categories.specialized.skills.regulatoryCompliance'),
        t('categories.specialized.skills.dataSecurity'),
        t('categories.specialized.skills.legacySystemMigration'),
      ],
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
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
                mb: { xs: 3, sm: 4 },
                color: theme.palette.terminal.text,
                fontSize: {
                  xs: '1.5rem',
                  sm: '2rem',
                  md: '2.5rem',
                  lg: '3rem',
                },
                textAlign: 'center',
                wordBreak: 'break-word',
                lineHeight: { xs: 1.2, md: 1.167 },
              }}
            >
              <HighlightedText
                text={t('skillsAndExpertise')}
                highlightIndices={highlightFirstLetters(
                  t('skillsAndExpertise')
                )}
                highlightColor={theme.palette.terminal.green}
              />
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                gap: { xs: 2, sm: 3 },
                gridAutoRows: 'minmax(auto, 1fr)', // Make rows equal height
              }}
            >
              {skillCategories.map((category, index) => (
                <Box
                  key={index}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    backgroundColor: theme.palette.terminal.header,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderRadius: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: { xs: 1.5, sm: 2 },
                      color: theme.palette.terminal.text,
                      fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                      wordBreak: 'break-word',
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

                  <Box
                    sx={{
                      fontFamily:
                        'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      flex: 1,
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <Box
                        key={skillIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: { xs: 0.25, sm: 0.5 },
                          py: { xs: 0.25, sm: 0.5 },
                          '&:hover': {
                            backgroundColor: theme.palette.terminal.border,
                            borderRadius: '4px',
                            px: { xs: 0.5, sm: 1 },
                            mx: { xs: -0.5, sm: -1 },
                            transition: 'all 0.2s ease-in-out',
                          },
                        }}
                      >
                        <Typography
                          component="span"
                          sx={{
                            color: category.color,
                            mr: { xs: 0.5, sm: 1 },
                            fontSize: { xs: '0.625rem', sm: '0.75rem' },
                          }}
                        >
                          ▸
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            color: theme.palette.terminal.textSecondary,
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            wordBreak: 'break-word',
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
            <Box
              sx={{
                mt: { xs: 2, sm: 3 },
                p: { xs: 1.5, sm: 2 },
                backgroundColor: theme.palette.terminal.header,
                border: `1px solid ${theme.palette.terminal.border}`,
                borderRadius: 1,
                fontFamily:
                  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.terminal.cyan,
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  mb: { xs: 0.5, sm: 1 },
                }}
              >
                $ echo &quot;Continuously learning and adapting to emerging
                technologies&quot;
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.terminal.green,
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                }}
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
