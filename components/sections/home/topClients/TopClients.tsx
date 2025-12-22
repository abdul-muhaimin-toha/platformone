'use client';

import Image from 'next/image';
import { JSX, useEffect, useRef } from 'react';

type ClientItem = {
  href: string;
  img: string;
};

function TopClients(): JSX.Element {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);
  const speed = 0.7;

  const images: ClientItem[] = Array.from({ length: 8 }, (_, i) => ({
    href: '#',
    img: `/home/top-clients/client-${i + 1}.png`,
  }));

  const repeatCount = 4;
  const items: ClientItem[] = Array(repeatCount).fill(images).flat();

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;

    const animate = () => {
      positionRef.current -= speed;
      if (Math.abs(positionRef.current) >= totalWidth) {
        positionRef.current = 0;
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

    return () => {
      stopAnimation();
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="container-custom">
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
                if (!animationRef.current)
                  animationRef.current = requestAnimationFrame(() => {
                    const marquee = marqueeRef.current;
                    if (!marquee) return;
                    const totalWidth = marquee.scrollWidth / 2;

                    const animate = () => {
                      positionRef.current -= speed;
                      if (Math.abs(positionRef.current) >= totalWidth)
                        positionRef.current = 0;
                      marquee.style.transform = `translateX(${positionRef.current}px)`;
                      animationRef.current = requestAnimationFrame(animate);
                    };
                    animate();
                  });
              }}
            >
              <Image
                src={item.img}
                width={90}
                height={90}
                alt="Client Logo"
                className="object-contain aspect-square w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopClients;
