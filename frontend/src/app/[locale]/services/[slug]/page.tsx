import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';

type ServiceContent = {
  title: string;
  subtitle: string;
  outcomes: string[];
};

const SERVICES: Record<string, { en: ServiceContent; sr: ServiceContent }> = {
  'microsoft-dotnet-development': {
    en: {
      title: 'Microsoft .NET Development',
      subtitle:
        'Architecture, API delivery, and long-term maintainability for business-critical systems.',
      outcomes: [
        'Domain-driven backend design',
        'Reliable API performance and test coverage',
        'Production-ready CI/CD and observability',
      ],
    },
    sr: {
      title: 'Microsoft .NET Razvoj',
      subtitle:
        'Arhitektura, API isporuka i dugorocna odrzivost za poslovno-kriticne sisteme.',
      outcomes: [
        'Jasan domenski model',
        'Pouzdane API performanse i testovi',
        'Production-ready CI/CD i observability',
      ],
    },
  },
  'web-platforms-full-stack': {
    en: {
      title: 'Web Platforms & Full-Stack Delivery',
      subtitle: 'Next.js frontends with robust backend services and measurable release cadence.',
      outcomes: [
        'Faster feature shipping with predictable milestones',
        'Scalable frontend and backend architecture',
        'Clear ownership and release process',
      ],
    },
    sr: {
      title: 'Web Platforme i Full-Stack Isporuka',
      subtitle: 'Next.js frontend uz stabilan backend i merljiv ritam isporuke.',
      outcomes: [
        'Brza isporuka funkcionalnosti po milestone-ovima',
        'Skalabilna frontend i backend arhitektura',
        'Jasan ownership i release proces',
      ],
    },
  },
  'custom-business-software': {
    en: {
      title: 'Custom Business Software',
      subtitle: 'Internal systems and tools that remove operational friction and manual work.',
      outcomes: [
        'Workflow automation and reduced repetitive tasks',
        'Clear reporting and data visibility',
        'Stable operations with maintainable code',
      ],
    },
    sr: {
      title: 'Poslovni Softver po Meri',
      subtitle: 'Interni sistemi i alati koji smanjuju operativni frikciju i manuelni rad.',
      outcomes: [
        'Automatizacija procesa i manje ponavljanja',
        'Jasni izvestaji i bolja vidljivost podataka',
        'Stabilne operacije i odrziv kod',
      ],
    },
  },
  'integrations-modernization': {
    en: {
      title: 'Integrations & Modernization',
      subtitle: 'Secure integration programs and phased legacy modernization with low delivery risk.',
      outcomes: [
        'Reliable CRM/ERP/payment integrations',
        'Incremental legacy migration with minimal disruption',
        'Improved system performance and maintainability',
      ],
    },
    sr: {
      title: 'Integracije i Modernizacija',
      subtitle: 'Sigurne integracije i postepena modernizacija legacy sistema uz mali rizik.',
      outcomes: [
        'Pouzdane CRM/ERP/platne integracije',
        'Postepena migracija bez prekida rada',
        'Bolje performanse i lakse odrzavanje',
      ],
    },
  },
};

function getService(locale: string, slug: string) {
  const service = SERVICES[slug];
  if (!service) return null;
  return locale === 'en' ? service.en : service.sr;
}

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getService(locale, slug);
  if (!content) return {};

  return {
    title: `${content.title} | Nemanzh Software Studio`,
    description: content.subtitle,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = getService(locale, slug);
  if (!content) {
    notFound();
  }

  return (
    <Box sx={{ py: { xs: 3, sm: 5 }, minHeight: '70vh' }}>
      <Container maxWidth="lg">
        <Card
          sx={{
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
            <Typography variant="h2" component="h1" sx={{ mb: 2, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
              {content.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              {content.subtitle}
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {content.outcomes.map((item) => (
                <Typography key={item} component="li" variant="body1" sx={{ mb: 1 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
