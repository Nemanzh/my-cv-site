'use client';

import React, { useState } from 'react';
import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { CheckCircleOutline, Close, Code } from '@mui/icons-material';

type CodeSegment = {
  text: string;
  color: string;
};

type CodeLine = CodeSegment[];

function WindowDot({ color }: { color: string }) {
  return (
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}55`,
      }}
    />
  );
}

export default function VisualStudioWidget() {
  const theme = useTheme();
  const colors = theme.palette.terminal;
  const [open, setOpen] = useState(false);

  const lines: CodeLine[] = [
    [
      { text: 'public ', color: colors.magenta },
      { text: 'sealed ', color: colors.magenta },
      { text: 'class ', color: colors.cyan },
      { text: 'PlatformDeliveryPolicy', color: colors.yellow },
    ],
    [
      { text: '(', color: colors.text },
      { text: 'IQualityGate ', color: colors.greenDark },
      { text: 'qualityGate', color: colors.cyan },
      { text: ', ', color: colors.textSecondary },
      { text: 'IObservability ', color: colors.greenDark },
      { text: 'observability', color: colors.cyan },
      { text: ')', color: colors.text },
    ],
    [{ text: '{', color: colors.text }],
    [
      { text: '    public ', color: colors.magenta },
      { text: 'async ', color: colors.magenta },
      { text: 'Task<ReleaseDecision> ', color: colors.greenDark },
      { text: 'ApproveAsync', color: colors.yellow },
      { text: '(', color: colors.text },
    ],
    [
      { text: '        ', color: colors.text },
      { text: 'BuildArtifact ', color: colors.greenDark },
      { text: 'artifact', color: colors.cyan },
      { text: ', ', color: colors.textSecondary },
    ],
    [
      { text: '        ', color: colors.text },
      { text: 'CancellationToken ', color: colors.greenDark },
      { text: 'cancellationToken', color: colors.cyan },
      { text: ')', color: colors.text },
    ],
    [{ text: '    {', color: colors.text }],
    [
      { text: '        await ', color: colors.magenta },
      { text: 'qualityGate', color: colors.cyan },
      { text: '.EnsureGreenAsync', color: colors.yellow },
      { text: '(artifact, cancellationToken);', color: colors.text },
    ],
    [
      { text: '        ', color: colors.text },
      { text: 'observability', color: colors.cyan },
      { text: '.TrackRelease', color: colors.yellow },
      { text: '(artifact.Version);', color: colors.text },
    ],
    [
      { text: '        return ', color: colors.magenta },
      { text: 'ReleaseDecision', color: colors.greenDark },
      { text: '.Ready', color: colors.yellow },
      { text: '("rollback-safe");', color: colors.green },
    ],
    [{ text: '    }', color: colors.text }],
    [{ text: '}', color: colors.text }],
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 12, sm: 18, lg: 24 },
        bottom: { xs: 12, sm: 18, lg: 24 },
        zIndex: 1450,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 1.2,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          pointerEvents: open ? 'auto' : 'none',
          width: { xs: 'calc(100vw - 24px)', sm: 420 },
          maxWidth: 420,
          border: `1px solid ${colors.border}`,
          borderRadius: 3,
          overflow: 'hidden',
          background: `linear-gradient(180deg, ${colors.header} 0%, ${colors.background} 100%)`,
          boxShadow: `0 18px 40px ${colors.background}66`,
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transform: open ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.98)',
          transformOrigin: 'bottom right',
          transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 1.4,
            py: 1,
            backgroundColor: colors.header,
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <Stack direction="row" spacing={0.8}>
            <WindowDot color="#ff5f57" />
            <WindowDot color="#febc2e" />
            <WindowDot color="#28c840" />
          </Stack>

          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography
              sx={{
                color: colors.textSecondary,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Visual Studio
            </Typography>
            <IconButton
              size="small"
              onClick={() => setOpen(false)}
              sx={{
                color: colors.textSecondary,
                width: 24,
                height: 24,
                pointerEvents: 'auto',
              }}
              aria-label="Close IDE widget"
            >
              <Close sx={{ fontSize: '0.92rem' }} />
            </IconButton>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={0.8}
          sx={{
            px: 1,
            py: 0.9,
            backgroundColor: `${colors.header}E6`,
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          {['PlatformDeliveryPolicy.cs', 'Nemanzh.Architecture.sln'].map((tab, index) => (
            <Box
              key={tab}
              sx={{
                px: 1.1,
                py: 0.55,
                borderRadius: 1.4,
                border: `1px solid ${index === 0 ? colors.cyan : colors.border}`,
                backgroundColor: index === 0 ? `${colors.background}CC` : 'transparent',
              }}
            >
              <Typography
                sx={{
                  color: index === 0 ? colors.text : colors.textSecondary,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                }}
              >
                {tab}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box
          sx={{
            px: 0,
            py: 1.2,
            background: `
              linear-gradient(180deg, ${colors.background} 0%, ${colors.background}F2 100%),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 27px,
                ${colors.border}14 28px
              )
            `,
          }}
        >
          {lines.map((line, index) => (
            <Box
              key={index}
              sx={{
                display: 'grid',
                gridTemplateColumns: '42px minmax(0, 1fr)',
                gap: 1,
                px: 1.2,
                minHeight: 28,
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  color: colors.textSecondary,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  textAlign: 'right',
                  userSelect: 'none',
                }}
              >
                {index + 1}
              </Typography>

              <Typography
                component="div"
                sx={{
                  color: colors.text,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  whiteSpace: 'pre-wrap',
                  overflowWrap: 'anywhere',
                }}
              >
                {line.map((segment, segmentIndex) => (
                  <Box
                    key={`${index}-${segmentIndex}-${segment.text}`}
                    component="span"
                    sx={{ color: segment.color }}
                  >
                    {segment.text}
                  </Box>
                ))}
              </Typography>
            </Box>
          ))}
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 1.3,
            py: 0.95,
            borderTop: `1px solid ${colors.border}`,
            backgroundColor: `${colors.cyan}14`,
            gap: 1.2,
            flexWrap: 'wrap',
          }}
        >
          <Stack direction="row" spacing={0.7} alignItems="center">
            <CheckCircleOutline sx={{ fontSize: '0.92rem', color: colors.greenDark }} />
            <Typography
              sx={{
                color: colors.text,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Build succeeded
            </Typography>
          </Stack>

          <Typography
            sx={{
              color: colors.textSecondary,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
            }}
          >
            .NET 8 | Azure | principal-review
          </Typography>
        </Stack>
      </Box>

      <Box
        component="button"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close IDE widget' : 'Open IDE widget'}
        sx={{
          pointerEvents: 'auto',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          px: 1.35,
          py: 1,
          borderRadius: 999,
          border: `1px solid ${open ? colors.cyan : colors.border}`,
          backgroundColor: open ? `${colors.header}F2` : `${colors.background}F0`,
          color: colors.text,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          boxShadow: `0 14px 30px ${colors.background}55`,
          cursor: 'pointer',
          transition: 'transform 0.18s ease, border-color 0.18s ease, background-color 0.18s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: colors.cyan,
            backgroundColor: `${colors.header}EE`,
          },
        }}
      >
        <Code sx={{ fontSize: '1rem', color: colors.cyan }} />
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: colors.greenDark,
            boxShadow: `0 0 8px ${colors.greenDark}66`,
          }}
        />
        <Typography component="span" sx={{ font: 'inherit' }}>
          {open ? 'Hide IDE' : 'Open IDE'}
        </Typography>
      </Box>
    </Box>
  );
}
