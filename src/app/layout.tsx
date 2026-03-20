import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
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
  title: 'Rahul Makwana | Senior Software Engineer · Founding Full-Stack AI Engineer',
  description:
    'Ships applied AI products and enterprise software end to end—document intelligence, workflow automation, audit and accounting workflows, and cloud-connected platforms.',
  keywords: [
    'Rahul Makwana',
    'Software Engineer',
    'Applied AI',
    'Full Stack',
    'Azure',
    'Document Intelligence',
  ],
  openGraph: {
    title: 'Rahul Makwana | Senior Software Engineer · Founding Full-Stack AI Engineer',
    description:
      'Applied AI products and enterprise systems—document intelligence, workflow automation, and regulated domains—with ownership from architecture through production.',
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
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
