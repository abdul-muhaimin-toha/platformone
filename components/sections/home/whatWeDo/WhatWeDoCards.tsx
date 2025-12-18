'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Button from '@/components/globals/Button';
import { WhatWeDoCardData } from './WhatWeDoWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  cards: WhatWeDoCardData[];
}

export default function WhatWeDoCards({ cards }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const cardElements = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      cardElements.forEach((card, index) => {
        if (index === cardElements.length - 1) return;
        if (!card) return;
        const content = card.querySelector(
          '.card-content'
        ) as HTMLElement | null;
        if (!content) return;
        gsap.to(content, {
          y: -50,
          opacity: 0.98,
          filter: 'blur(12px)',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            end: 'bottom top+=100',
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef, dependencies: [cards] }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col lg:mb-[120px]"
    >
      {cards.map((card, index) => {
        return (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={`
          card-container sticky top-[75px] md:top-20 lg:top-[100px] flex min-h-[400px] flex-col ${card.bg} will-change-transform 
          
        `}
            style={{
              zIndex: index + 1,
            }}
          >
            {/* Add wrapper for clipping blur */}
            <div className="card-content w-full h-full overflow-hidden">
              <div className="ml-auto flex h-full w-full max-w-[1352px] flex-col justify-center px-6 pt-16 xl:pr-[90px] xl:pt-24 lg:px-8 [@media(min-width:1512px)]:pl-0">
                <div className="flex w-full flex-col justify-between gap-6 sm:gap-10 xl:gap-[50px] [@media(min-width:900px)]:flex-row [@media(min-width:900px)]:items-end [@media(min-width:900px)]:pb-0">
                  {/* Text Column */}
                  <div className="flex w-full max-w-[600px] flex-col xl:mb-24! [@media(min-width:900px)]:mb-16 [@media(min-width:1000px)]:max-w-[632px]">
                    <h4 className="mb-6 text-2xl font-semibold uppercase leading-[1.33] tracking-[2px] text-[#6C445F]">
                      {card.category}
                    </h4>
                    <h3 className="mb-2 text-[38px] font-bold leading-[1.47] text-black">
                      {card.title}
                    </h3>
                    <p className="mb-8 text-2xl font-semibold leading-[1.33] text-[#D9225F] xl:text-[38px] xl:leading-[1.47]">
                      {card.subtitle}
                    </p>
                    <p className="mb-8 text-base font-normal leading-[1.37] xl:text-xl xl:leading-[1.30]">
                      {card.description}
                    </p>
                    <Button variant="tertiary">{card.buttonText}</Button>
                  </div>

                  {/* Image Column */}
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={338}
                    height={335}
                    className="
                  mx-auto aspect-square w-full max-w-[400px] object-cover
                  xl:max-h-[456px]
                  xl:max-w-[500px]!
                  [@media(min-width:900px)]:mx-0
                  [@media(min-width:900px)]:max-w-[310px]
                  [@media(min-width:920px)]:max-w-[330px]
                  [@media(min-width:1000px)]:min-w-[400px]
                  [@media(min-width:1500px)]:min-w-[536px]
                "
                  />
                </div>
              </div>
            </div>

            {index == cards.length - 1 && (
              <Link
                href="/"
                className="card-container absolute bottom-0 left-0 right-0 translate-y-full flex flex-col w-full bg-linear-90 from-[#E13FAB] to-[#F02D30] rounded-br-full h-24 xl:h-[120px]"
              >
                <div className="ml-auto my-auto  flex w-full max-w-[1352px] px-6  xl:pr-[90px] lg:px-8 [@media(min-width:1512px)]:pl-0">
                  <div className="text-2xl inline-flex items-center justify-between w-full leading-[1.33] xl:text-[32px] font-semibold xl:leading-[1.28px] text-white pr-6 xl:pr-0">
                    <span>See our case studies</span>
                    <ArrowRight className="shrink-0 lg:w-8 lg:h-8 h-6 w-6" />
                  </div>
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
