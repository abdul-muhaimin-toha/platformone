'use client';

import Button from '@/components/globals/Button';
import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';

interface LeadershipHeroInnerProps {
  heading: {
    description: string;
    highlight: string;
  };
  desktopImages: { src: string; alt: string }[][];
  mobileImages: { src: string; alt: string }[][];
  button?: {
    label: string;
    href: string;
  };
}

const REPEAT_COUNT = 4;
const MOBILE_REPEAT_COUNT = 8;

const LeadershipHeroInner: FC<LeadershipHeroInnerProps> = ({
  heading,
  desktopImages,
  mobileImages,
  button,
}) => {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const verticalRef1 = useRef<HTMLDivElement>(null);
  const verticalRef2 = useRef<HTMLDivElement>(null);
  const verticalRef3 = useRef<HTMLDivElement>(null);

  const paused = useRef(false);

  useEffect(() => {
    const setupHorizontalInfinite = (
      row: HTMLDivElement,
      reverse = false,
      speed = 0.4,
    ) => {
      const children = Array.from(row.children);
      children.forEach((child) => row.appendChild(child.cloneNode(true)));
      const halfWidth = row.scrollWidth / 2;
      let pos = reverse ? -halfWidth : 0;

      const animate = () => {
        if (!paused.current) {
          pos += reverse ? speed : -speed;
          if (!reverse && pos <= -halfWidth) pos = 0;
          if (reverse && pos >= 0) pos = -halfWidth;
          row.style.transform = `translateX(${pos}px)`;
        }
        requestAnimationFrame(animate);
      };
      animate();
    };

    const setupVerticalInfinite = (
      column: HTMLDivElement,
      direction: 'down' | 'up',
      speed = 0.4,
    ) => {
      const children = Array.from(column.children);
      children.forEach((child) => column.appendChild(child.cloneNode(true)));
      const halfHeight = column.scrollHeight / 2;
      let pos = direction === 'down' ? -halfHeight : 0;

      const animate = () => {
        if (!paused.current) {
          pos += direction === 'down' ? speed : -speed;
          if (direction === 'down' && pos >= 0) pos = -halfHeight;
          if (direction === 'up' && pos <= -halfHeight) pos = 0;
          column.style.transform = `translateY(${pos}px)`;
        }
        requestAnimationFrame(animate);
      };
      animate();
    };

    if (window.innerWidth < 950) {
      if (topRowRef.current)
        setupHorizontalInfinite(topRowRef.current, false, 0.4);
      if (bottomRowRef.current)
        setupHorizontalInfinite(bottomRowRef.current, true, 0.4);
    } else {
      if (verticalRef1.current)
        setupVerticalInfinite(verticalRef1.current, 'down', 0.3);
      if (verticalRef2.current)
        setupVerticalInfinite(verticalRef2.current, 'up', 0.5);
      if (verticalRef3.current)
        setupVerticalInfinite(verticalRef3.current, 'down', 0.3);
    }
  }, []);

  const handleMouseEnter = () => (paused.current = true);
  const handleMouseLeave = () => (paused.current = false);

  return (
    <div className="flex flex-col gap-20 pt-[182px] [@media(min-width:950px)]:pt-24">
      {/* Heading */}
      <div className="container-custom">
        <div className="flex items-center justify-between w-full">
          <div data-aos="fade-up" className="flex flex-col gap-14 md:gap-10">
            <h1 className="text-white font-bold text-[48px] sm:text-[56px] lg:text-[64px] lg:leading-tight leading-[1.28]">
              <span>{heading.description}</span>
              <br />
              <span className="text-pulse-pink-600">{heading.highlight}</span>
            </h1>
            {button && (
              <Button href={button.href} variant="secondary">
                {button.label}
              </Button>
            )}
          </div>

          {/* Desktop Columns */}
          {desktopImages.length > 0 && (
            <div
              className="hidden [@media(min-width:950px)]:flex gap-6 h-[488px] overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/** Column 1 */}
              {desktopImages[0]?.length > 0 && (
                <div className="hidden xl:flex w-[150px] xl:w-[196px] overflow-hidden">
                  <div ref={verticalRef1} className="flex flex-col gap-6">
                    {Array.from({ length: REPEAT_COUNT }).map((_, rIdx) =>
                      desktopImages[0].map((img, idx) => (
                        <div
                          key={`v1-${rIdx}-${idx}`}
                          className="relative w-[150px] xl:w-[196px] aspect-196/258 shrink-0 rounded-[16px] overflow-hidden"
                          style={{
                            background:
                              'linear-gradient(0deg, #FFF0F9 0%, #FF2E90 100%)',
                          }}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(min-width: 1280px) 196px, 150px"
                            className="object-cover"
                          />
                        </div>
                      )),
                    )}
                  </div>
                </div>
              )}

              {/** Column 2 */}
              {desktopImages[1]?.length > 0 && (
                <div className="w-[150px] xl:w-[196px] overflow-hidden">
                  <div ref={verticalRef2} className="flex flex-col gap-6">
                    {Array.from({ length: REPEAT_COUNT }).map((_, rIdx) =>
                      desktopImages[1].map((img, idx) => (
                        <div
                          key={`v2-${rIdx}-${idx}`}
                          className="relative w-[150px] xl:w-[196px] aspect-196/258 shrink-0 rounded-[16px] overflow-hidden"
                          style={{
                            background:
                              'linear-gradient(0deg, #FFF0F9 0%, #FF2E90 100%)',
                          }}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(min-width: 1280px) 196px, 150px"
                            className="object-cover"
                          />
                        </div>
                      )),
                    )}
                  </div>
                </div>
              )}

              {/** Column 3 */}
              {desktopImages[2]?.length > 0 && (
                <div className="w-[150px] xl:w-[196px] overflow-hidden">
                  <div ref={verticalRef3} className="flex flex-col gap-6">
                    {Array.from({ length: REPEAT_COUNT }).map((_, rIdx) =>
                      desktopImages[2].map((img, idx) => (
                        <div
                          key={`v3-${rIdx}-${idx}`}
                          className="relative w-[150px] xl:w-[196px] aspect-196/258 shrink-0 rounded-[16px] overflow-hidden"
                          style={{
                            background:
                              'linear-gradient(0deg, #FFF0F9 0%, #FF2E90 100%)',
                          }}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(min-width: 1280px) 196px, 150px"
                            className="object-cover"
                          />
                        </div>
                      )),
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Rows */}
      {mobileImages.length > 0 && (
        <div className="[@media(min-width:950px)]:hidden flex flex-col gap-4 md:gap-6">
          {/** Top Row */}
          {mobileImages[0]?.length > 0 && (
            <div
              className="overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex gap-4 md:gap-6 whitespace-nowrap"
                ref={topRowRef}
              >
                {Array.from({ length: MOBILE_REPEAT_COUNT }).map((_, rIdx) =>
                  mobileImages[0].map((img, idx) => (
                    <div
                      key={`mobile-top-${rIdx}-${idx}`}
                      className="relative w-[150px] aspect-150/174 shrink-0 rounded-[8px] overflow-hidden"
                      style={{
                        background:
                          'linear-gradient(0deg, #FFF0F9 0%, #FF2E90 100%)',
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="150px"
                        className="object-cover"
                      />
                    </div>
                  )),
                )}
              </div>
            </div>
          )}

          {/** Bottom Row */}
          {mobileImages[1]?.length > 0 && (
            <div
              className="overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex gap-4 md:gap-6 whitespace-nowrap"
                ref={bottomRowRef}
              >
                {Array.from({ length: MOBILE_REPEAT_COUNT }).map((_, rIdx) =>
                  mobileImages[1].map((img, idx) => (
                    <div
                      key={`mobile-bottom-${rIdx}-${idx}`}
                      className="relative w-[150px] aspect-150/174 shrink-0 rounded-[8px] overflow-hidden"
                      style={{
                        background:
                          'linear-gradient(0deg, #FFF0F9 0%, #FF2E90 100%)',
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="150px"
                        className="object-cover"
                      />
                    </div>
                  )),
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LeadershipHeroInner;
