'use client';

import { cn } from '@/utils/utils';
import Image from 'next/image';
import { JSX, useEffect, useRef, useMemo } from 'react';

export interface ClientItem {
  company_logo?: string;
  _id?: string;
}

interface TopClientsProps {
  data?: {
    data?: {
      brand_logos?: ClientItem[];
      bg?: string;
    };
  };
}

function TopClients({ data }: TopClientsProps): JSX.Element | null {
  const content = data?.data ?? {};

  const brandLogos = useMemo(
    () => content.brand_logos ?? [],
    [content.brand_logos]
  );
  const bg = content.bg;

  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);
  const speed = 0.7;

  useEffect(() => {
    if (brandLogos.length === 0) return;

    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;

    const animate = () => {
      positionRef.current -= speed;
      if (Math.abs(positionRef.current) >= totalWidth) {
        positionRef.current += totalWidth; // Smooth loop
      }
      marquee.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!animationRef.current)
        animationRef.current = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    startAnimation();

    return () => stopAnimation();
  }, [brandLogos, speed]);

  if (brandLogos.length === 0) return null;

  const repeatCount = 4;
  const items: ClientItem[] = Array(repeatCount).fill(brandLogos).flat();

  return (
    <section className={cn('w-full overflow-hidden', bg)}>
      <div className="container-custom z-10">
        <div
          className="flex items-center gap-24 py-[26px] w-full"
          ref={marqueeRef}
        >
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="inline-flex justify-center items-center shrink-0"
              onMouseEnter={() => {
                if (animationRef.current)
                  cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
              }}
              onMouseLeave={() => {
                if (!animationRef.current) {
                  const marquee = marqueeRef.current;
                  if (!marquee) return;
                  const totalWidth = marquee.scrollWidth / 2;

                  const animate = () => {
                    positionRef.current -= speed;
                    if (Math.abs(positionRef.current) >= totalWidth) {
                      positionRef.current += totalWidth;
                    }
                    marquee.style.transform = `translateX(${positionRef.current}px)`;
                    animationRef.current = requestAnimationFrame(animate);
                  };
                  animate();
                }
              }}
            >
              {item.company_logo && (
                <Image
                  src={item.company_logo}
                  width={90}
                  height={90}
                  alt="Client Logo"
                  className="object-contain aspect-square w-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopClients;
