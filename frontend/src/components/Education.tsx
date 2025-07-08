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
        pb: 4,
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
                text="EDUCATION"
                highlightIndices={highlightFirstLetters('EDUCATION')}
                highlightColor={theme.palette.terminal.cyan}
              />
            </Typography>

            {/* Education Section */}
            <Stack spacing={3} sx={{ mb: 5 }}>
              {educationList.map((edu, index) => (
                <Box key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        color: theme.palette.terminal.text,
                        mb: 0.5,
                        lineHeight: 1.3,
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
                        mb: 0.5,
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
                        mb: 1,
                      }}
                    >
                      {edu.period}
                    </Typography>
                  </Box>

                  {index < educationList.length - 1 && (
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

            {/* Publications Section */}
            <Box
              sx={{
                mt: 4,
                pt: 4,
                borderTop: `2px solid ${theme.palette.terminal.border}`,
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  mb: 3,
                  color: theme.palette.terminal.text,
                }}
              >
                <HighlightedText
                  text="PUBLICATIONS"
                  highlightIndices={highlightFirstLetters('PUBLICATIONS')}
                  highlightColor={theme.palette.terminal.yellow}
                />
              </Typography>

              <Stack spacing={4}>
                {publications.map((pub, index) => (
                  <Box key={index}>
                    <Typography
                      variant="h6"
                      component="h4"
                      sx={{
                        color: theme.palette.terminal.text,
                        mb: 1,
                        lineHeight: 1.3,
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
                        mb: 0.5,
                      }}
                    >
                      {pub.conference}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.terminal.cyan,
                        mb: 2,
                      }}
                    >
                      {pub.date}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.terminal.textSecondary,
                        mb: 2,
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                      }}
                    >
                      {pub.abstract}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {pub.keywords.map((keyword, keyIndex) => (
                        <Chip
                          key={keyIndex}
                          label={keyword}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.terminal.header,
                            color: theme.palette.terminal.yellow,
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

                    {index < publications.length - 1 && (
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
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
