'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Button from '@/components/globals/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatWeDoCardData } from './WhatWeDoWrapper';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  cards: WhatWeDoCardData[];
  btn_text_main: string;
  btn_url_main: string;
  open_in_new_tab_main?: boolean;
}

export default function WhatWeDoCards({
  cards,
  btn_text_main,
  btn_url_main,
  open_in_new_tab_main,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const cardElements = cardsRef.current.filter(
          Boolean,
        ) as HTMLDivElement[];

        cardElements.forEach((card, index) => {
          if (index === cardElements.length - 1) return;

          const content = card.querySelector(
            '.card-content',
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
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [cards] },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col lg:mb-[120px]"
    >
      {cards.map((card, index) => (
        <div
          key={card._id}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
          className={`card-container flex min-h-[400px] flex-col lg:sticky lg:top-24 will-change-transform ${
            index === 0 ? 'rounded-tr-[64px]' : ''
          }`}
          style={{
            zIndex: index + 1,
            backgroundColor: card.bg_color || '#fff',
          }}
        >
          <div className="card-content w-full h-full lg:overflow-hidden">
            <div className="ml-auto flex h-full w-full max-w-[1352px] flex-col justify-center px-6 pt-16 xl:pr-[90px] xl:pt-24 lg:px-8 [@media(min-width:1512px)]:pl-0">
              <div className="flex w-full flex-col justify-between gap-6 sm:gap-10 xl:gap-[50px] [@media(min-width:900px)]:flex-row [@media(min-width:900px)]:items-end [@media(min-width:900px)]:pb-0">
                {/* Text Column */}
                <div className="flex w-full max-w-[600px] flex-col xl:mb-24! [@media(min-width:900px)]:mb-16 [@media(min-width:1000px)]:max-w-[632px]">
                  <h4 className="mb-6 text-2xl font-semibold uppercase leading-[1.33] tracking-[2px] text-[#6C445F]">
                    {card.top_title}
                  </h4>
                  <h3 className="mb-2 text-[38px] font-bold leading-[1.47] text-black">
                    {card.title_one}
                  </h3>
                  <p className="mb-8 text-2xl font-semibold leading-[1.33] text-pulse-pink-700 xl:text-[38px] xl:leading-[1.47]">
                    {card.title_two}
                  </p>
                  <p className="mb-8 text-base text-[#4D2B42] font-normal leading-[1.37] xl:text-xl xl:leading-[1.30]">
                    {card.short_description}
                  </p>
                  <Button
                    variant="tertiary"
                    as={Link}
                    href={card.btn_url}
                    target={card.open_in_new_tab ? '_blank' : undefined}
                  >
                    {card.btn_text}
                  </Button>
                </div>

                {/* Image Column */}
                <Image
                  src={card.feature_image}
                  alt={card.title_one}
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

          {/* Last Card Link */}
          {index === cards.length - 1 && (
            <Link
              target={open_in_new_tab_main ? '_blank' : undefined}
              href={btn_url_main}
              className="card-container absolute bottom-0 left-0 right-0 translate-y-full flex flex-col w-full bg-linear-90 from-[#E13FAB] to-[#F02D30] rounded-br-[64px] h-24 xl:h-[120px]"
            >
              <div className="ml-auto my-auto flex w-full max-w-[1352px] px-6 xl:pr-[90px] lg:px-8 [@media(min-width:1512px)]:pl-0">
                <div className="text-2xl inline-flex items-center justify-between w-full leading-[1.33] xl:text-[32px] font-semibold xl:leading-[1.28px] text-white pr-6 xl:pr-0">
                  <span>{btn_text_main}</span>
                  <ArrowRight className="shrink-0 lg:w-8 lg:h-8 h-6 w-6" />
                </div>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
