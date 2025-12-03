import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overusedGothek.variable} font-sans antialiased`}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
