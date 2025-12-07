'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/globals/Button';

export interface Insight {
  id: number;
  category: string;
  title: string;
  imageSrc: string;
  linkHref: string;
}

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <div className="flex group flex-col w-full">
      <div className="flex justify-center relative w-full rounded-t-4xl overflow-hidden items-center aspect-380/336">
        <Image
          src={insight.imageSrc}
          fill
          alt={insight.title}
          className="object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <div className="flex grow duration-300 z-10 flex-col w-full gap-4 p-6 h-[226px] overflow-hidden group-hover:-mt-[74px] -mt-6 bg-white border border-pulse-pink-200 rounded-t-3xl rounded-b-4xl">
        <h4 className="text-xl font-semibold leading-[1.30] text-pulse-pink-700">
          {insight.category}
        </h4>
        <h3 className="text-[32px] font-semibold leading-tight text-black">
          {insight.title}
        </h3>
        <Button
          href={insight.linkHref}
          className="mt-2 opacity-0 translate-y-2 pointer-events-auto transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          variant="tertiary"
        >
          Read more
        </Button>
      </div>
    </div>
  );
}
