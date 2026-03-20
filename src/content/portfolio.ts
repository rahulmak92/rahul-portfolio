export const siteLinks = {
  resumePdf: '/RahulMakwanaAIEngineer.pdf',
  calendly: 'https://calendly.com/r-makwana92/talk-to-rahul',
} as const;

export const hero = {
  headline: 'Founding full-stack AI engineer.',
  subheadingLines: [
    'Document intelligence, audit and accounting workflows, cloud platforms.',
    'I own architecture through release—design, build, review, ship.',
  ],
  ctaPrimary: 'Get in touch',
  ctaSecondary: 'Download resume',
  ctaCalendly: 'Book time with me',
  photoBadge: 'Founding full-stack engineer',
};

export const proofAtGlance = {
  kicker: 'Proof at a glance',
  role:
    'Founding full-stack AI engineer (Tellen, 2025–present); previously senior software developer / AI·ML lead and software developer (Antylia Scientific, 2016–2024).',
  focus:
    'Applied AI products and enterprise software—document intelligence, workflow automation, audit/accounting and financial reporting, integrations with accounting and audit platforms, and Azure-era cloud delivery.',
  proofPoints: [
    '9+ years shipping production software, including platform work that became operationally critical (manufacturing/calibration) and multi-client applied AI in pilot and production.',
    'Products used across roughly 9–10 clients (pilot and production), typically ~15–150 users per client—plus participation in commercial motion (pilots, pipeline, and customer expansion from pilot to ongoing use).',
    'End-to-end ownership: releases, monitoring, defect resolution, client-environment validation, and technical conversations with customers—alongside coordinating distributed engineering (offshore developers and contractors).',
  ],
  nextLine: 'Below: a few things I’ve built in production.',
};

export const tellenContextLine =
  'Tellen: shipped from prototype through pilot and production—~9–10 clients, often ~15–150 users each. I owned releases, monitoring, and client validation.';

export const builtSection = {
  kicker: 'What I’ve built',
  intro: 'Two products at Tellen, one platform at Antylia—each in production with real users.',
};

export const selectedWorkIntro = builtSection.intro;

export const selectedWorkCases = [
  {
    id: 'footnotes',
    title: 'Financial statement footnote extraction, review UI, and internal consistency checking',
    summary: 'Extract footnotes from filings, tie them to the PDF, and run internal consistency checks before sign-off.',
    diagramVariant: 'horizontal' as const,
    diagramSteps: ['Source PDF', 'Ingest', 'Footnote store', 'Review UI', 'Consistency checks'],
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
    summary: 'Run auditor-defined tests over samples and docs; pass/fail/exception with evidence tied to conclusions.',
    diagramVariant: 'horizontal' as const,
    diagramSteps: ['Test definitions', 'Samples & docs', 'Ingest', 'Jobs', 'Results + evidence'],
    diagramCaption: 'End-to-end path from assertion to evidence',
    problem:
      'Manual read-throughs and brittle doc-to-sample matching.',
    built:
      'Models tests, samples, docs, assertions; ingests, matches, runs per-sample/per-attribute jobs; evidence, conclusions, exceptions.',
    difficult:
      'Assertions don’t map one-to-one every time—exceptions need a clear “why.”',
    ownership:
      'Core architecture and build through early production; teammate scaled deploy later.',
    result:
      'Second major production surface alongside footnotes.',
  },
  {
    id: 'calibration',
    title: 'Calibration management platform for regulated lab and manufacturing operations',
    summary: 'Greenfield platform for ISO/A2LA-style calibration—40+ staff, operationally critical, cost and throughput in ops reporting.',
    diagramVariant: 'vertical' as const,
    diagramSteps: ['Assets / instruments', 'Calibration records', 'Compliance & reporting'],
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
      'Critical path for regulated ops; zero unplanned downtime on core production software over five years (that stack).',
  },
];

export const experienceBlocks = [
  {
    id: 'tellen',
    company: 'Tellen',
    role: 'Founding Full-Stack AI Engineer',
    period: 'Jan 2025 – Present',
    paragraphs: [
      'I joined at founding to design and ship applied AI products for audit and accounting workflows—from early prototypes through pilot and production use with firms. I own delivery end to end: architecture and implementation, code review, releases, release notes, deployment monitoring, defect triage, and validation in client environments. I’m routinely in technical conversations with customers—demos, requirements, and support—and I coordinate a distributed engineering group (offshore developers and rotating U.S. contractors) while retaining final engineering accountability for what ships and how it behaves in production.',
      'The work spans document intelligence, workflow automation, and integrations with accounting and audit platforms—products that teams use for real engagements, not internal experiments. I use AI-assisted engineering workflows in day-to-day delivery to speed prototyping, debugging, and iteration; that’s one practical advantage, not a substitute for engineering judgment, review discipline, or release ownership.',
    ],
  },
  {
    id: 'antylia',
    company: 'Antylia Scientific',
    role: 'Senior Software Developer / AI·ML Lead · Software Developer',
    period: 'May 2016 – Dec 2024',
    paragraphs: [
      'I spent nearly nine years at one enterprise, growing from hands-on development into senior technical ownership and AI/ML leadership. I built and operated software that became operationally critical: a calibration management platform developed from scratch that supported 40+ staff and sat in the middle of ISO- and A2LA-aligned calibration workflows, contributing to major cost and throughput improvements reported by the business. I also owned TraceableLIVE end to end—cloud connectivity, ingestion, alerting, dashboards, and user-facing flows for connected devices—so reliability and observability weren’t afterthoughts.',
      'Broader scope included connected-device platforms, regulated manufacturing tooling, predictive and recommendation systems, Azure-based services, and a customer-service chatbot initiative. I led offshore developers and testers, mentored juniors and an intern, and maintained zero unplanned downtime on business-critical production software over a five-year window—treated as a sustained operational commitment, not a slogan. Applied ML and analytics were part of the job where they improved decisions and products; I kept claims tied to what we shipped and measured.',
    ],
  },
];

export const skillsAndDomains = {
  kicker: 'Skills & domains',
  intro:
    'Three buckets—curated, not exhaustive. Everything listed here has been used in production-facing or business-critical work.',
  buckets: [
    {
      title: 'Applied AI / LLM systems',
      body:
        'LLM application design, retrieval and context (including RAG-style patterns), prompt and evaluation discipline, structured extraction and enrichment over messy documents. Strong emphasis on NLP, document parsing, OCR, Azure Document Intelligence, and OpenAI APIs where API-driven models fit the problem—not AI for its own sake.',
    },
    {
      title: 'Software engineering',
      body:
        'Python, FastAPI, C#, SQL, PostgreSQL, React, Next.js, TypeScript where applicable, API design, background jobs and workflow orchestration, testing and review habits, performance and correctness under real data. I write and own code through merge and release.',
    },
    {
      title: 'Cloud, data & platforms',
      body:
        'Azure (compute, storage, managed services, operational patterns), data modeling and pipelines, integration with enterprise systems, CI/CD and release hygiene, containers and orchestration where the product required it. Comfortable owning services from design through production operations.',
    },
  ],
  deliveryNote:
    'I use AI-assisted engineering workflows to speed implementation and iteration; core languages, platforms, and review standards stay the primary bar—tools support the loop, they don’t replace ownership of design, quality, or production behavior.',
};

export const howIShip = {
  title: 'How I ship',
  body: [
    'I work the way many strong teams do now: small, reviewable changes, automated checks where they matter, and clear ownership of what reaches production. Day to day I use AI-assisted engineering workflows—including tools such as Cursor and Claude Code—to speed up prototyping, debugging, and implementation, and to explore options without losing rigor.',
    'That does not replace engineering judgment. I still read diffs, design for failure modes, validate behavior, and own releases and post-release behavior. AI-assisted workflows are a delivery advantage; accountability for architecture, quality, and production outcomes stays explicitly human.',
  ],
};

export const storyArc = {
  kicker: 'Story',
  title: 'Nine years',
  titleAccent: '· one through-line',
  intro:
    'The thread is shipping software where mistakes are expensive—operations, compliance, and client-facing workflows—and using ML and AI where they improve outcomes, not where they sound impressive.',
  beats: [
    {
      year: '2016',
      title: 'Foundation',
      body: 'Built calibration systems, IoT services, and internal applications. Learned that reliability and measurable cost impact beat novelty.',
    },
    {
      year: '2021',
      title: 'Depth in ML & platforms',
      body: 'Senior ownership and AI/ML lead work: predictive and recommendation systems, Azure services, R&D for connected products, and regulated manufacturing tooling.',
    },
    {
      year: '2023',
      title: 'Formal AI depth',
      body: 'Post-graduate work in AI and ML to align formal training with production problems—document understanding, modeling discipline, and pragmatic deployment.',
    },
    {
      year: '2025',
      title: 'Founding product engineering',
      body: 'Founding full-stack AI engineer: applied AI products for audit and accounting workflows, multi-client rollout, and the same release ownership I practiced in enterprise.',
    },
  ],
};

export const contactCopy = {
  kicker: 'Contact',
  title: 'Reach out',
  intro:
    'Email, LinkedIn, or download the resume PDF. I respond to serious conversations about roles and collaboration.',
  targeting:
    'I’m interested in senior and staff-level roles where I can own applied AI products and enterprise software end to end—especially document intelligence, workflow automation, and audit/accounting or regulated domains—with clear responsibility for architecture, quality, and production outcomes.',
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
  { label: 'Years in production roles', value: '9+', href: '#experience', note: 'Since May 2016 (Antylia Scientific through present)' },
  { label: 'Client environments', value: '9–10', href: '#work', note: 'Pilot and production deployments at Tellen; typical footprint ~15–150 users per client' },
  {
    label: 'Antylia program impact',
    href: '#work',
    note: 'Calibration and non-conformance program at Antylia (operational reporting, 2016–2021 era)',
    split: [
      { value: '43%', sub: 'cost reduction' },
      { value: '33%', sub: 'production lift' },
    ],
  },
  { label: 'Applied AI surfaces shipped', value: '5+', href: '#work', note: 'Footnote and consistency workflows, substantive testing, chatbot, and related audit automation' },
];
