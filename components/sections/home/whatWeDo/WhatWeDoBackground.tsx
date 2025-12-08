'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDoBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      const container = containerRef.current;
      if (!path || !container) return;

      const length = path.getTotalLength();

      gsap.fromTo(
        path,
        {
          strokeDasharray: length,
          // FIX 1: Add a buffer (+ 20) to hide the round cap completely
          strokeDashoffset: length + 20,
          // FIX 2: Immediately make it visible in JS (it's hidden in CSS to prevent flash)
          opacity: 1,
        },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top center',
            end: 'bottom bottom',
            scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 top-[600px] sm:top-[450px] lg:top-[300px] right-0 left-[200px] flex justify-center pointer-events-none"
    >
      <svg
        className="h-full w-full max-w-[1516px]" // Removed opacity-100 (it's default)
        width={1303}
        height={2592}
        viewBox="0 0 1303 2592"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          // FIX 3: Start with opacity-0 to prevent the dot appearing before React hydrates
          className="opacity-0"
          d="M18.0461 2.00049C-19.2872 77.1748 0.0456543 309 167.546 378.5C335.046 448 454.547 260.5 910.546 319.5C1366.54 378.5 1385.12 1365.5 1159.33 1556C933.545 1746.5 299.345 1810.4 162.545 2042C25.7453 2273.6 105.545 2503.5 162.545 2589.5"
          stroke="#D9225F"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
