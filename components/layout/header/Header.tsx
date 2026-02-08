'use client';

import { useEffect, useState } from 'react';
import HeaderTop from './HeaderTop';
import HeaderMobileNav from './HeaderMobileNav';
import { usePathname } from 'next/navigation';

// header

import { HeaderProps } from './types';

export default function Header({
  navLinks,
  cta,
  logoSrc,
  logoLightSrc,
}: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(pathname !== '/');

  useEffect(() => {
    setOpen(false);
    if (pathname === '/') {
      setScrolled(window.scrollY > 200);
      const handleScroll = () => {
        setScrolled(window.scrollY > 200);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrolled(true);
    }
  }, [pathname]);

  return (
    <header>
      <HeaderTop
        logoSrc={logoSrc}
        logoLightSrc={logoLightSrc}
        desktopLinks={navLinks}
        cta={cta}
        onMenuClick={() => setOpen(!open)}
        scrolled={scrolled}
        open={open}
        pathname={pathname}
      />

      <HeaderMobileNav
        links={navLinks}
        cta={cta}
        isOpen={open}
        pathname={pathname}
      />
    </header>
  );
}
