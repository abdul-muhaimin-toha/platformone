'use client';

import Image from 'next/image';

export default function TeamFigure({
  src,
  index,
  register,
}: {
  src: string;
  index: number;
  register: (index: number, el: HTMLElement | null) => void;
}) {
  return (
    <figure
      ref={(el) => register(index, el)}
      className="absolute w-60 h-80 rounded-[20px] overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, #FFF0F9 0%, #FF2E90 100%)',
        boxShadow: '0 18px 35px rgba(0,0,0,0.25),0 3px 8px rgba(0,0,0,0.15)',
        transformStyle: 'preserve-3d',
      }}
    >
      <Image
        src={src}
        alt={`Team ${index}`}
        fill
        className="object-cover object-bottom"
        sizes="(max-width: 640px) 100vw, 20rem"
      />
    </figure>
  );
}
