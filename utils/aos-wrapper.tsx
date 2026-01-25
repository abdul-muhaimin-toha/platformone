'use client';

import { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

interface AOSWrapperProps {
  children: ReactNode;
}

const AOSWrapper = ({ children }: AOSWrapperProps) => {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  // Fix: Reset scroll to top on every route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    // Refresh AOS animations for new page content
    AOS.refresh();
  }, [pathname, lenis]);

  useEffect(() => {
    const refresh = () => AOS.refresh();
    window.addEventListener('load', refresh);
    return () => {
      window.removeEventListener('load', refresh);
    };
  }, []);

  return <div className="aos-wrapper">{children}</div>;
};

export default AOSWrapper;
