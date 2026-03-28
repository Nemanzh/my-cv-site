'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  TextField,
  useTheme,
} from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import HighlightedText, { highlightFirstLetters } from './HighlightedText';
import { useLocale } from 'next-intl';

export default function ContactUs() {
  const theme = useTheme();
  const locale = useLocale();
  const isSrCyrl = locale === 'sr-Cyrl';
  const isSr = locale === 'sr' || isSrCyrl;
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
  });

  const content = isSr
    ? {
        title: 'KONTAKTIRAJTE NAS',
        subtitle:
          'Imate ideju, postojeci proizvod za redizajn ili vam treba tehnicki partner? Posaljite kratak brief.',
        primary: 'Posaljite upit',
        formTitle: 'PROJECT BRIEF',
        placeholders: {
          name: 'Ime i prezime',
          email: 'Email',
          company: 'Kompanija',
          project: 'Opis projekta / ciljevi',
          budget: 'Budzet (opseg)',
          timeline: 'Rok / zeljeni start',
        },
        success:
          'Upit je pripremljen. Otvoren je vas email klijent sa popunjenim podacima.',
      }
    : {
        title: 'CONTACT US',
        subtitle:
          'Have a new idea, an existing product to improve, or need a long-term technical partner? Send a short brief.',
        primary: 'Send inquiry',
        formTitle: 'PROJECT BRIEF',
        placeholders: {
          name: 'Full name',
          email: 'Email',
          company: 'Company',
          project: 'Project goals / scope',
          budget: 'Budget range',
          timeline: 'Timeline / preferred start',
        },
        success: 'Your inquiry draft is ready in your email client.',
      };

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      color: theme.palette.terminal.text,
      backgroundColor: theme.palette.terminal.header,
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
  };

  const handleChange =
    (key: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `[Project Inquiry] ${form.company || form.name || 'New lead'}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company}`,
        `Budget: ${form.budget}`,
        `Timeline: ${form.timeline}`,
        '',
        'Project brief:',
        form.project,
      ].join('\n'),
    );

    window.location.href = `mailto:contact@nemanzh.dev?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 2, sm: 3, md: 4 }, pb: { xs: 4, sm: 6 } }}
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
              p: { xs: 2, sm: 3, md: 4 },
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: { xs: 2, sm: 2.5 },
                color: theme.palette.terminal.text,
                fontSize: {
                  xs: '1.4rem',
                  sm: '1.9rem',
                  md: '2.3rem',
                  lg: '2.7rem',
                },
              }}
            >
              <HighlightedText
                text={content.title}
                highlightIndices={highlightFirstLetters(content.title)}
                highlightColor={theme.palette.terminal.cyan}
              />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.terminal.textSecondary,
                maxWidth: '780px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: { xs: 3, sm: 4 },
              }}
            >
              {content.subtitle}
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: '880px',
                mx: 'auto',
                mb: { xs: 3, sm: 4 },
                p: { xs: 2, sm: 3 },
                backgroundColor: theme.palette.terminal.header,
                border: `1px solid ${theme.palette.terminal.border}`,
                borderRadius: 1,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  display: 'block',
                  color: theme.palette.terminal.textSecondary,
                  mb: 1.5,
                }}
              >
                {content.formTitle}
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: { xs: 1.5, sm: 2 },
                }}
              >
                <TextField
                  required
                  label={content.placeholders.name}
                  value={form.name}
                  onChange={handleChange('name')}
                  size="small"
                  sx={fieldSx}
                />
                <TextField
                  required
                  type="email"
                  label={content.placeholders.email}
                  value={form.email}
                  onChange={handleChange('email')}
                  size="small"
                  sx={fieldSx}
                />
                <TextField
                  label={content.placeholders.company}
                  value={form.company}
                  onChange={handleChange('company')}
                  size="small"
                  sx={fieldSx}
                />
                <TextField
                  label={content.placeholders.budget}
                  value={form.budget}
                  onChange={handleChange('budget')}
                  size="small"
                  sx={fieldSx}
                />
                <TextField
                  label={content.placeholders.timeline}
                  value={form.timeline}
                  onChange={handleChange('timeline')}
                  size="small"
                  sx={{ ...fieldSx, gridColumn: { xs: '1 / -1', md: '1 / 3' } }}
                />
                <TextField
                  required
                  multiline
                  minRows={4}
                  label={content.placeholders.project}
                  value={form.project}
                  onChange={handleChange('project')}
                  sx={{ ...fieldSx, gridColumn: { xs: '1 / -1', md: '1 / 3' } }}
                />
              </Box>

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button
                  type="submit"
                  startIcon={<Email />}
                  sx={{
                    backgroundColor: theme.palette.terminal.cyan,
                    color: theme.palette.terminal.background,
                    border: `1px solid ${theme.palette.terminal.cyan}`,
                    textTransform: 'none',
                    px: 2.5,
                    py: 1,
                    '&:hover': {
                      backgroundColor: theme.palette.terminal.header,
                      color: theme.palette.terminal.cyan,
                    },
                  }}
                >
                  {content.primary}
                </Button>
              </Box>

              {submitted ? (
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.terminal.green, mt: 1.5 }}
                >
                  {content.success}
                </Typography>
              ) : null}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
