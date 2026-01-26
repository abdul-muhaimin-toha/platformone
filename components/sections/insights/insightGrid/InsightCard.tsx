'use client';

import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

export interface Insight {
  title: string;
  image: string;
  category: {
    label: string;
    href: string;
  };
  secondaryCategory?: string;
  author: string;
  authorImage?: string;
  date?: string;
  slug?: string;
}

function InsightCard({ insight }: { insight: Insight }): JSX.Element {
  return (
    <Link href={`/insights/${insight.slug}`} className="flex flex-col gap-4 group">
      <div className="relative w-full aspect-344/210 overflow-hidden rounded-[12px] shrink-0">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          className="object-cover group-hover:scale-105 duration-300"
        />
      </div>

      <div className="flex flex-row items-center gap-1 text-base font-semibold leading-[1.37] text-pulse-pink-700">
        <span
          className="duration-300"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {insight.category.label}
        </span>
        {insight.secondaryCategory && (
          <>
            <p> • </p>
            <p>{insight.secondaryCategory}</p>
          </>
        )}
      </div>

      <h3 className="text-xl font-medium leading-[1.30] text-black group-hover:underline decoration-1 underline-offset-4 duration-300 line-clamp-2 min-h-[2.6em]">
        {insight.title}
      </h3>

      <p className="text-base font-normal leading-[1.37] text-[#737373]">
        By {insight.author}
      </p>
    </Link>
  );
}

export default InsightCard;
