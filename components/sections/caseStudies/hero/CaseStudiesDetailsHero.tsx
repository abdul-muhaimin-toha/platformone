'use client';

import Button from '@/components/globals/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { FC, useRef } from 'react';
import { BlockData, HeadingProps } from '../../home/types';
import CaseStudiesDetailsHeroSvg from './CaseStudiesDetailsHeroSvg';
import { parseHighlights } from '@/utils/utils';

gsap.registerPlugin(ScrollTrigger);

export interface CaseStudiesDetailsHeroData extends HeadingProps {
  case_study_btn?: string;
  case_study_file?: string;
  feature_image?: string;
  top_title?: string;
}

export type CaseStudiesDetailsHeroProps = BlockData<CaseStudiesDetailsHeroData>;

const MOVE_STRENGTH = 18;
const ROTATE_STRENGTH = 4;

const CaseStudiesDetailsHero: FC<CaseStudiesDetailsHeroProps> = ({ data }) => {
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
        },
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
    { dependencies: [] },
  );

  const content = data?.data;
  if (!content) return null;

  const {
    case_study_btn = '',
    case_study_file = '',
    feature_image = '',
    title = '',
    top_title = '',
  } = content;

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
                <p
                  className="text-xl font-normal text-pulse-pink-600 leading-[1.30] lg:text-2xl lg:leading-[1.33] xl:text-2xl xl:leading-[1.33]"
                  dangerouslySetInnerHTML={{ __html: parseHighlights(top_title) }}
                />
                <h1
                  className="text-[38px] inline-flex flex-col font-bold leading-[1.26] lg:text-[48px] lg:leading-[1.23] xl:text-[56px] xl:leading-[1.28] text-white"
                  dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
                />
                <Button
                  target="_blank"
                  href={case_study_file}
                  variant="secondary"
                >
                  {case_study_btn}
                </Button>
              </div>

              {feature_image && (
                <div className="w-full relative md:max-w-[516px] aspect-380/244 lg:aspect-516/327">
                  <Image
                    fill
                    src={feature_image}
                    alt={title ? title.replace(/<[^>]*>/g, '') : ''}
                    className="object-cover z-20 rounded-3xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <CaseStudiesDetailsHeroSvg
          ref={svgRef}
          className="absolute -bottom-[350px] md:-bottom-[300px] md:-right-56 md:w-[400px] xl:-bottom-[327px] -right-64 xl:-right-[466px] z-20 aspect-641/629 w-[389px] xl:w-[641px]"
        />
      </div>
    </section>
  );
};

export default CaseStudiesDetailsHero;
