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
import { useTranslations } from 'next-intl';

export default function WorkExperience() {
  const theme = useTheme();
  const t = useTranslations('WorkExperience');

  const experienceList = [
    {
      position: t('experiences.chainapp.position'),
      company: t('experiences.chainapp.company'),
      location: t('experiences.chainapp.location'),
      period: t('experiences.chainapp.period'),
      type: t('experiences.chainapp.type'),
      description: t('experiences.chainapp.description'),
      technologies: [
        'Node.js',
        'TypeScript',
        'React',
        'Cardano',
        'Smart Contracts',
        'Microservices',
        'PostgreSQL',
        'Docker',
      ],
      achievements: [
        t('experiences.chainapp.achievements.0'),
        t('experiences.chainapp.achievements.1'),
        t('experiences.chainapp.achievements.2'),
      ],
    },
    {
      position: t('experiences.insicon.position'),
      company: t('experiences.insicon.company'),
      location: t('experiences.insicon.location'),
      period: t('experiences.insicon.period'),
      type: t('experiences.insicon.type'),
      description: t('experiences.insicon.description'),
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'C# .NET',
        'SQL Server',
        'Azure',
        'REST APIs',
        'Git',
      ],
      achievements: [
        t('experiences.insicon.achievements.0'),
        t('experiences.insicon.achievements.1'),
        t('experiences.insicon.achievements.2'),
      ],
    },
    {
      position: t('experiences.saga.position'),
      company: t('experiences.saga.company'),
      location: t('experiences.saga.location'),
      period: t('experiences.saga.period'),
      type: t('experiences.saga.type'),
      description: t('experiences.saga.description'),
      technologies: [
        'C# .NET',
        'Angular',
        'TypeScript',
        'SQL Server',
        'Entity Framework',
        'Azure DevOps',
        'SCRUM',
      ],
      achievements: [
        t('experiences.saga.achievements.0'),
        t('experiences.saga.achievements.1'),
        t('experiences.saga.achievements.2'),
      ],
    },
    {
      position: t('experiences.lansforsakringar.position'),
      company: t('experiences.lansforsakringar.company'),
      location: t('experiences.lansforsakringar.location'),
      period: t('experiences.lansforsakringar.period'),
      type: t('experiences.lansforsakringar.type'),
      description: t('experiences.lansforsakringar.description'),
      technologies: [
        'C# .NET',
        'JavaScript',
        'SQL Server',
        'HTML/CSS',
        'TFS',
        'Visual Studio',
      ],
      achievements: [
        t('experiences.lansforsakringar.achievements.0'),
        t('experiences.lansforsakringar.achievements.1'),
        t('experiences.lansforsakringar.achievements.2'),
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
                text={t('workExperience')}
                highlightIndices={highlightFirstLetters(t('workExperience'))}
                highlightColor={theme.palette.terminal.green}
              />
            </Typography>

            <Stack spacing={{ xs: 3, sm: 4 }}>
              {experienceList.map((exp, index) => (
                <Box
                  key={index}
                  sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: theme.palette.terminal.header,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderRadius: 1,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: { xs: -2, sm: -3 },
                      top: 0,
                      bottom: 0,
                      width: { xs: '3px', sm: '4px' },
                      backgroundColor: theme.palette.terminal.cyan,
                      borderRadius: '2px',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'flex-start' },
                      mb: { xs: 2, sm: 3 },
                      gap: { xs: 1, sm: 2 },
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          color: theme.palette.terminal.cyan,
                          fontSize: {
                            xs: '1.1rem',
                            sm: '1.25rem',
                            md: '1.5rem',
                          },
                          fontWeight: 'bold',
                          mb: { xs: 0.5, sm: 1 },
                          wordBreak: 'break-word',
                        }}
                      >
                        <HighlightedText
                          text={exp.position}
                          highlightIndices={highlightFirstLetters(exp.position)}
                          highlightColor={theme.palette.terminal.magenta}
                        />
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.terminal.green,
                          fontSize: { xs: '1rem', sm: '1.125rem' },
                          mb: { xs: 0.5, sm: 1 },
                          wordBreak: 'break-word',
                        }}
                      >
                        {exp.company}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.terminal.textSecondary,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          mb: { xs: 1, sm: 0 },
                        }}
                      >
                        {exp.location} • {exp.type}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                      }}
                    >
                      <Chip
                        label={exp.period}
                        sx={{
                          backgroundColor: theme.palette.terminal.background,
                          color: theme.palette.terminal.yellow,
                          border: `1px solid ${theme.palette.terminal.border}`,
                          fontFamily:
                            'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          fontWeight: 'bold',
                          height: { xs: 28, sm: 32 },
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.terminal.text,
                      mb: { xs: 2, sm: 3 },
                      lineHeight: 1.6,
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    }}
                  >
                    {exp.description}
                  </Typography>
                  <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.terminal.cyan,
                        mb: 1,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        fontWeight: 'bold',
                      }}
                    >
                      {t('technologies')}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: { xs: 0.5, sm: 1 },
                      }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.terminal.background,
                            color: theme.palette.terminal.green,
                            border: `1px solid ${theme.palette.terminal.border}`,
                            fontFamily:
                              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                            fontSize: { xs: '0.625rem', sm: '0.75rem' },
                            height: { xs: 24, sm: 28 },
                            '&:hover': {
                              backgroundColor: theme.palette.terminal.border,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.terminal.cyan,
                        mb: 1,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        fontWeight: 'bold',
                      }}
                    >
                      {t('keyAchievements')}
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        pl: { xs: 2, sm: 3 },
                        m: 0,
                      }}
                    >
                      {exp.achievements.map((achievement, achIndex) => (
                        <Typography
                          key={achIndex}
                          component="li"
                          variant="body2"
                          sx={{
                            color: theme.palette.terminal.textSecondary,
                            mb: 0.5,
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            lineHeight: 1.5,
                          }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
