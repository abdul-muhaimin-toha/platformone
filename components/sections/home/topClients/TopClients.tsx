'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX, useEffect, useRef } from 'react';

type ClientItem = {
  href: string;
  img: string;
};

function TopClients(): JSX.Element {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);

  const images: ClientItem[] = Array.from({ length: 6 }, (_, i) => ({
    href: '#',
    img: `/home/top-clients/client-${i + 1}.png`,
  }));

  const repeatCount = 3;
  const items: ClientItem[] = Array(repeatCount).fill(images).flat();

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const speed = 1.4;
    const totalWidth = marquee.scrollWidth / 2;

    const animate = () => {
      positionRef.current -= speed;

      if (Math.abs(positionRef.current) >= totalWidth) {
        positionRef.current = 0;
      }

      marquee.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="container-custom">
        <div className="flex items-center gap-24 py-9 w-full" ref={marqueeRef}>
          {[...items, ...items].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center shrink-0"
            >
              <Image
                src={item.img}
                width={80}
                height={60}
                alt="Client Logo"
                className="object-contain max-h-[60px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopClients;
