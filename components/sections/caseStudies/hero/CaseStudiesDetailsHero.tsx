'use client';

import Button from '@/components/globals/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { FC, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudiesDetailsHeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
}

const MOVE_STRENGTH = 18;
const ROTATE_STRENGTH = 4;

const CaseStudiesDetailsHero: FC<CaseStudiesDetailsHeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const svg = svgRef.current;
      const section = sectionRef.current;

      if (!svg || !section) return;

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
        }
      );

      const qx = gsap.quickTo(svg, 'x', {
        duration: 0.6,
        ease: 'power3.out',
      });
      const qy = gsap.quickTo(svg, 'y', {
        duration: 0.6,
        ease: 'power3.out',
      });
      const qrot = gsap.quickTo(svg, 'rotate', {
        duration: 0.6,
        ease: 'power3.out',
      });

      const handleMouseMove = (e: MouseEvent) => {
        const bounds = section.getBoundingClientRect();

        const relX = ((e.clientX - bounds.left) / bounds.width - 0.5) * 2;
        const relY = ((e.clientY - bounds.top) / bounds.height - 0.5) * 2;

        qx(relX * MOVE_STRENGTH);
        qy(relY * MOVE_STRENGTH);
        qrot(relX * ROTATE_STRENGTH);
      };

      section.addEventListener('mousemove', handleMouseMove);

      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
      };
    },
    { dependencies: [] }
  );

  return (
    <section className="bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="bg-[#3E122F] rounded-bl-[64px]">
        <div className="w-full relative z-20">
          <div className="container-custom">
            <div
              data-aos="fade-up"
              className="w-full flex flex-col z-50 gap-20 md:flex-row md:gap-8 md:pb-[91px] md:justify-between pt-[182px] pb-8 lg:pb-[91px] lg:pt-[166px] items-start justify-center md:items-center"
            >
              <div className="w-full flex flex-col max-w-[400px] md:max-w-[500px] gap-6">
                <p className="text-xl font-normal text-pulse-pink-600 leading-[1.30] lg:text-2xl lg:leading-[1.33] xl:text-2xl xl:leading-[1.33]">
                  {subtitle}
                </p>
                <h1 className="text-[38px] inline-flex flex-col font-bold leading-[1.26] lg:text-[48px] lg:leading-[1.23] xl:text-[56px] xl:leading-[1.28] text-white">
                  {title}
                </h1>
                <Button href={buttonHref} variant="secondary">
                  {buttonText}
                </Button>
              </div>

              <div className="w-full relative md:max-w-[516px] aspect-380/244 lg:aspect-516/327">
                <Image
                  fill
                  src={imageSrc}
                  alt={imageAlt}
                  className="object-cover z-20 rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
        <svg
          ref={svgRef}
          className="absolute -bottom-[350px] md:-bottom-[300px] md:-right-56 md:w-[400px] xl:-bottom-[327px] -right-64 xl:-right-[466px] z-20 aspect-641/629 w-[389px] xl:w-[641px]"
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
              <stop stopColor="#ED29FF" />
              <stop offset={1} stopColor="#7386F5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default CaseStudiesDetailsHero;
