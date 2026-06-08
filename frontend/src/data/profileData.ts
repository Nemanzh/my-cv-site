export interface RoleFitResponse {
  matchScore: number;
  confidenceLevel: 'high' | 'medium' | 'low';
  overallSummary: string;
  strongMatches: string[];
  potentialGaps: string[];
  missingContext: string[];
  recruiterSummary: string;
  relevantTechnologies: string[];
  technologyMatches: {
    matched: string[];
    adjacent: string[];
    missing: string[];
  };
}

export const profileData = {
  name: 'Nemanja Radulovic',
  role: 'Full Stack Developer / Mid-Senior Developer',
  location: 'Serbia',
  primaryFocus: [
    '.NET',
    'C#',
    'React',
    'Next.js',
    'TypeScript',
    'Azure',
    'SQL Server',
    'PostgreSQL',
    'Strapi',
    'Node.js',
  ],
  experienceSummary: {
    dotnetYears: 'Around 6 years of professional .NET/C# experience',
    azureYears: 'Around 4 years of Azure-related experience',
    teamRange: 'Experience in teams ranging from small 5-person teams to larger 50-person teams',
    delivery: [
      'Experience with React, Next.js, Angular, TypeScript, Node.js, Strapi, SQL Server, PostgreSQL, Redis, Docker, AWS, Azure',
      'Experience working in Agile/Scrum and Kanban environments',
    ],
  },
  companiesAndProjects: [
    {
      name: 'Quadro Consulting',
      summary: [
        'Worked in a large team of around 50 people',
        'Kanban workflow',
        'Worked on SSO implementation across frontend and backend applications',
        'Used Angular, React, backend services, Jira, Bitbucket, Harness AI, and DevOps processes',
      ],
    },
    {
      name: 'Intersect',
      summary: [
        'Worked in a 10-person product team: 5 developers, 1 designer, 2 testers, 1 product owner, 1 solution architect',
        'Mostly used GitHub',
        'Worked on Members Area / voting platform',
        'Used Next.js, React, TypeScript, Strapi, PostgreSQL, AWS services, SQS/Lambda, Cognito, HubSpot, Stripe, Web3Auth, and Docker-related workflows',
      ],
    },
    {
      name: 'Insicon',
      summary: [
        'Worked in teams from 5 to 30 people',
        'Worked with C#/.NET, Angular, SQL Server',
        'Improved performance and maintainability of business applications',
        'Worked on insurance and enterprise software solutions',
      ],
    },
    {
      name: 'Saga',
      summary: [
        'Worked in a 7-person team with collaboration across other teams',
        'Used C#/.NET, Angular, SQL Server, TFS',
        'Worked in Agile/Scrum environment',
        'Participated in backend and frontend development, integrations, and enterprise application maintenance',
      ],
    },
    {
      name: 'Deluxe.com',
      summary: [
        'American company providing business services, payments, marketing, checks, cloud solutions, and financial technology services for small businesses, enterprises, and financial institutions',
      ],
    },
    {
      name: 'Gov.Tools',
      summary: [
        'Digital public-service / government tooling project',
        'Helps users interact with public-sector or government-related tools and services',
      ],
    },
  ],
  skills: {
    backend: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'REST APIs',
      'SQL Server',
      'PostgreSQL',
      'Redis',
      'Entity Framework',
      'Node.js',
      'Strapi',
    ],
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Angular',
      'Material UI',
      'Responsive UI',
    ],
    cloudAndDevOps: [
      'Azure',
      'AWS',
      'Docker',
      'AWS SQS',
      'AWS Lambda',
      'AWS Cognito',
      'Harness',
      'Bitbucket',
      'GitHub',
      'TFS',
      'Jira',
    ],
    architectureAndPractices: [
      'Clean Architecture',
      'SOLID',
      'Microservices',
      'API integrations',
      'Authentication and authorization',
      'SSO',
      'OAuth / OpenID Connect',
      'Agile / Scrum',
      'Kanban',
      'Code reviews',
      'Performance optimization',
    ],
  },
} as const;
