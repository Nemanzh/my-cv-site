'use client';

import React from 'react';
import {
  AccountTree,
  AutoAwesome,
  Code,
  FactCheck,
  RateReview,
  RocketLaunch,
  Search,
} from '@mui/icons-material';
import { Box, Stack, Typography, useTheme } from '@mui/material';

export type DeliveryStepIcon =
  | 'understand'
  | 'break-down'
  | 'build'
  | 'review'
  | 'test'
  | 'release'
  | 'improve';

export interface DeliveryStep {
  id: string;
  label: string;
  title: string;
  description: string;
  focusPoints: string[];
  tools: string;
  example: string;
  icon?: DeliveryStepIcon;
}

export interface RequirementToReleaseFlowContent {
  kicker: string;
  title: string;
  intro: string;
  labels: {
    focus: string;
    tools: string;
    example: string;
    phase: string;
  };
  steps: DeliveryStep[];
}

const STEP_ICONS: Record<DeliveryStepIcon, typeof Search> = {
  understand: Search,
  'break-down': AccountTree,
  build: Code,
  review: RateReview,
  test: FactCheck,
  release: RocketLaunch,
  improve: AutoAwesome,
};

export default function RequirementToReleaseFlow({
  content,
}: {
  content: RequirementToReleaseFlowContent;
}) {
  const theme = useTheme();
  const [selectedId, setSelectedId] = React.useState(content.steps[0]?.id ?? '');
  const selectedStep =
    content.steps.find((step) => step.id === selectedId) ?? content.steps[0];
  const selectedIndex = Math.max(
    0,
    content.steps.findIndex((step) => step.id === selectedStep?.id),
  );

  if (!selectedStep) {
    return null;
  }

  const selectedIconName = selectedStep.icon ?? 'understand';
  const SelectedIcon = STEP_ICONS[selectedIconName] ?? Search;

  return (
    <Box
      component="section"
      id="delivery-flow"
      sx={{
        scrollMarginTop: { xs: 88, lg: 100 },
      }}
    >
      <Typography
        sx={{
          mb: 3,
          color: theme.palette.terminal.green,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}
      >
        {content.kicker}
      </Typography>

      <Typography
        sx={{
          color: theme.palette.terminal.text,
          fontSize: { xs: '1.3rem', md: '1.55rem' },
          fontWeight: 600,
          lineHeight: 1.35,
        }}
      >
        {content.title}
      </Typography>

      <Typography
        sx={{
          mt: 1.5,
          color: theme.palette.terminal.textSecondary,
          lineHeight: 1.85,
          maxWidth: '62ch',
        }}
      >
        {content.intro}
      </Typography>

      <Box
        sx={{
          mt: 3.5,
          p: { xs: 1.6, sm: 2, md: 2.4 },
          border: `1px solid ${theme.palette.terminal.border}`,
          borderRadius: 3,
          background: `linear-gradient(160deg, ${theme.palette.terminal.header} 0%, ${theme.palette.terminal.background} 72%)`,
          boxShadow: `0 0 0 1px ${theme.palette.terminal.border}33 inset, 0 18px 48px rgba(0, 0, 0, 0.18)`,
          overflow: 'hidden',
        }}
      >
        <Box
          role="tablist"
          aria-label={content.title}
          sx={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(7, minmax(0, 1fr))' },
            gap: { xs: 1, sm: 0.7 },
            '&::before': {
              content: '""',
              position: 'absolute',
              display: { xs: 'none', sm: 'block' },
              top: 24,
              left: '7%',
              right: '7%',
              height: 1,
              background: `linear-gradient(90deg, ${theme.palette.terminal.border}, ${theme.palette.terminal.cyan}66, ${theme.palette.terminal.border})`,
              pointerEvents: 'none',
            },
          }}
        >
          {content.steps.map((step, index) => {
            const isSelected = step.id === selectedStep.id;
            const isComplete = index < selectedIndex;
            const Icon = STEP_ICONS[step.icon ?? 'understand'] ?? Search;

            return (
              <Box
                key={step.id}
                component="button"
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls="delivery-flow-detail"
                onClick={() => setSelectedId(step.id)}
                sx={{
                  appearance: 'none',
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: { xs: '38px minmax(0, 1fr)', sm: '1fr' },
                  justifyItems: { xs: 'start', sm: 'center' },
                  alignItems: 'center',
                  gap: { xs: 1.2, sm: 0.8 },
                  minHeight: { xs: 54, sm: 92 },
                  width: '100%',
                  border: { xs: `1px solid ${isSelected ? theme.palette.terminal.cyan : theme.palette.terminal.border}`, sm: 0 },
                  borderRadius: { xs: 2, sm: 0 },
                  px: { xs: 1.2, sm: 0.4 },
                  py: { xs: 1, sm: 0 },
                  color: isSelected
                    ? theme.palette.terminal.text
                    : theme.palette.terminal.textSecondary,
                  background: {
                    xs: isSelected
                      ? `linear-gradient(135deg, ${theme.palette.terminal.cyan}18 0%, ${theme.palette.terminal.header} 100%)`
                      : `${theme.palette.terminal.background}66`,
                    sm: 'transparent',
                  },
                  cursor: 'pointer',
                  textAlign: { xs: 'left', sm: 'center' },
                  transition:
                    'color 0.18s ease, border-color 0.18s ease, background-color 0.18s ease, transform 0.18s ease',
                  '&:hover': {
                    color: theme.palette.terminal.cyan,
                    transform: 'translateY(-1px)',
                  },
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.terminal.cyan}`,
                    outlineOffset: 4,
                  },
                }}
              >
                <Box
                  sx={{
                    zIndex: 1,
                    display: 'grid',
                    placeItems: 'center',
                    width: 38,
                    height: 38,
                    border: `1px solid ${
                      isSelected || isComplete
                        ? theme.palette.terminal.cyan
                        : theme.palette.terminal.border
                    }`,
                    borderRadius: 999,
                    color: isSelected
                      ? theme.palette.terminal.background
                      : isComplete
                        ? theme.palette.terminal.cyan
                        : theme.palette.terminal.textSecondary,
                    background: isSelected
                      ? `linear-gradient(135deg, ${theme.palette.terminal.cyan}, ${theme.palette.terminal.green})`
                      : theme.palette.terminal.header,
                    boxShadow: isSelected
                      ? `0 0 22px ${theme.palette.terminal.cyan}55`
                      : 'none',
                  }}
                >
                  <Icon sx={{ fontSize: '1.05rem' }} />
                </Box>

                <Stack spacing={0.2} sx={{ minWidth: 0 }}>
                  <Typography
                    component="span"
                    sx={{
                      color: 'inherit',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.08em',
                      lineHeight: 1.2,
                      opacity: 0.74,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: 'inherit',
                      fontSize: { xs: '0.9rem', sm: '0.76rem', md: '0.82rem' },
                      fontWeight: isSelected ? 800 : 650,
                      lineHeight: 1.25,
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {step.label}
                  </Typography>
                </Stack>
              </Box>
            );
          })}
        </Box>

        <Box
          id="delivery-flow-detail"
          role="tabpanel"
          key={selectedStep.id}
          sx={{
            position: 'relative',
            mt: { xs: 2, md: 2.4 },
            p: { xs: 2, sm: 2.4, md: 2.8 },
            border: `1px solid ${theme.palette.terminal.cyan}44`,
            borderRadius: 3,
            background: `radial-gradient(circle at 10% 0%, ${theme.palette.terminal.cyan}16, transparent 32%), linear-gradient(145deg, ${theme.palette.terminal.background} 0%, ${theme.palette.terminal.header} 100%)`,
            boxShadow: `0 0 0 1px ${theme.palette.terminal.cyan}12 inset`,
            animation: 'deliveryFlowIn 0.22s ease both',
            '@keyframes deliveryFlowIn': {
              from: {
                opacity: 0.72,
                transform: 'translateY(5px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.6}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
          >
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
                width: 48,
                height: 48,
                border: `1px solid ${theme.palette.terminal.cyan}`,
                borderRadius: 2,
                color: theme.palette.terminal.cyan,
                backgroundColor: `${theme.palette.terminal.cyan}10`,
              }}
            >
              <SelectedIcon sx={{ fontSize: '1.35rem' }} />
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  color: theme.palette.terminal.green,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                }}
              >
                {content.labels.phase} {String(selectedIndex + 1).padStart(2, '0')}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  mt: 0.6,
                  color: theme.palette.terminal.text,
                  fontSize: { xs: '1.14rem', md: '1.3rem' },
                  fontWeight: 750,
                  lineHeight: 1.35,
                }}
              >
                {selectedStep.title}
              </Typography>
            </Box>
          </Stack>

          <Typography
            sx={{
              mt: 1.8,
              color: theme.palette.terminal.textSecondary,
              lineHeight: 1.85,
            }}
          >
            {selectedStep.description}
          </Typography>

          <Box
            sx={{
              mt: 2.4,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 0.9fr' },
              gap: { xs: 2.2, md: 2.6 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: theme.palette.terminal.green,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {content.labels.focus}
              </Typography>

              <Box
                component="ul"
                sx={{
                  mt: 1.2,
                  display: 'grid',
                  gap: 0.85,
                  listStyle: 'none',
                  pl: 0,
                }}
              >
                {selectedStep.focusPoints.map((point) => (
                  <Box
                    key={point}
                    component="li"
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '10px minmax(0, 1fr)',
                      gap: 1,
                      alignItems: 'start',
                      color: theme.palette.terminal.textSecondary,
                      fontSize: '0.92rem',
                      lineHeight: 1.55,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        mt: 0.75,
                        borderRadius: 999,
                        backgroundColor: theme.palette.terminal.cyan,
                        boxShadow: `0 0 10px ${theme.palette.terminal.cyan}`,
                      }}
                    />
                    <Typography component="span" sx={{ color: 'inherit', fontSize: 'inherit' }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Stack spacing={1.4}>
              <Box
                sx={{
                  p: 1.6,
                  border: `1px solid ${theme.palette.terminal.border}`,
                  borderRadius: 2,
                  backgroundColor: `${theme.palette.terminal.background}72`,
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.terminal.green,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {content.labels.tools}
                </Typography>
                <Typography
                  sx={{
                    mt: 0.9,
                    color: theme.palette.terminal.cyan,
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                  }}
                >
                  {selectedStep.tools}
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 1.6,
                  border: `1px dashed ${theme.palette.terminal.border}`,
                  borderRadius: 2,
                  backgroundColor: `${theme.palette.terminal.background}48`,
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.terminal.green,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {content.labels.example}
                </Typography>
                <Typography
                  sx={{
                    mt: 0.9,
                    color: theme.palette.terminal.textSecondary,
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                  }}
                >
                  {selectedStep.example}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
