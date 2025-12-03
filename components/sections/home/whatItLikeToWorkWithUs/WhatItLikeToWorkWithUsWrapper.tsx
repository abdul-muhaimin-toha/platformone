import { FC } from 'react';
import HeadingBlock from './HeadingBlock';
import TestimonialSlider, { Testimonial } from './TestimonialSlider';

export interface WhatItLikeToWorkWithUsProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  autoplayDelay?: number;
}

const WhatItLikeToWorkWithUsWrapper: FC<WhatItLikeToWorkWithUsProps> = ({
  title,
  description,
  testimonials,
  autoplayDelay = 3000,
}) => (
  <section className="bg-white bg-linear-[90deg] from-[#E9C4DD99]/0 to-[#E9C4DD99]">
    <div className="flex flex-col w-full pt-32 lg:pb-20 pb-[88px] gap-24">
      <HeadingBlock title={title} description={description} />

      <TestimonialSlider
        testimonials={testimonials}
        autoplayDelay={autoplayDelay}
      />
    </div>
  </section>
);

export default WhatItLikeToWorkWithUsWrapper;
