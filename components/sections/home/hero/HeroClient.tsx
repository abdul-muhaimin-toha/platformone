'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';
import Button from '@/components/globals/Button';
import { HeroProps } from './Hero';

export default function HeroClient({
  titleSpans,
  description,
  subDescription,
  buttonLabel,
}: HeroProps) {
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const squareRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!h1Ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const words = h1Ref.current.querySelectorAll('span.word');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1Ref.current,
        start: 'top 80%',
      },
    });

    if (svgRef.current) {
      tl.fromTo(
        svgRef.current,
        { autoAlpha: 0, scale: 1.3, filter: 'blur(12px)' },
        {
          autoAlpha: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power3.out',
        },
        '<'
      );
    }

    tl.fromTo(
      words,
      { autoAlpha: 0, y: 30, scale: 1.2, filter: 'blur(8px)' },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        stagger: 0.18,
        ease: 'power3.out',
      },
      '<'
    );

    squareRefs.current.forEach((el) => {
      if (!el) return;
      tl.fromTo(
        el,
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 0.9, ease: 'power3.out' },
        '-=1.0'
      );
    });

    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.6'
      );
    }

    if (buttonRef.current) {
      tl.to(
        buttonRef.current,
        { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '>'
      );
    }
  });

  return (
    <div className="w-full z-50 flex flex-col mt-[72px] md:mt-[74px] lg:mt-24">
      <h1
        ref={h1Ref}
        className="text-[64px] max-w-[550px] lg:max-w-[800px] xl:text-[90px] [@media(min-width:1400px)]:text-[120px] xl:max-w-full [@media(min-width:1400px)]:leading-[1.31] md:max-w-full md:text-[70px] lg:text-[80px] md:mb-12 mb-[92px] gap-x-4 flex flex-row items-center md:gap-x-8 flex-wrap font-bold leading-tight text-white"
      >
        {titleSpans.map((word, idx) => {
          if (word === 'your') {
            return (
              <div key={idx} className="flex flex-row items-center gap-x-4">
                <span
                  className="word opacity-0"
                  style={{
                    transform: 'translateY(30px) scale(2)',
                    filter: 'blur(8px)',
                  }}
                >
                  {word}
                </span>
                <span
                  ref={(el) => {
                    squareRefs.current[idx] = el;
                  }}
                  className="h-2 w-[170px] md:hidden bg-linear-[90deg] from-pulse-pink-700/0 to-pulse-pink-700 scale-x-0"
                />
              </div>
            );
          } else if (word === 'customers') {
            return (
              <div
                key={idx}
                className="flex flex-row items-center gap-x-4 [@media(min-width:1400px)]:gap-x-10"
              >
                <span
                  ref={(el) => {
                    squareRefs.current[idx] = el;
                  }}
                  className="h-2 w-[170px] hidden md:block bg-linear-[90deg] from-pulse-pink-700/0 to-pulse-pink-700 scale-x-0"
                />
                <span
                  className="word opacity-0"
                  style={{
                    transform: 'translateY(30px) scale(2)',
                    filter: 'blur(8px)',
                  }}
                >
                  {word}
                </span>
              </div>
            );
          } else {
            return (
              <span
                key={idx}
                className="word opacity-0"
                style={{
                  transform: 'translateY(30px) scale(1.1)',
                  filter: 'blur(8px)',
                }}
              >
                {word}
              </span>
            );
          }
        })}
      </h1>

      <div
        ref={descriptionRef}
        className="flex flex-col gap-6 max-w-[480px] md:max-w-[550px] opacity-0 translate-y-8"
      >
        <p className="text-xl md:text-2xl md:leading-[1.33] font-normal text-white leading-[1.30]">
          {description}
        </p>
        <p className="text-base md:text-xl md:leading-[1.30] font-normal text-pulse-pink-200 leading-[1.37]">
          {subDescription}
        </p>
      </div>

      <div ref={buttonRef} className="opacity-0 translate-y-8">
        <Button variant="secondary" className="mt-[50px] md:mt-[60px]">
          {buttonLabel}
        </Button>
      </div>

      {/* SVG Decoration */}
      <div
        ref={svgRef}
        className="absolute -right-[190px] top-[72px] sm:top-1/2 xl:h-full xl:-right-[226px] sm:-translate-y-1/2 h-[472px] sm:h-[550px] aspect-[415/872px] opacity-0 scale-90"
      >
        <svg
          className="w-full h-full shrink-0 object-contain animate-float"
          width={641}
          height={872}
          viewBox="0 0 641 872"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M320.5 0C143.496 0 0 140.916 0 314.759C0 488.601 143.496 629.496 320.5 629.496C497.504 629.496 641 488.58 641 314.759C641 140.938 497.504 0 320.5 0ZM320.985 508.276C217.109 508.276 132.874 421.629 132.874 314.759C132.874 207.888 217.109 121.22 320.985 121.22C424.861 121.22 509.095 207.867 509.095 314.759C509.095 421.651 424.882 508.276 320.985 508.276Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M621.822 749.596H19.1777V872H621.822V749.596Z"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1={0}
              y1="314.737"
              x2={641}
              y2="314.737"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ED29FF" />
              <stop offset={1} stopColor="#2DBCF0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="19.1777"
              y1="810.796"
              x2="621.822"
              y2="810.796"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E13FAB" />
              <stop offset={1} stopColor="#F02D30" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
