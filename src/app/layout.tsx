import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/constants';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ['разработчик', 'портфолио', 'Next.js', 'React', 'TypeScript', 'веб-разработка'],
  authors: [{ name: 'Богдан' }],
  openGraph: {
    type: 'website',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-gray-950 font-[family-name:var(--font-inter)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
