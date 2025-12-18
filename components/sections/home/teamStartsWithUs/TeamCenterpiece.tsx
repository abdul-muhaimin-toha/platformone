'use client';

import Image from 'next/image';

export default function TeamCenterpiece({
  image,
  refObj,
}: {
  image: string;
  refObj: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className="absolute top-1/2 left-1/2 z-5 mt-20 lg:mt-0"
      style={{
        transform: 'translate(-30%, -30%)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        ref={refObj}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
      >
        <Image
          src={image}
          alt="Centerpiece"
          width={600}
          height={600}
          className="w-[600px] max-w-max"
        />
      </div>
    </div>
  );
}
