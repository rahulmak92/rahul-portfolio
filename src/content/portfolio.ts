export const siteLinks = {
  resumePdf: '/RahulMakwanaAIEngineer.pdf',
  calendly: 'https://calendly.com/r-makwana92/talk-to-rahul',
} as const;

export const hero = {
  headline: 'Founding full-stack AI engineer.',
  subheading:
    'I build AI products that replace manual document workflows — from first architecture sketch through multi-client production.',
  ctaPrimary: 'Get in touch',
  ctaSecondary: 'Download resume',
  ctaCalendly: 'Book time with me',
  photoBadge: 'Founding engineer',
};

export const proofAtGlance = {
  role: 'Founding full-stack AI engineer at Tellen (2025–present). Previously senior software developer, team lead, and AI/ML lead at Antylia Scientific (2016–2024).',
  focus:
    'Applied AI products, document intelligence, workflow automation, audit/accounting integrations, cloud-connected platforms, and Azure delivery.',
  proofPoints: [
    '9+ years of engineering — from business-critical enterprise platforms to multi-client applied AI products.',
    'Tellen products deployed across ~9–10 clients (pilot and production) — engineering work that helped convert pilots into signed contracts and active pipeline.',
    'End-to-end ownership: architecture, releases, monitoring, client validation, customer-facing technical conversations, and distributed team coordination.',
  ],
};

/* ─── Work section ─── */

export const workSection = {
  kicker: 'Work',
  headline: 'Products in production',
  intro:
    'Three AI products shipped at Tellen, two enterprise platforms built at Antylia — each adopted by real users and running in production.',
};

export type WorkCase = {
  id: string;
  company: string;
  companyContext?: string;
  badge: string;
  shortTitle: string;
  oneLiner: string;
  pipeline: string[];
  challenge: string;
  myRole: string;
  result: string;
  tags: string[];
};

export const workCases: WorkCase[] = [
  /* ── Tellen products ── */
  {
    id: 'footnotes',
    company: 'Tellen',
    companyContext:
      'Joined in Jan 2025 as founding engineer. Within the first week, the CTO left — I stepped into broad execution ownership across product, releases, team coordination, and client-facing technical work.',
    badge: 'Applied AI · Strongest ownership',
    shortTitle: 'FootnoteAI — extraction, review UI, and consistency checking',
    oneLiner:
      'Auditors were reviewing 10-Ks and financial statements page by page in PDFs and spreadsheets — slow, error-prone, and impossible to trace back to the source. I built a document intelligence pipeline that extracts footnotes, anchors them to the source PDF with bounding-box traceability, and runs internal consistency checks across the filing.',
    pipeline: ['Source PDF', 'Azure Doc Intelligence + OCR', 'Footnote store', 'Review UI with PDF anchors', 'Internal consistency checks'],
    challenge:
      'Every filing has a different layout and format. Bad extractions must surface immediately — not silently poison downstream review. The product also needed markup, versioning, and iteration workflows so accountants could work through reviews in a structured way.',
    myRole:
      'Led, architected, coded, and reviewed. Designed the full pipeline: extraction, data model, PDF-to-footnote linkage with bounding-box traceability, consistency rules, and review workflows. This is my clearest end-to-end ownership story at Tellen.',
    result:
      'Became the backbone for document-heavy review across the client rollout. Not a demo — a daily-use production tool that replaced manual PDF navigation and spreadsheet cross-referencing.',
    tags: ['Azure Doc Intelligence', 'OCR', 'LLM Extraction', 'React', 'Next.js', 'PostgreSQL'],
  },
  {
    id: 'substantive',
    company: 'Tellen',
    badge: 'Applied AI',
    shortTitle: 'Substantive testing — assertion to evidence to conclusion',
    oneLiner:
      'Auditors define tests, feed in samples and supporting documents, and need a clear pass/fail/exception with evidence tied to each conclusion. I built a system that models the real audit objects — tests, samples, documents, assertions — and automates the matching, analysis, and evidence trail.',
    pipeline: ['Test definitions', 'Samples & docs', 'Ingest & match', 'Per-sample analysis jobs', 'Results + evidence citations'],
    challenge:
      'Test criteria and documents don\'t always map one-to-one. When an exception occurs, the system needs to explain exactly why — not just flag it. Auditors care about traceability: assertion → evidence → conclusion.',
    myRole:
      'Architected, coded, and owned the product. Built the core data model and workflow engine through early production. A colleague later helped scale and improve deployment, but the product ownership story is mine.',
    result: 'Second major production surface alongside FootnoteAI — used daily by audit teams. Replaced repetitive manual read-throughs with traceable, reviewable analysis.',
    tags: ['LLM Analysis', 'Structured Extraction', 'Evidence Chains', 'FastAPI', 'Python', 'PostgreSQL'],
  },
  {
    id: 'completeness',
    company: 'Tellen',
    badge: 'Applied AI',
    shortTitle: 'Audit file completeness — engagement-quality workflows',
    oneLiner:
      'Before an audit engagement can close, the team needs to know: are all required workpapers present? Are sign-offs complete? Are conditional requirements satisfied? I built a product that surfaces deficiencies early enough for the team to act on them.',
    pipeline: ['Engagement config', 'Workpaper checks', 'Sign-off validation', 'Conditional rules', 'Deficiency report'],
    challenge:
      'Completeness isn\'t a simple checklist — requirements are conditional on engagement state and configuration. Missing a partner sign-off or a conditional workpaper can derail review readiness.',
    myRole:
      'Coded, helped architect, and reviewed. Strong contributor with real ownership, though not as singular as FootnoteAI or Substantive Testing.',
    result: 'Moved from prototype to production alongside the other Tellen products. Improved review readiness and deficiency identification across client engagements.',
    tags: ['Workflow Engine', 'Compliance Rules', 'FastAPI', 'React', 'PostgreSQL'],
  },
  /* ── Antylia products ── */
  {
    id: 'calibration',
    company: 'Antylia Scientific',
    companyContext:
      'Nearly 9 years (2016–2024). Grew from entry-level developer to senior software developer, team lead, and AI/ML lead — not a specialist hire, but the person the organization trusted most across systems, product operations, and troubleshooting.',
    badge: 'Enterprise platform · Strongest business impact',
    shortTitle: 'Calibration management — the system the business ran on',
    oneLiner:
      'Calibration work sat inside a compliance-heavy operational environment tied to ISO, A2LA, and regulated manufacturing processes. I designed and built the platform from scratch. It became the system of record — every Traceable Products item coming out of the building was tied into this software path.',
    pipeline: ['Assets & instruments', 'Calibration workflows', 'Compliance & audit trail', 'Ops reporting'],
    challenge:
      'The company\'s compliance posture depended on how this platform was designed. Errors show up in audits and on the production floor — no room for downtime. Coordinated offshore development while maintaining uptime pressure across regulated environments.',
    myRole:
      'Architected from scratch and maintained through years of production. Led four offshore developers and two testers. Mentored junior engineers and interns. 40+ daily staff depended on this system.',
    result:
      'Critical path for regulated operations. Zero unplanned downtime over five years. Tied to ~43% cost reduction and ~33% production improvement in business metrics.',
    tags: ['C# / .NET', 'SQL Server', 'Azure', 'ISO / A2LA', 'Team Lead', 'Compliance'],
  },
  {
    id: 'traceablelive',
    company: 'Antylia Scientific',
    badge: 'Cloud & connected devices',
    shortTitle: 'TraceableLIVE — end-to-end cloud monitoring platform',
    oneLiner:
      'A cloud-connected monitoring platform for physical instruments — pressure, temperature, CO₂, humidity. I owned the full flow from device communication through cloud ingestion to customer-facing dashboards and alerts. I was the single most knowledgeable person across this entire system.',
    pipeline: ['Device protocols (TCP/IP, MQTT, Wi-Fi)', 'Cloud ingestion', 'SQL-backed storage', 'Dashboards & device management', 'Alarms & notifications'],
    challenge:
      'Debugging crosses multiple layers — device firmware behavior, protocol issues, ingestion failures, dashboard logic, alert delivery. When something breaks, the customer sees it immediately.',
    myRole:
      'Owned end to end: device communication, cloud ingestion, SQL systems, dashboards, alarms, notifications, client administration, and customer-facing troubleshooting. Was the escalation point for difficult technical inquiries.',
    result: 'Proved I could own cloud-connected products — not just internal enterprise apps. Systems understanding that spans from device protocols to customer-facing alerts.',
    tags: ['TCP/IP', 'MQTT', 'Azure Cloud', 'SQL', 'Dashboards', 'IoT', 'Customer-facing'],
  },
];

/* ─── Experience section ─── */

export const experienceBlocks = [
  {
    id: 'tellen',
    company: 'Tellen',
    role: 'Founding Full-Stack AI Engineer',
    period: 'Jan 2025 – Present',
    bullets: [
      'Joined at founding. Within the first week, the CTO left — stepped into broad execution ownership across product engineering, releases, team coordination, and client-facing technical work.',
      'Built and shipped three applied AI products (FootnoteAI, Substantive Testing, Audit File Completeness) from prototype through production.',
      'Owned weekly releases: release notes, merge approvals, deployment monitoring, post-release bug fixing, and client environment validation.',
      'Coordinated 4 offshore developers and 3–4 rotating U.S. contractors — broke requirements into tasks, sequenced work, reviewed code, decided what shipped.',
      'Ran technical conversations with customers directly: demos, requirements, support, and translating feedback into product changes.',
      'Products deployed across ~9–10 clients. Engineering work directly supported signed contracts, active pipeline opportunities, and pilot-to-customer conversions.',
      'Implemented AI-assisted engineering workflows (Cursor, Claude Code) to improve delivery speed while retaining design ownership and code review standards.',
    ],
  },
  {
    id: 'antylia',
    company: 'Antylia Scientific',
    role: 'Developer → Senior Software Developer → Team Lead → AI/ML Lead',
    period: 'May 2016 – Dec 2024',
    bullets: [
      'Built the calibration management platform from scratch — it became the system the business ran on. 40+ daily staff, compliance-critical, zero unplanned downtime over five years.',
      'Owned TraceableLIVE end to end: from device protocols (TCP/IP, MQTT) through cloud ingestion to customer-facing dashboards, alarms, and notifications.',
      'Became the go-to person for anything that needed reverse engineering. Was the front face for difficult customer technical inquiries and the escalation point for system-level troubleshooting.',
      'Led NiceLabel and labeling/manufacturing workflow initiatives — contributed to ~40% throughput improvement across 3 facilities.',
      'Led four offshore developers and two testers. Mentored junior engineers and interns across multiple projects.',
      'AI/ML lead for practical initiatives: Azure-based customer service chatbot, predictive analysis for TraceableLIVE, recommendation systems, and CNN-based image/cell-counting work.',
      'Went through multiple physical product lifecycles end to end — raw materials, production, software support, go-to-market, and client support.',
    ],
  },
];

export const deliveryNote =
  'Small reviewable changes, automated checks, and clear release ownership — augmented by AI-assisted tooling.';

/* ─── Skills section ─── */

export const skillsAndDomains = {
  kicker: 'Skills & domains',
  intro:
    'Everything listed here has been used in production or business-critical work — not just tutorials.',
  buckets: [
    {
      title: 'Applied AI / LLM systems',
      tier: 'primary',
      items: [
        { name: 'LLM application design & RAG patterns', depth: 'deep' as const },
        { name: 'Prompt engineering & eval discipline', depth: 'deep' as const },
        { name: 'Structured extraction & document parsing', depth: 'deep' as const },
        { name: 'Azure Document Intelligence & OCR', depth: 'deep' as const },
        { name: 'OpenAI / Anthropic APIs', depth: 'deep' as const },
        { name: 'NLP fundamentals', depth: 'working' as const },
      ],
    },
    {
      title: 'Software engineering',
      tier: 'primary',
      items: [
        { name: 'Python & FastAPI', depth: 'deep' as const },
        { name: 'C# / .NET', depth: 'deep' as const },
        { name: 'SQL & PostgreSQL', depth: 'deep' as const },
        { name: 'React, Next.js & TypeScript', depth: 'working' as const },
        { name: 'API design & background jobs', depth: 'deep' as const },
        { name: 'Testing & code review', depth: 'deep' as const },
      ],
    },
    {
      title: 'Cloud, data & platforms',
      tier: 'secondary',
      items: [
        { name: 'Azure (compute, storage, managed services)', depth: 'deep' as const },
        { name: 'Data modeling & pipelines', depth: 'deep' as const },
        { name: 'IoT protocols (TCP/IP, MQTT)', depth: 'working' as const },
        { name: 'CI/CD & containers', depth: 'working' as const },
        { name: 'Enterprise integrations', depth: 'working' as const },
      ],
    },
  ],
};

/* ─── Career arc ─── */

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
      title: 'Senior ownership & AI/ML lead',
      body: 'Full-stack ownership, predictive systems, connected-device platforms. Became the person people trusted most across systems and troubleshooting.',
    },
    {
      year: '2023',
      title: 'Formal AI depth',
      body: 'Post-graduate AI/ML at UT Austin — document understanding, modeling discipline, pragmatic deployment.',
    },
    {
      year: '2025',
      title: 'Founding product engineering',
      body: 'Applied AI products for audit workflows, multi-client rollout, execution ownership after leadership disruption.',
    },
  ],
};

/* ─── Contact ─── */

export const contactCopy = {
  kicker: 'Contact',
  title: "Let's talk",
  intro:
    'Happy to discuss roles, collaboration, or just swap notes on applied AI and production engineering.',
  targeting:
    'Looking for senior/staff roles owning applied AI products and enterprise software end to end.',
};

/* ─── Hero stats ─── */

export type HeroStat = {
  label: string;
  value: string;
  href: string;
  note?: string;
};

export const heroStats: HeroStat[] = [
  {
    label: 'Years of engineering',
    value: '9+',
    href: '#experience',
    note: 'Since May 2016 — grew from developer to senior, team lead, and AI/ML lead at Antylia, then founding engineer at Tellen',
  },
  {
    label: 'Products shipped',
    value: '5',
    href: '#work',
    note: 'FootnoteAI, Substantive Testing, Audit File Completeness at Tellen; Calibration Platform and TraceableLIVE at Antylia',
  },
  {
    label: 'Zero downtime (5 yr)',
    value: '0',
    href: '#work',
    note: 'Zero unplanned downtime on business-critical production software over five years at Antylia',
  },
];
