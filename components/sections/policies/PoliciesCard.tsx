'use client';

import { FC } from 'react';
import Button from '@/components/globals/Button';
import { cn, formatDate, parseHighlights } from '@/utils/utils';

export interface PolicyCard {
  title: string;
  date?: string;
  button_text?: string;
  link?: string;
}

const PoliciesCard: FC<PolicyCard> = ({
  title,
  date = '',
  button_text = 'Read More',
  link = '',
}) => {
  const formattedDate = formatDate(date);

  return (
    <div
      className={cn(
        'flex flex-col p-6 border-border border rounded-2xl h-[186px]',
      )}
    >
      <h3
        className="text-2xl font-semibold leading-[1.33] text-black mb-1 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
      />
      <p className="text-base font-normal leading-[1.37] text-[#737373]">
        {formattedDate}
      </p>

      <Button href={link} variant="tertiary" className="mt-auto">
        {button_text}
      </Button>
    </div>
  );
};

export default PoliciesCard;
