import { FC } from 'react';
import HeadingBlock from './HeadingBlock';
import TestimonialSlider, { TestimonialData } from './TestimonialSlider';

import { BlockData, HeadingProps } from '../types';

export interface WhatItLikeToWorkWithUsData extends HeadingProps {
  testimonials?: TestimonialData[];
}

export type WhatItLikeToWorkWithUsWrapperProps = BlockData<WhatItLikeToWorkWithUsData>;

const WhatItLikeToWorkWithUsWrapper: FC<WhatItLikeToWorkWithUsWrapperProps> = ({
  data,
}) => {
  const content = data?.data;
  if (!content) return null;

  const { title, short_description, testimonials = [] } = content;

  return (
    <section className="bg-white bg-linear-[90deg] from-[#E9C4DD99]/0 to-[#E9C4DD99]">
      <div className="flex flex-col w-full pt-32 lg:pb-20 pb-[88px] gap-24">
        {title && short_description && (
          <HeadingBlock title={title} description={short_description} />
        )}
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default WhatItLikeToWorkWithUsWrapper;
