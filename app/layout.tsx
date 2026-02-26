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
import ClarityProvider from '@/components/globals/ClarityProvider';

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

import { DEFAULT_SEO } from '@/utils/generate-metadata';
import Script from 'next/script';

export const metadata: Metadata = {
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getSiteHeaderFooterData();
  const headerProps = mapHeaderData(
    globalData.menus,
    globalData.crbThemeOptions,
  );
  const footerProps = mapFooterData(
    globalData.menus,
    globalData.crbThemeOptions,
  );

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8KNFY8D5GR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8KNFY8D5GR');
          `}
        </Script>
        <link rel="preconnect" href="https://elfsightcdn.com" />
        <link rel="preconnect" href="https://core.elfsight.com" />
      </head>
      <ReactLenis root>
        <body
          className={`${overusedGothek.variable} font-sans overflow-hidden overflow-y-auto  antialiased`}
        >
          <ClarityProvider />
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
