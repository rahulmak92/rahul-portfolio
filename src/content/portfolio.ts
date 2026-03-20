export const siteLinks = {
  resumePdf: '/RahulMakwanaAIEngineer.pdf',
  calendly: 'https://calendly.com/r-makwana92/talk-to-rahul',
} as const;

export const hero = {
  headline: 'Founding full-stack AI engineer.',
  subheading:
    'Document intelligence and audit workflows, from architecture through production.',
  ctaPrimary: 'Get in touch',
  ctaSecondary: 'Download resume',
  ctaCalendly: 'Book time with me',
  photoBadge: 'Founding engineer',
};

export const proofAtGlance = {
  role: 'Founding full-stack AI engineer at Tellen (2025–present). Previously senior software developer and AI/ML lead at Antylia Scientific (2016–2024).',
  focus:
    'Applied AI products, document intelligence, workflow automation, audit/accounting integrations, and Azure cloud delivery.',
  proofPoints: [
    '9+ years shipping production software—platform work that became operationally critical and multi-client applied AI.',
    'Products across ~9–10 clients (pilot and production), typically ~15–150 users per client.',
    'End-to-end ownership: releases, monitoring, defect resolution, client validation, and customer-facing technical conversations.',
  ],
};

export const tellenContextLine =
  'Shipped from prototype through pilot and production—~9–10 clients, ~15–150 users each. Owned releases, monitoring, and client validation.';

export const builtSection = {
  kicker: "What I've built",
  intro:
    'Two products at Tellen, one platform at Antylia—each in production with real users.',
};

export const selectedWorkCases = [
  {
    id: 'footnotes',
    title:
      'Financial statement footnote extraction, review UI, and internal consistency checking',
    summary:
      'Extract footnotes from filings, tie them to the PDF, and run internal consistency checks before sign-off.',
    diagramVariant: 'horizontal' as const,
    diagramSteps: [
      'Source PDF',
      'Ingest',
      'Footnote store',
      'Review UI',
      'Consistency checks',
    ],
    diagramCaption: 'Typical path from filing to reviewed output',
    problem:
      'Review lived in PDFs and spreadsheets—slow to navigate and hard to trace back to source.',
    built:
      'Document intelligence + OCR, review UI with PDF anchors, markup/versioning, consistency engine across the filing.',
    difficult:
      'Filings vary in layout; bad extractions must surface immediately.',
    ownership:
      'Extraction, data model, PDF linkage, consistency rules, merge/review—shipped with pilot and production feedback.',
    result:
      'Became the backbone for document-heavy review in rollout—not a demo.',
  },
  {
    id: 'substantive',
    title: 'Substantive testing: samples, evidence, and traceable conclusions',
    summary:
      'Run auditor-defined tests over samples and docs; pass/fail/exception with evidence tied to conclusions.',
    diagramVariant: 'horizontal' as const,
    diagramSteps: [
      'Test definitions',
      'Samples & docs',
      'Ingest',
      'Jobs',
      'Results + evidence',
    ],
    diagramCaption: 'End-to-end path from assertion to evidence',
    problem: 'Manual read-throughs and brittle doc-to-sample matching.',
    built:
      'Models tests, samples, docs, assertions; ingests, matches, runs per-sample/per-attribute jobs; evidence, conclusions, exceptions.',
    difficult:
      'Assertions don\'t map one-to-one every time—exceptions need a clear "why."',
    ownership:
      'Core architecture and build through early production; teammate scaled deploy later.',
    result: 'Second major production surface alongside footnotes.',
  },
  {
    id: 'calibration',
    title:
      'Calibration management platform for regulated lab and manufacturing operations',
    summary:
      'Greenfield platform for ISO/A2LA-style calibration—40+ staff, operationally critical, cost and throughput in ops reporting.',
    diagramVariant: 'vertical' as const,
    diagramSteps: [
      'Assets / instruments',
      'Calibration records',
      'Compliance & reporting',
    ],
    diagramCaption: 'Operational path from floor to audit trail',
    problem:
      'Fragmented manual steps; audits and production need one system of record.',
    built:
      'End-to-end calibration workflows; 40+ daily users. Program tied to ~43% cost reduction and ~33% production lift in business metrics.',
    difficult:
      'Errors show up in audits and on the floor; offshore coordination with uptime pressure.',
    ownership:
      'Architecture through years of production; led four offshore devs, two testers; mentored juniors/interns.',
    result:
      'Critical path for regulated ops; zero unplanned downtime on core production software over five years.',
  },
];

export const experienceBlocks = [
  {
    id: 'tellen',
    company: 'Tellen',
    role: 'Founding Full-Stack AI Engineer',
    period: 'Jan 2025 – Present',
    bullets: [
      'Joined at founding to design and ship applied AI products for audit and accounting workflows.',
      'Own delivery end to end: architecture, code review, releases, deployment monitoring, and defect triage.',
      'Technical conversations with customers—demos, requirements, and support.',
      'Coordinate distributed engineering (offshore developers and U.S. contractors) with final engineering accountability.',
      'Products span document intelligence, workflow automation, and integrations with accounting platforms.',
    ],
  },
  {
    id: 'antylia',
    company: 'Antylia Scientific',
    role: 'Senior Software Developer / AI·ML Lead · Software Developer',
    period: 'May 2016 – Dec 2024',
    bullets: [
      'Built a calibration management platform from scratch—40+ daily users, ISO/A2LA-aligned workflows, ~43% cost reduction and ~33% production lift.',
      'Owned TraceableLIVE end to end: cloud connectivity, ingestion, alerting, dashboards, and user-facing flows.',
      'Led four offshore developers and two testers; mentored juniors and an intern.',
      'Zero unplanned downtime on business-critical production software over five years.',
      'Broader scope: connected-device platforms, predictive/recommendation systems, Azure services, chatbot initiative.',
    ],
  },
];

export const deliveryNote =
  'Small reviewable changes, automated checks, and clear release ownership—augmented by AI-assisted tooling.';

export const skillsAndDomains = {
  kicker: 'Skills & domains',
  intro:
    'Three buckets—curated, not exhaustive. Everything listed here has been used in production or business-critical work.',
  buckets: [
    {
      title: 'Applied AI / LLM systems',
      body: 'LLM app design, RAG patterns, prompt/eval discipline, structured extraction, NLP, document parsing, OCR, Azure Document Intelligence, OpenAI APIs.',
    },
    {
      title: 'Software engineering',
      body: 'Python, FastAPI, C#, SQL, PostgreSQL, React, Next.js, TypeScript, API design, background jobs, workflow orchestration, testing and review.',
    },
    {
      title: 'Cloud, data & platforms',
      body: 'Azure (compute, storage, managed services), data modeling, pipelines, enterprise integrations, CI/CD, containers and orchestration.',
    },
  ],
};

export const storyArc = {
  title: 'Career arc',
  beats: [
    {
      year: '2016',
      title: 'Foundation',
      body: 'Calibration systems, IoT services, internal apps. Learned that reliability and measurable cost impact beat novelty.',
    },
    {
      year: '2021',
      title: 'Depth in ML & platforms',
      body: 'Senior ownership and AI/ML lead: predictive systems, Azure services, R&D for connected products.',
    },
    {
      year: '2023',
      title: 'Formal AI depth',
      body: 'Post-graduate AI/ML at UT Austin—document understanding, modeling discipline, pragmatic deployment.',
    },
    {
      year: '2025',
      title: 'Founding product engineering',
      body: 'Applied AI products for audit workflows, multi-client rollout, same release ownership practiced in enterprise.',
    },
  ],
};

export const contactCopy = {
  kicker: 'Contact',
  title: 'Reach out',
  intro:
    'Email, LinkedIn, or download the resume. I respond to serious conversations about roles and collaboration.',
  targeting:
    'Looking for senior/staff roles owning applied AI products and enterprise software end to end.',
};

export type HeroStat =
  | {
      label: string;
      value: string;
      href: string;
      note?: string;
    }
  | {
      label: string;
      href: string;
      note?: string;
      split: { value: string; sub: string }[];
    };

export const heroStats: HeroStat[] = [
  {
    label: 'Years in production roles',
    value: '9+',
    href: '#experience',
    note: 'Since May 2016 (Antylia Scientific through present)',
  },
  {
    label: 'Client environments',
    value: '9–10',
    href: '#work',
    note: 'Pilot and production deployments at Tellen; typical footprint ~15–150 users per client',
  },
  {
    label: 'Antylia program impact',
    href: '#work',
    note: 'Calibration and non-conformance program at Antylia (operational reporting, 2016–2021 era)',
    split: [
      { value: '43%', sub: 'cost reduction' },
      { value: '33%', sub: 'production lift' },
    ],
  },
  {
    label: 'Applied AI surfaces shipped',
    value: '5+',
    href: '#work',
    note: 'Footnote and consistency workflows, substantive testing, chatbot, and related audit automation',
  },
];
