import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rahul Makwana | Senior Software Engineer & AI Builder',
  description:
    'Senior software engineer and AI-focused product builder. Experience across cloud applications, analytics, workflow automation, and cross-functional delivery.',
  keywords: [
    'Rahul Makwana',
    'Software Engineer',
    'AI Engineer',
    'Full Stack Developer',
    'Azure',
    'Machine Learning',
  ],
  openGraph: {
    title: 'Rahul Makwana | Senior Software Engineer & AI Builder',
    description:
      'Senior software engineer and AI-focused product builder with experience across cloud applications, analytics, and workflow automation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
