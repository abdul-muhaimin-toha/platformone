'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

function TopClients() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  const images = Array.from({ length: 6 }, (_, i) => ({
    href: '#',
    img: `/home/top-clients/client-${i + 1}.png`,
  }));

  const repeatCount = 3;
  const items = Array(repeatCount).fill(images).flat();

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
    <section className="w-full overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center gap-24 py-9 w-full" ref={marqueeRef}>
          {[...items, ...items].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-[72px] h-[60px] justify-center items-center shrink-0"
            >
              <Image
                src={item.img}
                alt="Client Logo"
                width={72}
                height={60}
                className="h-full w-full object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopClients;
