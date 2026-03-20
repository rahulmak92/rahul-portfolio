export const personalInfo = {
  name: 'Rahul Makwana',
  title: 'Senior Software Engineer · Founding Full-Stack AI Engineer',
  location: 'St. Louis, MO',
  phone: '(512) 822-8867',
  email: 'r.makwana92@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rahulmakwana1',
  profile:
    'Senior software engineer and founding full-stack AI engineer. Ships applied AI products and enterprise software end to end—document intelligence, workflow automation, audit and accounting workflows, and cloud-connected platforms.',
};

export type EducationEntry =
  | {
      kind: 'degree';
      school: string;
      degree: string;
      period: string;
      portfolio?: string;
    }
  | {
      kind: 'certificate';
      name: string;
      issuer: string;
      period: string;
      credentialId: string;
      pdf: string;
    };

export const educationEntries: EducationEntry[] = [
  {
    kind: 'degree',
    school: 'The University of Texas at Austin',
    degree: 'Post-Graduate Program in AI and Machine Learning',
    period: 'Jan 2022 – May 2023',
    portfolio: 'https://eportfolio.mygreatlearning.com/rahul-makwana',
  },
  {
    kind: 'certificate',
    name: 'IBM AI Developer Professional Certificate',
    issuer: 'IBM · Coursera',
    period: 'Nov 2024 – Jan 2025',
    credentialId: '54UQQJCGY4BQ',
    pdf: '/IBM_AI_Developer_Certificate.pdf',
  },
  {
    kind: 'degree',
    school: 'Texas State University',
    degree: 'M.S. Computer Science',
    period: 'Jan 2014 – Dec 2015',
  },
];
