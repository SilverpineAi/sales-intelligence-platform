import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sales Intelligence Platform',
  description: 'Enterprise-grade sales intelligence platform for lead enrichment and prioritization',
  keywords: 'sales intelligence, lead enrichment, prospect scoring, sales automation',
  authors: [{ name: 'Sales Intelligence Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Sales Intelligence Platform',
    description: 'Enterprise-grade sales intelligence platform for lead enrichment and prioritization',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sales Intelligence Platform',
    description: 'Enterprise-grade sales intelligence platform for lead enrichment and prioritization',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}



