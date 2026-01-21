'use client';

import { FC, useRef } from 'react';
import WhatWeGetCard, { WhatWeGetCardProps } from './WhatWeGetCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { cn, parseHighlights } from '@/utils/utils';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlockData, HeadingProps } from '../../home/types';
import WhatWeGetSvg from './WhatWeGetSvg';

gsap.registerPlugin(ScrollTrigger);

export interface WhatWeGetData extends HeadingProps {
  select_version?: 'v1' | 'v2';
  promo_cards?: WhatWeGetCardProps[];
  bottom_description?: string;
}

export type WhatWeGetProps = BlockData<WhatWeGetData>;

const WhatWeGet: FC<WhatWeGetProps> = ({ data }) => {
  const content = data?.data ?? {};
  const {
    select_version = 'v1',
    title = '',
    promo_cards = [],
    bottom_description = '',
  } = content;

  const spanRef = useRef<HTMLSpanElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (spanRef.current) {
      gsap.fromTo(
        spanRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: spanRef.current,
            start: 'top 80%',
          },
        },
      );
    }

    if (select_version === 'v1' && svgRef.current && sectionRef.current) {
      const svg = svgRef.current;
      const section = sectionRef.current;

      gsap.set(svg, { x: 0, y: 0, rotate: 0, transformOrigin: '50% 50%' });

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
        const relX = ((e.clientX - bounds.left) / bounds.width - 0.5) * 2;
        const relY = ((e.clientY - bounds.top) / bounds.height - 0.5) * 2;

        qx(relX * moveStrength);
        qy(relY * moveStrength);
        qrot(relX * rotateStrength);
      };

      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  });

  return (
    <section ref={sectionRef} className="bg-mulberry-950 relative">
      <div className="container-custom">
        <div className="w-full z-20 flex flex-col gap-16 py-32 items-center justify-center">
          {title && (
            <h2 className="text-white z-10 w-full md:gap-3 flex-row flex items-center text-[38px] md:text-[56px] md:leading-[1.28] font-bold gap-2 leading-[1.26]">
              <span
                dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
              />
              <span
                ref={spanRef}
                className={cn(
                  ' rounded-[3px] hidden md:inline-flex w-[120px] h-2 md:h-3 bg-linear-[90deg] from-pulse-pink-700/0 to-pulse-pink-700 xl:h-3 xl:w-[230px]',
                )}
              />
            </h2>
          )}

          {promo_cards.length > 0 && (
            <div className="grid w-full gap-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {promo_cards.map((card) => (
                <WhatWeGetCard key={card._id} {...card} />
              ))}
            </div>
          )}

          {bottom_description && (
            <h2
              data-aos="fade-up"
              className={cn(
                'text-white w-full text-[38px] self-start lg:text-[56px] lg:leading-[1.28] font-bold gap-2 leading-[1.26]',
                select_version === 'v2' && 'max-w-[800px] lg:max-w-[950px]',
              )}
              dangerouslySetInnerHTML={{
                __html: parseHighlights(bottom_description),
              }}
            />
          )}
        </div>
      </div>

      {select_version === 'v1' && (
        <WhatWeGetSvg
          ref={svgRef}
          className="absolute  aspect-423/415 h-auto w-[350px] xl:w-[640px] -top-[120px] -right-[200px] xl:-top-56 xl:-right-[478px]"
        />
      )}
    </section>
  );
};

export default WhatWeGet;
