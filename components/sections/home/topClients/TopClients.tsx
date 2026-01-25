'use client';

import { cn } from '@/utils/utils';
import Image from 'next/image';
import { JSX, useEffect, useRef, useMemo } from 'react';

import { BlockData } from '../types';
import { CloudCog } from 'lucide-react';

export interface ClientItem {
  company_logo?: string;
  _id?: string;
}

export interface TopClientsData {
  brand_logos?: ClientItem[];
  bg_color?: string;
}

export interface TopClientsProps extends BlockData<TopClientsData> {
  brands?: ClientItem[];
}

function TopClients({
  data,
  brands = [],
}: TopClientsProps): JSX.Element | null {
  const content = data?.data ?? {};

  const brandLogos = useMemo(() => brands, [brands]);
  const bg = content.bg_color || '';

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
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
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

  const handleMouseEnter = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!animationRef.current && marqueeRef.current) {
      const marquee = marqueeRef.current;
      const totalWidth = marquee.scrollWidth / 2;

      const animate = () => {
        positionRef.current -= speed;
        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current += totalWidth;
        }
        marquee.style.transform = `translateX(${positionRef.current}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  if (brandLogos.length === 0) return null;

  const repeatCount = 4;
  const items: ClientItem[] = Array(repeatCount).fill(brandLogos).flat();

  return (
    <section
      className={cn('w-full overflow-hidden')}
      style={{ background: bg }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-custom z-10">
        <div
          className="flex items-center gap-24 py-6  w-full"
          ref={marqueeRef}
        >
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="inline-flex justify-center items-center shrink-0"
            >
              {item.company_logo && (
                <Image
                  src={item.company_logo}
                  width={100}
                  height={100}
                  alt="Client Logo"
                  className="object-contain size-[100px] aspect-square w-full"
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
