export const personalInfo = {
  name: 'Rahul Makwana',
  title: 'Senior Software Engineer & AI Builder',
  location: 'St. Louis, MO',
  phone: '(512) 822-8867',
  email: 'r.makwana92@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rahulmakwana1',
  profile:
    'Senior software engineer and AI-focused product builder with experience across cloud applications, analytics, workflow automation, and cross-functional delivery. Built and supported AI-enabled solutions in Azure, GitHub-based engineering environments, and document-heavy business workflows spanning financial reporting, compliance, and operational systems.',
};

export const coreExpertise = [
  'AI Product Development',
  'Financial Reporting Workflows',
  'Azure Cloud Services',
  'Industrial Software Engineering',
  'Data Analytics',
  'Product Development',
  'Forecasting Analytics',
  'Workflow Automation',
  'Project Management',
  'Calibration & Accreditation',
];

export const experiences = [
  {
    id: 'tellen',
    role: 'Founding Fullstack AI Engineer',
    company: 'Tellen',
    period: 'Jan 2025 – Present',
    subtitle: 'Later took on Head of Platform responsibilities',
    highlights: [
      'Operated as a founding engineer multiplied by AI — orchestrating Cursor agents, Claude Code, and automated pipelines to match the output of a traditional 15+ person engineering team.',
      'Architected and built an AI-driven development workflow connecting business requests, Linear ticket creation, AI-assisted implementation, PR generation, preview environments, CodeRabbit review, and GitHub CI/CD validation before deployment.',
      'Shipped production-ready AI products in weeks that typically take months — FootNoteAI, Workpaper AI, ChatBot, and audit automation tools — by embedding AI into every stage of the development lifecycle.',
      'Pioneered a hybrid engineering model where human developers and AI agents share the same ticket board, PR workflow, and code review pipeline — achieving deterministic results through temperature tuning, human-in-the-loop checkpoints, and controlled IDE environments.',
      'Helped evolve Tellen\'s platform from a simple App Service deployment to a scalable Docker/Kubernetes-based architecture.',
      'Led delivery of AI products that converted trial client engagements into longer-term contracts, directly impacting company revenue in a startup environment.',
    ],
    tags: ['AI/ML', 'Leadership', 'Full Stack', 'DevOps', 'Kubernetes'],
  },
  {
    id: 'antylia-senior',
    role: 'Senior Software Developer',
    company: 'Antylia Scientific',
    period: 'May 2021 – Dec 2024',
    subtitle:
      'AI/ML Lead · R&D Leadership for Emerging Technologies · Product Owner · Digital Manufacturing Platform',
    highlights: [
      'Built AI and analytics solutions for IoT and MedTech products, including recommendation models, predictive analysis, and Azure-based chatbot workflows.',
      'Delivered quarterly sales and customer insights using ARIMA, matrix factorization, TF-IDF, and regression-based analysis to improve conversion and pricing decisions.',
      'Led R&D proof-of-concepts for emerging products using CNNs, R-CNN, Azure IoT services, and event-driven cloud architecture.',
      'Oversaw software and automation initiatives for regulated manufacturing workflows, including calibration systems, labeling applications, and operational process improvements.',
      'Led offshore developers, mentored interns, and delivered stakeholder reporting for releases, feature implementation, and process optimization.',
    ],
    tags: ['AI/ML', 'IoT', 'Azure', 'R&D', 'Manufacturing'],
  },
  {
    id: 'antylia-dev',
    role: 'Software Developer',
    company: 'Antylia Scientific',
    period: 'May 2016 – May 2021',
    subtitle: '',
    highlights: [
      'Redesigned internal business applications and supported next-generation scientific laboratory products and IoT services.',
      'Built calibration and non-conformance applications that reduced annual operating costs by 43% and improved production by 33%, eliminating manual paper-based workflows.',
      'Developed dashboards and business tools that improved sales visibility and internal decision-making.',
      'Supported product development across BLE, MQTT, Ethernet, and embedded-connected devices, including troubleshooting during critical production periods.',
    ],
    tags: ['Full Stack', 'IoT', 'BLE/MQTT', 'Analytics'],
  },
];

export const education = [
  {
    degree: 'Post-Grad Program in AI and Machine Learning',
    school: 'UT Austin',
    year: 'May 2023',
    portfolio: 'https://eportfolio.mygreatlearning.com/rahul-makwana',
  },
  {
    degree: 'Masters in Computer Science',
    school: 'Texas State University',
    year: 'December 2015',
  },
];

export const skillCategories = [
  {
    name: 'AI / ML',
    featured: true,
    skills: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Hugging Face',
      'LangChain',
      'OpenAI API',
      'Claude API',
      'LLMs',
      'RAG Pipelines',
      'Fine-tuning',
      'Model Building',
      'Vectorization',
      'CNNs',
      'R-CNN',
      'Transformers',
    ],
  },
  {
    name: 'NLP & Document AI',
    featured: true,
    skills: [
      'NLTK',
      'Tesseract OCR',
      'Azure Document Intelligence',
      'Text Extraction',
      'Named Entity Recognition',
      'Sentiment Analysis',
      'TF-IDF',
      'Text Classification',
      'Summarization',
    ],
  },
  {
    name: 'Azure AI & Cloud',
    featured: true,
    skills: [
      'Azure ML Studio',
      'Azure Cognitive Services',
      'Azure OpenAI Service',
      'Azure IoT Hub',
      'Azure Functions',
      'Model Deployment',
      'Docker',
      'Kubernetes',
      'GitHub CI/CD',
    ],
  },
  {
    name: 'Python Ecosystem',
    skills: [
      'Python',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'FastAPI',
      'Jupyter',
      'OpenCV',
      'Pillow',
    ],
  },
  {
    name: 'Data & Analytics',
    skills: [
      'ARIMA',
      'Matrix Factorization',
      'Regression Models',
      'Forecasting',
      'Segmentation',
      'Business Intelligence',
    ],
  },
  {
    name: 'Full Stack & Tools',
    skills: [
      'C#',
      'TypeScript',
      'SQL',
      'Next.js',
      'React',
      'Node.js',
      'Git',
      'Cursor',
      'Claude Code',
    ],
  },
];

export const stats = [
  { label: 'Years Experience', value: '9+', href: '#experience', note: 'Since May 2016 at Antylia Scientific' },
  { label: 'AI Products Shipped', value: '5+', href: '#experience', note: 'FootNoteAI, Workpaper AI, ChatBot, substantive testing, audit completeness' },
  { label: 'Cost Reduction', value: '43%', href: '#experience', note: 'Calibration & non-conformance apps at Antylia Scientific (2016–2021)' },
  { label: 'Bug-to-Fix Time', value: '15m', href: '#workflow', note: 'AI-driven pipeline: Slack → Linear → Cursor → GitHub → CodeRabbit → CI/CD' },
];
