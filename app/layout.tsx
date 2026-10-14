import type { Metadata } from 'next';
import '@/styles/global.scss';
import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer/Footer';
import { Poppins } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://art-zykov.com'),
  title: 'Artem Zykov | Lead Frontend / Fullstack Engineer',
  description:
    'Lead Frontend / Fullstack Engineer building commercial products since 2019. React, Next.js, NestJS, AI agents & MCP. I lead frontend teams and ship products end-to-end: database, API, UI, bots, CI/CD and hosting.',
  openGraph: {
    title: 'Artem Zykov | Lead Frontend / Fullstack Engineer',
    description:
      'Lead Frontend / Fullstack Engineer building commercial products since 2019. React, Next.js, NestJS, AI agents & MCP. I lead frontend teams and ship products end-to-end: database, API, UI, bots, CI/CD and hosting.',
    images: {
      url: '/images/opengraph-logo_art-zykov.webp',
      alt: 'Artem Zykov | Lead Frontend / Fullstack Engineer',
    },
    type: 'website',
    siteName: 'Artem Zykov | Lead Frontend / Fullstack Engineer',
    url: `https://art-zykov.com`,
    locale: 'en_US',
  },
};

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  style: ['normal'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <div className='layout'>
          <Header />
          <div className='content'>{children}</div>
          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  );
}
