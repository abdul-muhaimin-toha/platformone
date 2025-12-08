'use client';

import Button from '@/components/globals/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef } from 'react';

export interface WeExistProps {
  title: string;
  subtitle: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  imageSrc: string;
}

function WeExistWrapper({
  title,
  subtitle,
  description,
  linkHref,
  linkLabel,
  imageSrc,
}: WeExistProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !svgRef.current) return;

    const svg = svgRef.current;
    const section = sectionRef.current;

    gsap.registerPlugin(ScrollTrigger);

    const moveStrength = 14;
    const rotateStrength = 4;

    let idleTween: gsap.core.Tween;

    // Set transform origin (change to '100% 100%' for bottom-right)
    gsap.set(svg, { transformOrigin: '100% 100%' });

    // 🌟 Idle floating when no mouse movement
    const startIdle = () => {
      idleTween = gsap.to(svg, {
        y: '+=10',
        rotate: '+=3',
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    };

    const stopIdle = () => {
      idleTween?.kill();
    };

    startIdle();

    // 🌟 Smooth scroll zoom-in effect
    gsap.fromTo(
      svg,
      { scale: 0.85 },
      {
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom', // when section enters viewport
          end: 'bottom top', // when section leaves viewport
          scrub: 1.2, // smooth scrub
        },
      }
    );

    // 🌟 Mouse parallax movement
    const handleMove = (e: MouseEvent) => {
      stopIdle();

      const bounds = section.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const relX = (x / bounds.width - 0.5) * 2;
      const relY = (y / bounds.height - 0.5) * 2;

      gsap.to(svg, {
        x: relX * moveStrength,
        y: relY * moveStrength,
        rotate: relX * rotateStrength,
        ease: 'power3.out',
        duration: 1.2,
      });

      clearTimeout((window as any)._idleTimer);
      (window as any)._idleTimer = setTimeout(() => startIdle(), 1500);
    };

    section.addEventListener('mousemove', handleMove);

    return () => {
      section.removeEventListener('mousemove', handleMove);
      idleTween?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="container-custom">
        <div className="w-full z-50 grid gap-16 grid-cols-1 md:grid-cols-2 md:gap-10 py-32 xl:pb-[200px] xl:pt-[235px] xl:grid-cols-[632px_1fr]">
          {/* Left Content */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center xl:pr-14"
          >
            <h3 className="text-[38px] font-bold leading-[1.26] xl:text-[56px] xl:leading-[1.28] text-black mb-2">
              {title}
            </h3>
            <h4 className="text-2xl font-semibold leading-normal text-pulse-pink-600 mb-10 xl:leading-[1.33]">
              {subtitle}
            </h4>

            <p className="text-xl font-normal leading-[1.33] text-black mb-8">
              {description}
            </p>
            <Button href={linkHref} variant="tertiary">
              {linkLabel}
            </Button>
          </div>
          {/* Right Image */}
          <div
            data-aos="fade-up"
            className="w-full relative rounded-3xl my-auto overflow-hidden aspect-380/240  md:w-full xl:aspect-680/428"
          >
            <Image
              src={imageSrc}
              fill
              className="object-cover"
              alt="We exist image"
            />
          </div>
        </div>
      </div>
      <svg
        ref={svgRef}
        className="absolute -bottom-[200px] z-10 lg:w-[640px] lg:-right-[400px] lg:-bottom-[155px] -right-72 aspect-423/415 w-[423px]"
        width={641}
        height={630}
        viewBox="0 0 641 630"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320.5 0C143.496 0 0 140.916 0 314.759C0 488.601 143.496 629.496 320.5 629.496C497.504 629.496 641 488.58 641 314.759C641 140.938 497.504 0 320.5 0ZM320.985 508.276C217.109 508.276 132.874 421.629 132.874 314.759C132.874 207.888 217.109 121.22 320.985 121.22C424.861 121.22 509.095 207.867 509.095 314.759C509.095 421.651 424.882 508.276 320.985 508.276Z"
          fill="url(#paint0_linear_2069_9817)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2069_9817"
            x1={0}
            y1="314.737"
            x2={641}
            y2="314.737"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E13FAB" />
            <stop offset={1} stopColor="#EB335B" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}

export default WeExistWrapper;
