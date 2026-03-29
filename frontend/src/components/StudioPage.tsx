'use client';

import { ArrowOutward, Email, GitHub, LinkedIn } from '@mui/icons-material';
import {
  Box,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useMessages } from 'next-intl';
import { useEffect, useState } from 'react';
import VisualStudioWidget from './VisualStudioWidget';

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  impact: string;
  stack: string[];
};

type ProjectItem = {
  title: string;
  client?: string;
  context?: string;
  description: string;
  impact?: string;
  stack?: string[];
  href?: string;
  linkLabel?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

type CredentialItem = {
  category: string;
  title: string;
  meta: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

type StudioContent = {
  nav: Record<string, string>;
  hero: {
    lead: string;
    emailValue: string;
    socials: {
      github: string;
      linkedin: string;
    };
  };
  about: {
    kicker: string;
    paragraphs: string[];
  };
  experience: {
    kicker: string;
    items: ExperienceItem[];
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    items: ProjectItem[];
  };
  credentials: {
    kicker: string;
    title: string;
    intro: string;
    items: CredentialItem[];
  };
};

const NAV_ITEMS = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'credentials', href: '#credentials' },
] as const;

function SidebarNavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  const theme = useTheme();

  return (
    <MuiLink
      href={href}
      aria-current={active ? 'page' : undefined}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        width: 'fit-content',
        color: active ? theme.palette.terminal.text : theme.palette.terminal.textSecondary,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.82rem',
        fontWeight: active ? 600 : 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        transition: 'color 0.2s ease, transform 0.2s ease',
        '&::before': {
          content: '""',
          display: 'block',
          width: active ? 64 : 28,
          height: '1px',
          backgroundColor: active ? theme.palette.terminal.text : theme.palette.terminal.border,
          transition: 'width 0.2s ease, background-color 0.2s ease',
        },
        '&:hover': {
          color: theme.palette.terminal.cyan,
          transform: 'translateX(4px)',
          '&::before': {
            width: 64,
            backgroundColor: theme.palette.terminal.cyan,
          },
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.terminal.cyan}`,
          outlineOffset: 4,
          borderRadius: 6,
        },
      }}
    >
      {label}
    </MuiLink>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
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
      {children}
    </Typography>
  );
}

export default function StudioPage() {
  const theme = useTheme();
  const messages = useMessages() as { StudioPage: StudioContent };
  const content = messages.StudioPage;
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.href.slice(1))).filter(
      (section): section is HTMLElement => section !== null,
    );

    if (sections.length === 0) {
      return;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;

      const viewportHeight = window.innerHeight;
      const marker = viewportHeight * 0.32;
      let nextActive = sections[0].id;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= marker) {
          nextActive = section.id;
        }
      }

      const lastSection = sections[sections.length - 1];
      const lastRect = lastSection.getBoundingClientRect();
      const lastVisibleHeight = Math.max(
        0,
        Math.min(lastRect.bottom, viewportHeight) - Math.max(lastRect.top, 0),
      );
      const lastVisibleRatio =
        lastVisibleHeight / Math.max(1, Math.min(lastRect.height, viewportHeight));
      const scrollBottom = window.scrollY + viewportHeight;
      const pageBottom = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );

      // The final section can be too short to ever cross the top marker on large screens.
      if (
        lastVisibleRatio >= 0.45 ||
        pageBottom - scrollBottom <= Math.max(16, viewportHeight * 0.12)
      ) {
        nextActive = lastSection.id;
      }

      setActiveSection((current) => (current === nextActive ? current : nextActive));
    };

    const requestUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <Box component="main" sx={{ minHeight: '100vh', py: { xs: 5, lg: 0 } }}>
      <Container
        maxWidth={false}
        sx={{
          width: 'min(1180px, calc(100vw - 48px))',
          mx: 'auto',
          px: 0,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '390px minmax(0, 620px)' },
            justifyContent: 'space-between',
            gap: { xs: 8, lg: 10 },
          }}
        >
          <Box sx={{ minHeight: { lg: '100vh' } }}>
            <Box
              sx={{
                position: { xs: 'static', lg: 'fixed' },
                top: { lg: 0 },
                left: { lg: 'max(24px, calc((100vw - 1180px) / 2))' },
                width: { lg: '390px' },
                height: { lg: '100vh' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                py: { xs: 0, lg: 10 },
              }}
            >
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    color: theme.palette.terminal.text,
                    fontSize: { xs: '3.2rem', md: '4.7rem' },
                    lineHeight: 0.9,
                    letterSpacing: '-0.06em',
                  }}
                >
                  Nemanzh
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color: theme.palette.terminal.text,
                    fontSize: { xs: '1.25rem', md: '1.55rem' },
                    fontWeight: 600,
                  }}
                >
                  Software Studio
                </Typography>

                <Typography
                  sx={{
                    mt: 0.5,
                    color: theme.palette.terminal.text,
                    fontSize: { xs: '1.05rem', md: '1.2rem' },
                    fontWeight: 500,
                  }}
                >
                  Full-Stack Engineer
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: '26ch',
                    color: theme.palette.terminal.textSecondary,
                    fontSize: '1rem',
                    lineHeight: 1.75,
                  }}
                >
                  {content.hero.lead}
                </Typography>

                <Stack
                  component="nav"
                  aria-label="Section navigation"
                  spacing={2}
                  sx={{
                    display: { xs: 'none', lg: 'flex' },
                    mt: 8,
                  }}
                >
                  {NAV_ITEMS.map((item) => (
                    <SidebarNavLink
                      key={item.key}
                      href={item.href}
                      label={content.nav[item.key]}
                      active={activeSection === item.href.slice(1)}
                    />
                  ))}
                </Stack>
              </Box>

              <Stack
                direction="row"
                spacing={1.8}
                sx={{
                  mt: { xs: 4, lg: 0 },
                  color: theme.palette.terminal.textSecondary,
                }}
              >
                <MuiLink
                  href="https://github.com/nemanjaradulovic"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={content.hero.socials.github}
                  sx={{
                    display: 'inline-flex',
                    borderRadius: 999,
                    '&:hover': { color: theme.palette.terminal.cyan },
                    '&:focus-visible': {
                      outline: `2px solid ${theme.palette.terminal.cyan}`,
                      outlineOffset: 4,
                    },
                  }}
                >
                  <GitHub sx={{ fontSize: '1.55rem' }} />
                </MuiLink>
                <MuiLink
                  href="https://www.linkedin.com/in/nemanja-radulovic/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={content.hero.socials.linkedin}
                  sx={{
                    display: 'inline-flex',
                    borderRadius: 999,
                    '&:hover': { color: theme.palette.terminal.cyan },
                    '&:focus-visible': {
                      outline: `2px solid ${theme.palette.terminal.cyan}`,
                      outlineOffset: 4,
                    },
                  }}
                >
                  <LinkedIn sx={{ fontSize: '1.55rem' }} />
                </MuiLink>
                <MuiLink
                  href={`mailto:${content.hero.emailValue}`}
                  aria-label={content.hero.emailValue}
                  sx={{
                    display: 'inline-flex',
                    borderRadius: 999,
                    '&:hover': { color: theme.palette.terminal.cyan },
                    '&:focus-visible': {
                      outline: `2px solid ${theme.palette.terminal.cyan}`,
                      outlineOffset: 4,
                    },
                  }}
                >
                  <Email sx={{ fontSize: '1.55rem' }} />
                </MuiLink>
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              pt: { xs: 0, lg: 10 },
              pb: { xs: 10, lg: 16 },
              display: 'grid',
              gap: { xs: 8, lg: 10 },
            }}
          >
            <Box
              component="section"
              id="about"
              sx={{
                scrollMarginTop: { xs: 88, lg: 100 },
              }}
            >
              <SectionLabel>{content.about.kicker}</SectionLabel>
              <Stack spacing={3}>
                {content.about.paragraphs.slice(0, 3).map((paragraph) => (
                  <Typography
                    key={paragraph}
                    sx={{
                      color: theme.palette.terminal.textSecondary,
                      fontSize: '1rem',
                      lineHeight: 1.95,
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Box
              component="section"
              id="experience"
              sx={{
                scrollMarginTop: { xs: 88, lg: 100 },
              }}
            >
              <SectionLabel>{content.experience.kicker}</SectionLabel>

              <Stack spacing={1.2}>
                {content.experience.items.map((item) => (
                  <Box
                    key={`${item.company}-${item.period}`}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: '120px minmax(0, 1fr)' },
                      gap: { xs: 1.4, md: 3.2 },
                      px: { xs: 0, sm: 2 },
                      py: { xs: 1.5, sm: 2 },
                      borderRadius: 3,
                      transition: 'background-color 0.18s ease, transform 0.18s ease',
                      '&:hover': {
                        backgroundColor: `${theme.palette.terminal.header}88`,
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: theme.palette.terminal.textSecondary,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        pt: { md: 0.45 },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.period}
                    </Typography>

                    <Box>
                      <Typography
                        sx={{
                          color: theme.palette.terminal.text,
                          fontSize: { xs: '1rem', md: '1.08rem' },
                          fontWeight: 600,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.role} · {item.company}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          color: theme.palette.terminal.textSecondary,
                          lineHeight: 1.85,
                        }}
                      >
                        {item.summary}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1.25,
                          color: theme.palette.terminal.textSecondary,
                          lineHeight: 1.85,
                        }}
                      >
                        {item.impact}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap"
                        sx={{ mt: 1.75 }}
                      >
                        {item.stack.map((label) => (
                          <Box
                            key={label}
                            sx={{
                              border: `1px solid ${theme.palette.terminal.border}`,
                              borderRadius: 999,
                              px: 1.05,
                              py: 0.45,
                              color: theme.palette.terminal.cyan,
                              fontSize: '0.8rem',
                              lineHeight: 1.2,
                            }}
                          >
                            {label}
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box
              component="section"
              id="projects"
              sx={{
                scrollMarginTop: { xs: 88, lg: 100 },
              }}
            >
              <SectionLabel>{content.projects.kicker}</SectionLabel>

              <Typography
                sx={{
                  color: theme.palette.terminal.text,
                  fontSize: { xs: '1.3rem', md: '1.55rem' },
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
              >
                {content.projects.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: theme.palette.terminal.textSecondary,
                  lineHeight: 1.85,
                }}
              >
                {content.projects.intro}
              </Typography>

              <Box
                sx={{
                  mt: 3.5,
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: { xs: 2, md: 2.4 },
                }}
              >
                {content.projects.items.map((item) => {
                  const href =
                    item.href ??
                    (item.secondaryHref?.startsWith('http') ? item.secondaryHref : item.primaryHref);
                  const linkLabel =
                    item.linkLabel ??
                    (href === item.secondaryHref ? item.secondaryLabel : item.primaryLabel) ??
                    'View site';
                  const supportingLabel = [item.context, item.client].filter(Boolean).join(' · ');
                  const isExternalHref = Boolean(href?.startsWith('http'));

                  return (
                    <MuiLink
                      key={`${item.title}-${href ?? item.description}`}
                      href={href}
                      target={isExternalHref ? '_blank' : undefined}
                      rel={isExternalHref ? 'noreferrer' : undefined}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        p: { xs: 2, sm: 2.4 },
                        border: `1px solid ${theme.palette.terminal.border}`,
                        borderRadius: 3,
                        backgroundColor: theme.palette.terminal.header,
                        textDecoration: 'none',
                        transition: 'border-color 0.18s ease, transform 0.18s ease, background-color 0.18s ease',
                        '&:hover': {
                          borderColor: theme.palette.terminal.cyan,
                          transform: 'translateY(-2px)',
                          backgroundColor: `${theme.palette.terminal.header}DD`,
                        },
                        '&:focus-visible': {
                          outline: `2px solid ${theme.palette.terminal.cyan}`,
                          outlineOffset: 4,
                        },
                      }}
                    >
                      {supportingLabel ? (
                        <Typography
                          sx={{
                            color: theme.palette.terminal.green,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.73rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {supportingLabel}
                        </Typography>
                      ) : null}

                      <Typography
                        sx={{
                          mt: supportingLabel ? 1.2 : 0,
                          color: theme.palette.terminal.text,
                          fontSize: { xs: '1rem', md: '1.08rem' },
                          fontWeight: 600,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1.1,
                          color: theme.palette.terminal.textSecondary,
                          lineHeight: 1.75,
                        }}
                      >
                        {item.description}
                      </Typography>

                      {item.impact ? (
                        <Typography
                          sx={{
                            mt: 1.15,
                            color: theme.palette.terminal.textSecondary,
                            lineHeight: 1.75,
                          }}
                        >
                          {item.impact}
                        </Typography>
                      ) : null}

                      {href ? (
                        <Stack
                          direction="row"
                          spacing={0.8}
                          alignItems="center"
                          sx={{
                            mt: 'auto',
                            pt: 2,
                            color: theme.palette.terminal.cyan,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.82rem',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}
                        >
                          <Typography component="span" sx={{ font: 'inherit' }}>
                            {linkLabel}
                          </Typography>
                          <ArrowOutward sx={{ fontSize: '1rem' }} />
                        </Stack>
                      ) : null}
                    </MuiLink>
                  );
                })}
              </Box>
            </Box>

            <Box
              component="section"
              id="credentials"
              sx={{
                scrollMarginTop: { xs: 88, lg: 100 },
              }}
            >
              <SectionLabel>{content.credentials.kicker}</SectionLabel>

              <Typography
                sx={{
                  color: theme.palette.terminal.text,
                  fontSize: { xs: '1.3rem', md: '1.55rem' },
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
              >
                {content.credentials.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: theme.palette.terminal.textSecondary,
                  lineHeight: 1.85,
                }}
              >
                {content.credentials.intro}
              </Typography>

              <Box
                sx={{
                  mt: 3.5,
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: { xs: 2, md: 2.4 },
                }}
              >
                {content.credentials.items.map((item) => {
                  const isExternalHref = Boolean(item.href?.startsWith('http'));
                  const cardBaseSx = {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    p: { xs: 2, sm: 2.4 },
                    border: `1px solid ${theme.palette.terminal.border}`,
                    borderRadius: 3,
                    backgroundColor: theme.palette.terminal.header,
                    textDecoration: 'none',
                    transition:
                      'border-color 0.18s ease, transform 0.18s ease, background-color 0.18s ease',
                  };
                  const cardSx = item.href
                    ? {
                        ...cardBaseSx,
                        '&:hover': {
                          borderColor: theme.palette.terminal.cyan,
                          transform: 'translateY(-2px)',
                          backgroundColor: `${theme.palette.terminal.header}DD`,
                        },
                        '&:focus-visible': {
                          outline: `2px solid ${theme.palette.terminal.cyan}`,
                          outlineOffset: 4,
                        },
                      }
                    : cardBaseSx;

                  const cardContent = (
                    <>
                      <Typography
                        sx={{
                          color: theme.palette.terminal.green,
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.73rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.category}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1.15,
                          color: theme.palette.terminal.text,
                          fontSize: { xs: '1rem', md: '1.08rem' },
                          fontWeight: 600,
                          lineHeight: 1.55,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.9,
                          color: theme.palette.terminal.cyan,
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.meta}
                      </Typography>

                      {item.description ? (
                        <Typography
                          sx={{
                            mt: 1.1,
                            color: theme.palette.terminal.textSecondary,
                            lineHeight: 1.75,
                          }}
                        >
                          {item.description}
                        </Typography>
                      ) : null}

                      {item.href ? (
                        <Stack
                          direction="row"
                          spacing={0.8}
                          alignItems="center"
                          sx={{
                            mt: 'auto',
                            pt: 2,
                            color: theme.palette.terminal.cyan,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.82rem',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}
                        >
                          <Typography component="span" sx={{ font: 'inherit' }}>
                            {item.linkLabel ?? 'View item'}
                          </Typography>
                          <ArrowOutward sx={{ fontSize: '1rem' }} />
                        </Stack>
                      ) : null}
                    </>
                  );

                  if (item.href) {
                    return (
                      <MuiLink
                        key={`${item.category}-${item.title}`}
                        href={item.href}
                        target={isExternalHref ? '_blank' : undefined}
                        rel={isExternalHref ? 'noreferrer' : undefined}
                        sx={cardSx}
                      >
                        {cardContent}
                      </MuiLink>
                    );
                  }

                  return (
                    <Box key={`${item.category}-${item.title}`} sx={cardSx}>
                      {cardContent}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <VisualStudioWidget />
    </Box>
  );
}
