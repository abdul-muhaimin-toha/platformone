import HeadingBlock from './HeadingBlock';
import TestimonialSlider, { TestimonialData } from './TestimonialSlider';

import { BlockData, HeadingProps } from '../types';
import { getTestimonialsByIds } from '@/graphql/components/get-testimonials-data';

export interface WhatItLikeToWorkWithUsData extends HeadingProps {
  testimonial_lists?: TestimonialData[];
}

export type WhatItLikeToWorkWithUsWrapperProps =
  BlockData<WhatItLikeToWorkWithUsData>;

const WhatItLikeToWorkWithUsWrapper = async ({
  data,
}: WhatItLikeToWorkWithUsWrapperProps) => {
  const content = data?.data;
  if (!content) return null;

  const { title, short_description, testimonial_lists = [] } = content;

  const ids = testimonial_lists.map((item: any) => item.id).filter(Boolean);

  let dynamicTestimonials: TestimonialData[] = [];

  if (ids.length > 0) {
    const fetchedNodes = await getTestimonialsByIds(ids);

    dynamicTestimonials = fetchedNodes.map((node) => {
      const caseStudySlug =
        node.caseStyudy && node.caseStyudy.length > 0
          ? node.caseStyudy[0].slug
          : '';

      return {
        _id: node.id || '',
        btn_text: 'Read More',
        btn_url: caseStudySlug ? `/case-studies/${caseStudySlug}` : '',
        company_logo: node.logoFile,
        customer_image: node.uploadClientImage,
        short_description: node.clientDescription,
        user_designation: node.designation,
        user_name: node.title,
      };
    });
  }

  if (dynamicTestimonials.length === 0) return null;

  return (
    <section className="bg-white bg-linear-[90deg] from-[#E9C4DD99]/0 to-[#E9C4DD99]">
      <div className="flex flex-col w-full pt-32 lg:pb-20 pb-[88px] gap-24">
        {title && short_description && (
          <HeadingBlock title={title} description={short_description} />
        )}
        <TestimonialSlider testimonials={dynamicTestimonials} />
      </div>
    </section>
  );
};

export default WhatItLikeToWorkWithUsWrapper;
