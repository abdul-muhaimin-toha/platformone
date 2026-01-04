import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

function InsightCard(): JSX.Element {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer">
      <div className="relative w-full aspect-344/210 overflow-hidden rounded-[12px] shrink-0">
        <Image
          src="/insights/top-card.png"
          alt="Insight"
          fill
          className="object-cover group-hover:scale-105 duration-300"
        />
      </div>

      <div className="flex flex-row items-center gap-1 text-base font-semibold leading-[1.37] text-pulse-pink-600">
        <Link
          href="/"
          className="hover:text-black duration-300 hover:underline"
        >
          Blog
        </Link>
        <p> • </p>
        <p>Insight Communities</p>
      </div>

      <h3 className="text-xl font-medium leading-[1.30] text-black group-hover:underline duration-300">
        The CX Scorecard: How to Measure What Really Matters
      </h3>

      <p className="text-base font-normal leading-[1.37] text-[#737373]">
        By Ray Poynter
      </p>
    </div>
  );
}

export default InsightCard;
