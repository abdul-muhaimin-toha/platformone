'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDoBackground() {
  const pathsRef = useRef<SVGPathElement[]>([]);

  const tempPaths = useRef<SVGPathElement[]>([]);

  const addPathRef = (el: SVGPathElement | null) => {
    if (el && !tempPaths.current.includes(el)) {
      tempPaths.current.push(el);
    }
  };

  useEffect(() => {
    pathsRef.current = tempPaths.current;

    if (pathsRef.current.length === 0) return;

    pathsRef.current.forEach((path, index) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.opacity = '0';

      const initialOffset = index === 2 ? -length : length;
      path.style.strokeDashoffset = `${initialOffset}`;

      gsap.to(path, {
        strokeDashoffset: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: path,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
        duration: 1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className="container-custom relative top-[550px] sm:top-[400px] md:top-[400px] lg:top-[270px]">
        <svg
          className="absolute left-54 md:left-56 lg:left-24 h-[300px] rotate-12 md:rotate-0 md:h-auto object-bottom object-cover"
          width={160}
          height={384}
          viewBox="0 0 160 384"
          fill="none"
        >
          <path
            ref={addPathRef}
            d="M2.15443 2C-0.750591 98.0269 36.8288 245.494 157.5 381.657"
            stroke="url(#paint0_linear_2263_9935)"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2263_9935"
              x1={2}
              y1={-5}
              x2={28}
              y2={129}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="#D9225F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container-custom hidden xl:flex relative top-[600px]">
        <svg
          className="absolute right-2 2xl:-right-10"
          width={422}
          height={1241}
          viewBox="0 0 422 1241"
          fill="none"
        >
          <path
            ref={addPathRef}
            d="M2 2C570.552 69.1318 457.243 723.817 250.787 1238.5"
            stroke="#D9225F"
            strokeWidth={4}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="container-custom">
        <svg
          className="absolute lg:bottom-0 sm:bottom-5 md:bottom-0 xl:left-56 left-16 bottom-0"
          width={85}
          height={547}
          viewBox="0 0 85 547"
          fill="none"
        >
          <path
            ref={addPathRef}
            d="M82.9564 544.123C-35.9184 399.026 -13.4679 205.487 82.9564 2.00049"
            stroke="url(#paint0_linear_2263_9928)"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2263_9928"
              x1="15.501"
              y1="353.5"
              x2="142.584"
              y2="487.487"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9225F" />
              <stop offset={1} stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
