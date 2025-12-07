'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/globals/Button';

interface TopInsightsHeaderProps {
  title: string;
  subtitle: string;
  viewAllHref: string;
}

export default function TopInsightsHeader({
  title,
  subtitle,
  viewAllHref,
}: TopInsightsHeaderProps) {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
    >
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-[38px] lg:text-[56px] lg:leading-[1.28] font-bold leading-[1.26] text-black">
          {title}
        </h2>
        <h3 className="text-2xl font-semibold leading-[1.33] text-pulse-pink-600">
          {subtitle}
        </h3>
      </div>
      <Button href={viewAllHref} variant="secondary">
        View all insights
      </Button>
    </div>
  );
}
