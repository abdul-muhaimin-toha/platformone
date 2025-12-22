'use client';

import { useEffect, useState } from 'react';
import HeaderTop from './HeaderTop';
import HeaderMobileNav from './HeaderMobileNav';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Services', href: '/' },
  { label: 'Case Studies', href: '/' },
  { label: 'People', href: '/' },
  { label: 'Insights', href: '/' },
];

const ctaButton = {
  label: 'Let’s talk',
  href: '/',
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(pathname !== '/');

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 200);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  return (
    <header>
      <HeaderTop
        logoSrc="/brandings/logo.svg"
        logoLightSrc="/brandings/logo-light.svg"
        desktopLinks={navLinks}
        cta={ctaButton}
        onMenuClick={() => setOpen(!open)}
        scrolled={scrolled}
        open={open}
      />

      <HeaderMobileNav links={navLinks} cta={ctaButton} isOpen={open} />
    </header>
  );
}
