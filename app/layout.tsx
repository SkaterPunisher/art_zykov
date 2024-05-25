import type { Metadata } from 'next';
import '@/styles/global.scss';
import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer/Footer';
import { Poppins } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Art-Zykov | Frontend Developer | Interactive and Responsive Websites',
  description:
    'Professional frontend web development including responsive design, speed optimization, and intuitive user interfaces. Creating solutions that exceed expectations',
  openGraph: {
    title: 'Зыкова Оксана § Advanced English',
    description:
      'Professional frontend web development including responsive design, speed optimization, and intuitive user interfaces. Creating solutions that exceed expectations',
    images: {
      url: '/images/opengraph-logo_art-zykov.webp',
      alt: 'Art-Zykov | Frontend Developer',
    },
    type: 'website',
    siteName: 'Art-Zykov | Frontend Developer',
    url: `https://art-zykov.com`,
    locale: 'en-EN',
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
