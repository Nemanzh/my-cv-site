'use client';

import { Box, Stack, Typography, useTheme } from '@mui/material';

export type ProjectCaseStudy = {
  problem: string;
  role: string;
  solution: string;
  impact: string;
  techStack: string[];
};

export type ProjectCaseNoteLabels = {
  title: string;
  intro: string;
  problem: string;
  role: string;
  solution: string;
  impact: string;
  techStack: string;
};

type ProjectCaseNoteProps = {
  id: string;
  caseStudy: ProjectCaseStudy;
  labels: ProjectCaseNoteLabels;
};

const CASE_NOTE_FIELDS = [
  ['problem', 'problem'],
  ['role', 'role'],
  ['solution', 'solution'],
  ['impact', 'impact'],
] as const;

export default function ProjectCaseNote({ id, caseStudy, labels }: ProjectCaseNoteProps) {
  const theme = useTheme();

  return (
    <Box
      id={id}
      sx={{
        mt: 2,
        p: { xs: 1.8, sm: 2.2 },
        border: `1px solid ${theme.palette.terminal.border}`,
        borderRadius: 2,
        backgroundColor: `${theme.palette.terminal.background}AA`,
        boxShadow: `inset 3px 0 0 ${theme.palette.terminal.cyan}66`,
      }}
    >
      <Typography
        sx={{
          color: theme.palette.terminal.text,
          fontSize: '0.96rem',
          fontWeight: 700,
          lineHeight: 1.45,
        }}
      >
        {labels.title}
      </Typography>

      <Typography
        sx={{
          mt: 0.8,
          color: theme.palette.terminal.textSecondary,
          fontSize: '0.9rem',
          lineHeight: 1.7,
        }}
      >
        {labels.intro}
      </Typography>

      <Stack spacing={1.45} sx={{ mt: 1.8 }}>
        {CASE_NOTE_FIELDS.map(([fieldKey, labelKey]) => (
          <Box
            key={fieldKey}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '104px minmax(0, 1fr)' },
              gap: { xs: 0.45, sm: 1.5 },
              position: 'relative',
              pl: { xs: 1.4, sm: 0 },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: { xs: 0, sm: 96 },
                top: '0.65em',
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: theme.palette.terminal.cyan,
                boxShadow: `0 0 0 3px ${theme.palette.terminal.cyan}22`,
              },
            }}
          >
            <Typography
              sx={{
                color: theme.palette.terminal.green,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {labels[labelKey]}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.terminal.textSecondary,
                fontSize: '0.9rem',
                lineHeight: 1.7,
              }}
            >
              {caseStudy[fieldKey]}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Box sx={{ mt: 1.8 }}>
        <Typography
          sx={{
            color: theme.palette.terminal.green,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {labels.techStack}
        </Typography>
        <Stack direction="row" useFlexGap flexWrap="wrap" gap={0.8} sx={{ mt: 0.9 }}>
          {caseStudy.techStack.map((tech) => (
            <Box
              key={tech}
              sx={{
                border: `1px solid ${theme.palette.terminal.border}`,
                borderRadius: 999,
                px: 0.95,
                py: 0.38,
                color: theme.palette.terminal.cyan,
                fontSize: '0.76rem',
                lineHeight: 1.2,
              }}
            >
              {tech}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
