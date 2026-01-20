'use client';

import Image from 'next/image';
import Button from '@/components/globals/Button';

export interface Insight {
  id: string;
  slug: string;
  title: string;
  featuredImage?: {
    node: {
      link: string;
    };
  };
  categories?: {
    edges: {
      node: {
        name: string;
      };
    }[];
  };
}

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  const imageSrc = insight.featuredImage?.node.link || '';

  const categoryNames =
    insight.categories?.edges.map((cat) => cat.node.name).join(' • ') || '';

  return (
    <div className="flex group cursor-pointer flex-col w-full">
      <div className="flex justify-center relative w-full rounded-t-4xl overflow-hidden items-center aspect-380/336">
        {imageSrc && (
          <Image
            src={imageSrc}
            fill
            alt={insight.title}
            className="object-cover group-hover:scale-105 duration-300"
          />
        )}
      </div>

      <div className="flex grow duration-300 z-10 flex-col w-full gap-4 p-6 overflow-hidden group-hover:-mt-[74px] -mt-6 border border-border bg-white rounded-t-3xl rounded-b-4xl">
        {categoryNames && (
          <h4 className="text-xl font-semibold leading-[1.30] text-pulse-pink-700">
            {categoryNames}
          </h4>
        )}

        <h3 className="text-[32px] line-clamp-3 font-semibold leading-tight text-black">
          {insight.title}
        </h3>

        <Button
          href={`/insights/${insight.slug}`}
          className="mt-2 opacity-0 translate-y-2 pointer-events-auto transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          variant="tertiary"
        >
          Read more
        </Button>
      </div>
    </div>
  );
}
