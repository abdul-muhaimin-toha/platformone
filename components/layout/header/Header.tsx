'use client';

import { useState } from 'react';
import HeaderTop from './HeaderTop';
import HeaderMobileNav from './HeaderMobileNav';

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
  const [open, setOpen] = useState(false);

  return (
    <header>
      <HeaderTop
        logoSrc="/brandings/logo.svg"
        desktopLinks={navLinks}
        cta={ctaButton}
        onMenuClick={() => setOpen(!open)}
      />

      <HeaderMobileNav links={navLinks} cta={ctaButton} isOpen={open} />
    </header>
  );
}
