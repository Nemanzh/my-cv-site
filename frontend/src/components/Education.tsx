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

export default function Education() {
  const theme = useTheme();

  const educationList = [
    {
      degree: 'Master of Science in Software Engineering and Computer Science',
      institution: 'Faculty of Organizational Sciences, University of Belgrade',
      location: 'Serbia',
      period: '2021 - 2022',
    },
    {
      degree: 'Bachelor of Science in Information Systems and Technology',
      institution: 'Faculty of Organizational Sciences, University of Belgrade',
      location: 'Serbia',
      period: '2009 - 2018',
    },
    {
      degree: 'Secondary Education Degree, Mathematics',
      institution: 'Grammar school Kruševac',
      location: 'Serbia',
      period: '2005 - 2009',
    },
  ];

  const certifications = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'Feb 2021',
      description:
        'Foundational level understanding of cloud services and how those services are provided with Microsoft Azure.',
    },
  ];

  const publications = [
    {
      title:
        'TRANSFORMACIJA LOGIČKE SHEME BAZE PODATAKA: OD RELACIONOG (T-SQL) MODELA DO DOKUMENTACIONO-ORIJENTISANOG MONGODB',
      conference: 'Zborniku radova SYM-OP-IS 2022 Vrnjačka banja',
      date: 'Sep 22, 2022',
      abstract:
        'Kako ne postoji jedinstven način da se deo podataka predstavi korisniku, tako ne postoji jedan način za modeliranje baza podataka. Potrebno je da se razume problem koji rešava aplikacija i kako će ona proizvoditi, konzumirati i obraditi podatke. U ovom radu biće predstavljena transformacija logičkih shema iz relacionih baza podataka u dokument-orjentisane baze podataka bez sheme.',
      keywords: [
        'Database Transformation',
        'T-SQL',
        'MongoDB',
        'NoSQL',
        'Schema Design',
      ],
    },
    {
      title: 'NAJBOLJE PRAKSE U PISANJU UNIT TESTOVA ZA .NET OKVIR',
      conference: 'SYM-OP-IS Banja Koviljača',
      date: 'Sep 23, 2021',
      abstract:
        'Unit testovi su osnovni alat za svakog programera, a cilj unit testiranja je da se izoluje svaki deo programa i pokaže da su pojedinačni delovi tačni. Unit test pruža pismeni ugovor koji deo koda mora da zadovolji, pored toga pruža još nekoliko prednosti.',
      keywords: [
        'Unit Testing',
        '.NET',
        'Best Practices',
        'Software Quality',
        'Code Testing',
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
                text="EDUCATION"
                highlightIndices={highlightFirstLetters('EDUCATION')}
                highlightColor={theme.palette.terminal.cyan}
              />
            </Typography>
            <Stack spacing={{ xs: 2, sm: 3 }} sx={{ mb: { xs: 4, sm: 5 } }}>
              {educationList.map((edu, index) => (
                <Box
                  key={index}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    backgroundColor: theme.palette.terminal.header,
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      color: theme.palette.terminal.text,
                      mb: { xs: 1, sm: 1.5 },
                      lineHeight: 1.3,
                      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                      wordBreak: 'break-word',
                    }}
                  >
                    <HighlightedText
                      text={edu.degree}
                      highlightIndices={highlightFirstLetters(edu.degree)}
                      highlightColor={theme.palette.terminal.magenta}
                    />
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.terminal.green,
                      mb: { xs: 0.5, sm: 1 },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      wordBreak: 'break-word',
                    }}
                  >
                    {edu.institution}
                    {', '}
                    <Box
                      component="span"
                      sx={{
                        color: theme.palette.terminal.textSecondary,
                      }}
                    >
                      {edu.location}
                    </Box>
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.terminal.cyan,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    }}
                  >
                    {edu.period}
                  </Typography>
                </Box>
              ))}
            </Stack>
            <Box
              sx={{
                mt: { xs: 3, sm: 4 },
                pt: { xs: 3, sm: 4 },
                borderTop: `2px solid ${theme.palette.terminal.border}`,
                mb: { xs: 4, sm: 5 },
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  color: theme.palette.terminal.text,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                  textAlign: 'center',
                  wordBreak: 'break-word',
                  lineHeight: { xs: 1.2, md: 1.167 },
                }}
              >
                <HighlightedText
                  text="CERTIFICATIONS"
                  highlightIndices={highlightFirstLetters('CERTIFICATIONS')}
                  highlightColor={theme.palette.terminal.green}
                />
              </Typography>

              <Stack spacing={{ xs: 2, sm: 3 }}>
                {certifications.map((cert, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: { xs: 2, sm: 3 },
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
                        backgroundColor: theme.palette.terminal.green,
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
                        mb: { xs: 1, sm: 1.5 },
                        gap: { xs: 1, sm: 2 },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{
                          color: theme.palette.terminal.cyan,
                          fontSize: {
                            xs: '1rem',
                            sm: '1.125rem',
                            md: '1.25rem',
                          },
                          fontWeight: 'bold',
                          wordBreak: 'break-word',
                          flex: 1,
                        }}
                      >
                        <HighlightedText
                          text={cert.title}
                          highlightIndices={highlightFirstLetters(cert.title)}
                          highlightColor={theme.palette.terminal.magenta}
                        />
                      </Typography>

                      <Chip
                        label={cert.date}
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

                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.terminal.green,
                        mb: { xs: 1, sm: 1.5 },
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        fontWeight: 'bold',
                      }}
                    >
                      {cert.issuer}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.terminal.textSecondary,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                      }}
                    >
                      {cert.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                mt: { xs: 3, sm: 4 },
                pt: { xs: 3, sm: 4 },
                borderTop: `2px solid ${theme.palette.terminal.border}`,
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  color: theme.palette.terminal.text,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                  textAlign: 'center',
                  wordBreak: 'break-word',
                  lineHeight: { xs: 1.2, md: 1.167 },
                }}
              >
                <HighlightedText
                  text="PUBLICATIONS"
                  highlightIndices={highlightFirstLetters('PUBLICATIONS')}
                  highlightColor={theme.palette.terminal.yellow}
                />
              </Typography>

              <Stack spacing={{ xs: 3, sm: 4 }}>
                {publications.map((pub, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: { xs: 2, sm: 3 },
                      backgroundColor: theme.palette.terminal.header,
                      border: `1px solid ${theme.palette.terminal.border}`,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h4"
                      sx={{
                        color: theme.palette.terminal.text,
                        mb: { xs: 1, sm: 1.5 },
                        lineHeight: 1.3,
                        fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                        wordBreak: 'break-word',
                      }}
                    >
                      <HighlightedText
                        text={pub.title}
                        highlightIndices={highlightFirstLetters(pub.title)}
                        highlightColor={theme.palette.terminal.magenta}
                      />
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.terminal.green,
                        mb: { xs: 0.5, sm: 1 },
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        wordBreak: 'break-word',
                      }}
                    >
                      {pub.conference}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.terminal.cyan,
                        mb: { xs: 1, sm: 2 },
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      }}
                    >
                      {pub.date}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.terminal.textSecondary,
                        mb: { xs: 1.5, sm: 2 },
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                      }}
                    >
                      {pub.abstract}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: { xs: 0.5, sm: 1 },
                      }}
                    >
                      {pub.keywords.map((keyword, keyIndex) => (
                        <Chip
                          key={keyIndex}
                          label={keyword}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.terminal.background,
                            color: theme.palette.terminal.yellow,
                            border: `1px solid ${theme.palette.terminal.border}`,
                            fontFamily:
                              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                            fontSize: { xs: '0.625rem', sm: '0.75rem' },
                            height: { xs: 24, sm: 32 },
                            '&:hover': {
                              backgroundColor: theme.palette.terminal.border,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
