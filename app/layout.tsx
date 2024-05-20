import type { Metadata } from 'next';
import '@/styles/global.scss';
import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer/Footer';

import { Poppins } from '@next/font/google';

export const metadata: Metadata = {
  title: 'Frontend Developer | Interactive and Responsive Websites',
  description:
    'Professional frontend web development including responsive design, speed optimization, and intuitive user interfaces. Creating solutions that exceed expectations',
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
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
