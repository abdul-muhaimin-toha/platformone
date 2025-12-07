'use client';

import { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSWrapperProps {
  children: ReactNode;
}

const AOSWrapper = ({ children }: AOSWrapperProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });

    const refresh = () => AOS.refresh();

    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
    };
  }, []);

  return <div className="aos-wrapper">{children}</div>;
};

export default AOSWrapper;
