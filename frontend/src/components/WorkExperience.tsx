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

  const experienceList = [
    {
      position: 'Senior Developer',
      company: 'Chainapp Technologies',
      location: 'Stockholm, Sweden',
      period: '2024 - Present',
      type: 'Full-time',
      description:
        'Leading development of cutting-edge NFT marketplace and blockchain solutions. Architecting scalable microservices using Node.js and implementing smart contracts on Cardano blockchain.',
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
        'Designed and implemented NFT marketplace handling 10K+ transactions',
        'Reduced API response time by 40% through optimization',
        'Led team of 4 developers in agile environment',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Insicon AB',
      location: 'Stockholm, Sweden',
      period: '2022 - 2024',
      type: 'Full-time',
      description:
        'Developed enterprise applications and digital solutions for clients across various industries. Specialized in React/Next.js frontend development and .NET backend services.',
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
        'Delivered 15+ client projects on time and within budget',
        'Implemented automated testing reducing bugs by 60%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      position: 'Software Developer',
      company: 'Saga Länsförsäkringar',
      location: 'Stockholm, Sweden',
      period: '2020 - 2022',
      type: 'Full-time',
      description:
        'Developed and maintained insurance management systems. Worked on both legacy system modernization and new feature development using modern web technologies.',
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
        'Modernized legacy insurance calculation engine',
        'Improved system performance by 35%',
        'Implemented comprehensive unit testing strategy',
      ],
    },
    {
      position: 'System Developer',
      company: 'Länsförsäkringar Göteborg',
      location: 'Gothenburg, Sweden',
      period: '2017 - 2020',
      type: 'Full-time',
      description:
        'Entry-level position developing internal tools and maintaining existing systems. Gained experience in enterprise software development and agile methodologies.',
      technologies: [
        'C# .NET',
        'JavaScript',
        'SQL Server',
        'HTML/CSS',
        'TFS',
        'Visual Studio',
      ],
      achievements: [
        'Developed internal reporting tools used by 100+ employees',
        'Reduced manual data processing time by 50%',
        'Successfully completed .NET certification program',
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
                text="WORK_EXPERIENCE"
                highlightIndices={highlightFirstLetters('WORK_EXPERIENCE')}
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
                      Technologies:
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
                      Key Achievements:
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
