'use client';

import { FC, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import HowWeDoItCard from './HowWeDoItCard';
import { BlockData, HeadingProps } from '../../home/types';

export interface HowWeDoItData extends HeadingProps {
  title_one: string;
  title_two: string;
  feature_image_one?: string;
}

export type HowWeDoItWrapperProps = BlockData<HowWeDoItData>;

const HowWeDoItWrapper: FC<HowWeDoItWrapperProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !svgRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const svg = svgRef.current;
    const section = sectionRef.current;

    gsap.set(svg, {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transformOrigin: '50% 50%',
    });

    gsap.fromTo(
      svg,
      { x: 300 },
      {
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      },
    );

    const moveStrength = 18;
    const rotateStrength = 4;

    const qx = gsap.quickTo(svg, 'x', { duration: 0.6, ease: 'power3.out' });
    const qy = gsap.quickTo(svg, 'y', { duration: 0.6, ease: 'power3.out' });
    const qrot = gsap.quickTo(svg, 'rotate', {
      duration: 0.6,
      ease: 'power3.out',
    });

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      const relX = (e.clientX - bounds.left) / bounds.width - 0.5;
      const relY = (e.clientY - bounds.top) / bounds.height - 0.5;

      qx(relX * 2 * moveStrength);
      qy(relY * 2 * moveStrength);
      qrot(relX * 2 * rotateStrength);
    };

    const reset = () => {
      qx(0);
      qy(0);
      qrot(0);
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', reset);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', reset);
    };
  }, []);

  const content = data?.data;
  if (!content) return null;

  const {
    feature_image_one = '',
    short_description = '',
    title_one = '',
  } = content;

  return (
    <section ref={sectionRef} className="relative">
      <div className="container-custom">
        <HowWeDoItCard
          title={title_one}
          description={short_description}
          image={{ src: feature_image_one, alt: title_one }}
        />
      </div>
      <svg
        ref={svgRef}
        className="absolute -bottom-[200px] z-10 xl:w-[640px] xl:-right-[460px] xl:-bottom-[122px] -right-72 aspect-423/415 w-[423px]"
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
};

export default HowWeDoItWrapper;
