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
    <div className="flex flex-col gap-4 group cursor-pointer">
      <div className="relative w-full aspect-344/210 overflow-hidden rounded-[12px] shrink-0">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          className="object-cover group-hover:scale-105 duration-300"
        />
      </div>

      <div className="flex flex-row items-center gap-1 text-base font-semibold leading-[1.37] text-pulse-pink-700">
        <Link
          href={insight.category.href}
          className="hover:text-black duration-300 hover:underline"
        >
          {insight.category.label}
        </Link>
        {insight.secondaryCategory && (
          <>
            <p> • </p>
            <p>{insight.secondaryCategory}</p>
          </>
        )}
      </div>

      <h3 className="text-xl font-medium leading-[1.30] text-black group-hover:underline duration-300">
        {insight.title}
      </h3>

      <p className="text-base font-normal leading-[1.37] text-[#737373]">
        By {insight.author}
      </p>
    </div>
  );
}

export default InsightCard;
