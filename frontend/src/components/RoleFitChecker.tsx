'use client';

import React from 'react';
import { AutoFixHigh, CancelOutlined, ContentCopy, RestartAlt } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import type { RoleFitResponse } from '@/data/profileData';

export interface RoleFitCheckerContent {
  kicker: string;
  title: string;
  intro: string;
  textareaLabel: string;
  textareaPlaceholder: string;
  helperText: string;
  validationRequired: string;
  validationTooShort: string;
  validationTooLong: string;
  genericError: string;
  submitLabel: string;
  sampleLabel: string;
  resetLabel: string;
  cancelLabel: string;
  cancelledMessage: string;
  loadingLabel: string;
  processingStatuses: string[];
  sampleJobDescription: string;
  emptyTitle: string;
  emptyBody: string;
  matchScoreLabel: string;
  confidenceLabel: string;
  confidenceLevels: {
    high: string;
    medium: string;
    low: string;
  };
  recruiterViewLabel: string;
  overallSummaryLabel: string;
  strongMatchesLabel: string;
  potentialGapsLabel: string;
  missingContextLabel: string;
  recruiterSummaryLabel: string;
  copySummaryLabel: string;
  copiedLabel: string;
  relevantTechnologiesLabel: string;
  matchedTechnologiesLabel: string;
  adjacentTechnologiesLabel: string;
  missingTechnologiesLabel: string;
}

export default function RoleFitChecker({
  content,
}: {
  content: RoleFitCheckerContent;
}) {
  const theme = useTheme();
  const [jobDescription, setJobDescription] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeStatusIndex, setActiveStatusIndex] = React.useState(0);
  const [result, setResult] = React.useState<RoleFitResponse | null>(null);
  const [hasCopiedSummary, setHasCopiedSummary] = React.useState(false);
  const abortControllerRef = React.useRef<AbortController | null>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    if (!isLoading || content.processingStatuses.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveStatusIndex((current) => (current + 1) % content.processingStatuses.length);
    }, 1600);

    return () => window.clearInterval(intervalId);
  }, [content.processingStatuses.length, isLoading]);

  const handleReset = () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setJobDescription('');
    setError('');
    setIsLoading(false);
    setActiveStatusIndex(0);
    setResult(null);
    setHasCopiedSummary(false);
    window.requestAnimationFrame(() => textareaRef.current?.focus());
  };

  const handleUseSample = () => {
    setJobDescription(content.sampleJobDescription);
    setError('');
    setResult(null);
    setHasCopiedSummary(false);
    window.requestAnimationFrame(() => textareaRef.current?.focus());
  };

  const handleCancel = () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setIsLoading(false);
    setActiveStatusIndex(0);
    setError(content.cancelledMessage);
  };

  const handleCopySummary = async () => {
    if (!result) {
      return;
    }

    await navigator.clipboard.writeText(result.recruiterSummary);
    setHasCopiedSummary(true);

    window.setTimeout(() => setHasCopiedSummary(false), 2200);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setResult(null);
    setActiveStatusIndex(0);
    setHasCopiedSummary(false);

    const trimmed = jobDescription.trim();

    if (!trimmed) {
      setError(content.validationRequired);
      return;
    }

    if (trimmed.length < 50) {
      setError(content.validationTooShort);
      return;
    }

    if (trimmed.length > 8000) {
      setError(content.validationTooLong);
      return;
    }

    setIsLoading(true);
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const response = await fetch('/api/role-fit-checker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobDescription: trimmed,
        }),
        signal: abortController.signal,
      });

      const data = (await response.json()) as
        | { ok: true; result: RoleFitResponse }
        | { ok: false; message?: string };

      if (!data.ok) {
        throw new Error(data.message || content.genericError);
      }

      setResult(data.result);
    } catch (submissionError) {
      if (submissionError instanceof DOMException && submissionError.name === 'AbortError') {
        setError(content.cancelledMessage);
        return;
      }

      setError(
        submissionError instanceof Error
          ? submissionError.message
          : content.genericError,
      );
    } finally {
      abortControllerRef.current = null;
      setIsLoading(false);
    }
  };

  return (
    <Box
      component="section"
      id="role-fit"
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
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 3.5,
          p: { xs: 2.2, md: 3 },
          border: `1px solid ${theme.palette.terminal.border}`,
          borderRadius: 3,
          background: `linear-gradient(180deg, ${theme.palette.terminal.header}F2 0%, ${theme.palette.terminal.background} 100%)`,
          boxShadow: `0 0 0 1px ${theme.palette.terminal.border}33 inset`,
        }}
      >
        <Stack spacing={2.2}>
          <TextField
            label={content.textareaLabel}
            placeholder={content.textareaPlaceholder}
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
            inputRef={textareaRef}
            multiline
            minRows={8}
            fullWidth
            disabled={isLoading}
            helperText={`${content.helperText} ${jobDescription.trim().length}/8000`}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: theme.palette.terminal.text,
                backgroundColor: theme.palette.terminal.background,
                alignItems: 'flex-start',
                '& fieldset': {
                  borderColor: theme.palette.terminal.border,
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.terminal.cyan,
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.terminal.green,
                },
              },
              '& .MuiInputLabel-root': {
                color: theme.palette.terminal.textSecondary,
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: theme.palette.terminal.cyan,
              },
              '& .MuiFormHelperText-root': {
                color: theme.palette.terminal.textSecondary,
                mx: 0,
              },
            }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: { xs: 'stretch', sm: 'center' },
              gap: 1.5,
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.1}>
              <Button
                type="submit"
                variant="outlined"
                startIcon={<AutoFixHigh />}
                disabled={isLoading}
                sx={{
                  alignSelf: { xs: 'stretch', sm: 'flex-start' },
                  borderColor: theme.palette.terminal.cyan,
                  color: theme.palette.terminal.cyan,
                  px: 2.4,
                  py: 1,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  '&:hover': {
                    borderColor: theme.palette.terminal.green,
                    color: theme.palette.terminal.green,
                    backgroundColor: `${theme.palette.terminal.green}10`,
                  },
                  '&.Mui-disabled': {
                    borderColor: theme.palette.terminal.border,
                    color: theme.palette.terminal.textSecondary,
                  },
                }}
              >
                {isLoading ? content.loadingLabel : content.submitLabel}
              </Button>

              {isLoading ? (
                <Button
                  type="button"
                  variant="text"
                  startIcon={<CancelOutlined />}
                  onClick={handleCancel}
                  sx={{
                    alignSelf: { xs: 'stretch', sm: 'flex-start' },
                    color: theme.palette.terminal.red,
                    px: 2,
                    py: 1,
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    '&:hover': {
                      backgroundColor: `${theme.palette.terminal.red}10`,
                    },
                  }}
                >
                  {content.cancelLabel}
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="text"
                  startIcon={<RestartAlt />}
                  disabled={!jobDescription && !error && !result}
                  onClick={handleReset}
                  sx={{
                    alignSelf: { xs: 'stretch', sm: 'flex-start' },
                    color: theme.palette.terminal.textSecondary,
                    px: 2,
                    py: 1,
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    '&:hover': {
                      color: theme.palette.terminal.red,
                      backgroundColor: `${theme.palette.terminal.red}10`,
                    },
                    '&.Mui-disabled': {
                      color: `${theme.palette.terminal.textSecondary}88`,
                    },
                  }}
                >
                  {content.resetLabel}
                </Button>
              )}

              <Button
                type="button"
                variant="text"
                disabled={isLoading}
                onClick={handleUseSample}
                sx={{
                  alignSelf: { xs: 'stretch', sm: 'flex-start' },
                  color: theme.palette.terminal.textSecondary,
                  px: 2,
                  py: 1,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  '&:hover': {
                    color: theme.palette.terminal.cyan,
                    backgroundColor: `${theme.palette.terminal.cyan}10`,
                  },
                }}
              >
                {content.sampleLabel}
              </Button>
            </Stack>
          </Box>

          {isLoading ? (
            <Stack
              direction="row"
              spacing={1.2}
              alignItems="center"
              sx={{
                px: 1,
                py: 1,
                border: `1px solid ${theme.palette.terminal.border}`,
                borderRadius: 1.5,
                backgroundColor: `${theme.palette.terminal.background}AA`,
              }}
            >
              <CircularProgress size={18} sx={{ color: theme.palette.terminal.green }} />
              <Typography
                sx={{
                  color: theme.palette.terminal.textSecondary,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.06em',
                }}
              >
                {content.processingStatuses[activeStatusIndex] ?? content.loadingLabel}
              </Typography>
            </Stack>
          ) : null}

          {error ? (
            <Alert
              severity="error"
              sx={{
                backgroundColor: `${theme.palette.terminal.red}14`,
                color: theme.palette.terminal.text,
                border: `1px solid ${theme.palette.terminal.red}66`,
                '& .MuiAlert-icon': {
                  color: theme.palette.terminal.red,
                },
              }}
            >
              {error}
            </Alert>
          ) : null}

          {!error && !isLoading && !result ? (
            <Box
              sx={{
                p: 2.2,
                border: `1px dashed ${theme.palette.terminal.border}`,
                borderRadius: 2,
                backgroundColor: `${theme.palette.terminal.background}BB`,
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.terminal.text,
                  fontWeight: 600,
                  mb: 0.75,
                }}
              >
                {content.emptyTitle}
              </Typography>
              <Typography sx={{ color: theme.palette.terminal.textSecondary, lineHeight: 1.75 }}>
                {content.emptyBody}
              </Typography>
            </Box>
          ) : null}

          {result ? (
            <Box
              sx={{
                p: { xs: 2.2, md: 2.8 },
                border: `1px solid ${theme.palette.terminal.border}`,
                borderRadius: 2.5,
                background: `radial-gradient(circle at top right, ${theme.palette.terminal.cyan}12 0%, transparent 28%), ${theme.palette.terminal.background}`,
              }}
            >
              <Stack spacing={2.4}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1.5,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: theme.palette.terminal.textSecondary,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {content.matchScoreLabel}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.terminal.text,
                        fontSize: { xs: '2rem', md: '2.4rem' },
                        lineHeight: 1,
                        fontWeight: 700,
                      }}
                    >
                      {result.matchScore}%
                    </Typography>
                    <Box
                      sx={{
                        mt: 1.2,
                        width: { xs: '100%', sm: 220 },
                        height: 8,
                        borderRadius: 999,
                        backgroundColor: theme.palette.terminal.header,
                        border: `1px solid ${theme.palette.terminal.border}`,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: `${result.matchScore}%`,
                          height: '100%',
                          backgroundColor:
                            result.matchScore >= 75
                              ? theme.palette.terminal.green
                              : result.matchScore >= 50
                                ? theme.palette.terminal.yellow
                                : theme.palette.terminal.red,
                        }}
                      />
                    </Box>
                  </Box>

                  <Stack spacing={1} alignItems={{ xs: 'flex-start', sm: 'flex-end' }}>
                    <Box
                      sx={{
                        px: 1.2,
                        py: 0.7,
                        border: `1px solid ${theme.palette.terminal.green}55`,
                        borderRadius: 999,
                        color: theme.palette.terminal.green,
                        backgroundColor: `${theme.palette.terminal.green}12`,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {content.recruiterViewLabel}
                    </Box>
                    <Typography
                      sx={{
                        color: theme.palette.terminal.textSecondary,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                      }}
                    >
                      {content.confidenceLabel}: {content.confidenceLevels[result.confidenceLevel]}
                    </Typography>
                  </Stack>
                </Box>

                <Box>
                  <Typography sx={{ color: theme.palette.terminal.text, fontWeight: 600, mb: 0.8 }}>
                    {content.overallSummaryLabel}
                  </Typography>
                  <Typography sx={{ color: theme.palette.terminal.textSecondary, lineHeight: 1.8 }}>
                    {result.overallSummary}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography sx={{ color: theme.palette.terminal.cyan, fontWeight: 600, mb: 1 }}>
                      {content.strongMatchesLabel}
                    </Typography>
                    <Stack component="ul" spacing={0.8} sx={{ m: 0, pl: 2.2 }}>
                      {result.strongMatches.map((item) => (
                        <Typography
                          key={item}
                          component="li"
                          sx={{ color: theme.palette.terminal.textSecondary, lineHeight: 1.7 }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>

                  <Box>
                    <Typography sx={{ color: theme.palette.terminal.yellow, fontWeight: 600, mb: 1 }}>
                      {content.potentialGapsLabel}
                    </Typography>
                    <Stack component="ul" spacing={0.8} sx={{ m: 0, pl: 2.2 }}>
                      {result.potentialGaps.map((item) => (
                        <Typography
                          key={item}
                          component="li"
                          sx={{ color: theme.palette.terminal.textSecondary, lineHeight: 1.7 }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                </Box>

                <Box>
                  <Typography sx={{ color: theme.palette.terminal.text, fontWeight: 600, mb: 0.8 }}>
                    {content.recruiterSummaryLabel}
                  </Typography>
                  <Typography sx={{ color: theme.palette.terminal.textSecondary, lineHeight: 1.8 }}>
                    {result.recruiterSummary}
                  </Typography>
                  <Button
                    type="button"
                    variant="text"
                    startIcon={<ContentCopy />}
                    onClick={handleCopySummary}
                    sx={{
                      mt: 1.2,
                      px: 0,
                      color: theme.palette.terminal.cyan,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: theme.palette.terminal.green,
                      },
                    }}
                  >
                    {hasCopiedSummary ? content.copiedLabel : content.copySummaryLabel}
                  </Button>
                </Box>

                {result.missingContext.length > 0 ? (
                  <Box>
                    <Typography sx={{ color: theme.palette.terminal.text, fontWeight: 600, mb: 1 }}>
                      {content.missingContextLabel}
                    </Typography>
                    <Stack component="ul" spacing={0.8} sx={{ m: 0, pl: 2.2 }}>
                      {result.missingContext.map((item) => (
                        <Typography
                          key={item}
                          component="li"
                          sx={{ color: theme.palette.terminal.textSecondary, lineHeight: 1.7 }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                ) : null}

                <Box>
                  <Typography sx={{ color: theme.palette.terminal.text, fontWeight: 600, mb: 1.4 }}>
                    {content.relevantTechnologiesLabel}
                  </Typography>
                  {[
                    {
                      label: content.matchedTechnologiesLabel,
                      items: result.technologyMatches.matched,
                      color: theme.palette.terminal.green,
                    },
                    {
                      label: content.adjacentTechnologiesLabel,
                      items: result.technologyMatches.adjacent,
                      color: theme.palette.terminal.cyan,
                    },
                    {
                      label: content.missingTechnologiesLabel,
                      items: result.technologyMatches.missing,
                      color: theme.palette.terminal.yellow,
                    },
                  ].map((group) =>
                    group.items.length > 0 ? (
                      <Box key={group.label} sx={{ mb: 1.4 }}>
                        <Typography
                          sx={{
                            color: group.color,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.76rem',
                            letterSpacing: '0.08em',
                            mb: 0.8,
                            textTransform: 'uppercase',
                          }}
                        >
                          {group.label}
                        </Typography>
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                          {group.items.map((item) => (
                            <Chip
                              key={item}
                              label={item}
                              variant="outlined"
                              sx={{
                                color: group.color,
                                borderColor: theme.palette.terminal.border,
                                backgroundColor: `${theme.palette.terminal.header}A6`,
                                '& .MuiChip-label': {
                                  px: 1.1,
                                },
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    ) : null,
                  )}
                </Box>
              </Stack>
            </Box>
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
}
