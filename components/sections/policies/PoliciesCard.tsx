'use client';

import Button from '@/components/globals/Button';
import { cn } from '@/utils/utils';

export interface PolicyCard {
  title: string;
  date: string;
  buttonText: string;
  className?: string;
}

function PoliciesCard({ title, date, buttonText, className = '' }: PolicyCard) {
  return (
    <div
      className={cn(
        'flex flex-col p-6 border-border border rounded-2xl h-[186px]',
        className
      )}
    >
      <h3 className="text-2xl font-semibold leading-[1.33] text-black mb-1 line-clamp-2">
        {title}
      </h3>
      <p className="text-base font-normal leading-[1.37] text-[#737373]">
        {date}
      </p>

      <Button href="/policies/details" variant="tertiary" className="mt-auto">
        {buttonText}
      </Button>
    </div>
  );
}

export default PoliciesCard;
