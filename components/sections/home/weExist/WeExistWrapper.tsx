'use client';

import Button from '@/components/globals/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef } from 'react';

export interface WeExistData {
  btn_text?: string;
  btn_url?: string;
  feature_image?: string;
  open_in_new_tab?: boolean;
  short_description?: string;
  subtitle?: string;
  title?: string;
}

interface WeExistWrapperProps {
  data?: {
    data?: WeExistData;
  };
}

function WeExistWrapper({ data }: WeExistWrapperProps) {
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
      }
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
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const relX = (x / bounds.width - 0.5) * 2;
      const relY = (y / bounds.height - 0.5) * 2;

      qx(relX * moveStrength);
      qy(relY * moveStrength);
      qrot(relX * rotateStrength);
    };

    const handleMouseLeave = () => {};

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);
  }, []);

  const content = data?.data;
  if (!content) return null;

  const {
    btn_text,
    btn_url,
    feature_image,
    open_in_new_tab,
    short_description,
    subtitle,
    title,
  } = content;

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="container-custom">
        <div className="w-full z-50 grid gap-16 grid-cols-1 md:grid-cols-2 md:gap-10 pb-32 xl:pb-[200px] xl:grid-cols-[632px_1fr]">
          <div className="flex flex-col justify-center xl:pr-14">
            {title && (
              <h3 className="text-[38px] font-bold xl:text-[56px] text-black mb-2">
                {title}
              </h3>
            )}

            {subtitle && (
              <h4 className="text-2xl font-semibold text-pulse-pink-600 mb-10">
                {subtitle}
              </h4>
            )}

            {short_description && (
              <p className="text-xl text-black mb-8">{short_description}</p>
            )}

            {btn_text && btn_url && (
              <Button
                href={btn_url}
                variant="tertiary"
                target={open_in_new_tab ? '_blank' : undefined}
              >
                {btn_text}
              </Button>
            )}
          </div>

          {feature_image && (
            <div className="relative rounded-3xl my-auto overflow-hidden aspect-380/240 md:w-full xl:aspect-680/428">
              <Image
                src={feature_image}
                fill
                className="object-cover"
                alt={title || 'We exist image'}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 680px"
              />
            </div>
          )}
        </div>
      </div>

      {/* SVG */}
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
