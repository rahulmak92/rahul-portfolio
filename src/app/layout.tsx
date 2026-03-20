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

const title = 'Rahul Makwana | Senior Software Engineer · Founding Full-Stack AI Engineer';
const description =
  'Ships applied AI products and enterprise software end to end—document intelligence, workflow automation, audit and accounting workflows, and cloud-connected platforms.';

export const metadata: Metadata = {
  metadataBase: new URL('https://rahul-portfolio-neon.vercel.app'),
  title,
  description,
  keywords: [
    'Rahul Makwana',
    'Software Engineer',
    'Applied AI',
    'Full Stack',
    'Azure',
    'Document Intelligence',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
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
