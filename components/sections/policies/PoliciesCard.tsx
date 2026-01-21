'use client';

import { FC } from 'react';
import Button from '@/components/globals/Button';
import { cn, parseHighlights } from '@/utils/utils';

export interface PolicyCard {
  title: string;
  short_description: string;
  button_text: string;
  className?: string;
  link?: string;
}

const PoliciesCard: FC<PolicyCard> = ({
  title,
  short_description,
  button_text,
  className = '',
  link = '/policies/details',
}) => {
  return (
    <div
      className={cn(
        'flex flex-col p-6 border-border border rounded-2xl h-[186px]',
        className
      )}
    >
      <h3
        className="text-2xl font-semibold leading-[1.33] text-black mb-1 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
      />
      <p className="text-base font-normal leading-[1.37] text-[#737373]">
        {short_description}
      </p>

      <Button href={link} variant="tertiary" className="mt-auto">
        {button_text}
      </Button>
    </div>
  );
};

export default PoliciesCard;
