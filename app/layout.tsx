import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import AOSWrapper from '@/utils/aos-wrapper';
import ReactLenis from 'lenis/react';
import { Toaster } from 'sonner';
import { getSiteHeaderFooterData } from '@/graphql/components/get-menu-data';
import { mapHeaderData } from '@/utils/header-utils';
import { mapFooterData } from '@/utils/footer-utils';

const overusedGothek = localFont({
  src: [
    {
      path: '../public/typography/OverusedGrotesk-VF.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-gothek',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Platformone',
  description: 'Know Whats your customers want',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getSiteHeaderFooterData();
  const headerProps = mapHeaderData(
    globalData.menus,
    globalData.crbThemeOptions
  );
  const footerProps = mapFooterData(
    globalData.menus,
    globalData.crbThemeOptions
  );

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://elfsightcdn.com" />
        <link rel="preconnect" href="https://core.elfsight.com" />
      </head>
      <ReactLenis root>
        <body
          className={`${overusedGothek.variable} font-sans overflow-hidden overflow-y-auto  antialiased`}
        >
          <AOSWrapper>
            <Header {...headerProps} />
            <div className="min-h-screen">{children}</div>
            <Footer {...footerProps} />
          </AOSWrapper>
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}
