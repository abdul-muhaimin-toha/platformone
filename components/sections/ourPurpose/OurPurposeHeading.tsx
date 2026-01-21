import { FC } from 'react';
import { parseHighlights } from '@/utils/utils';
import { BlockData } from '../home/types';

export interface OurPurposeHeadingData {
  title?: string;
  description?: string;
}

export type OurPurposeHeadingProps = BlockData<OurPurposeHeadingData>;

const OurPurposeHeading: FC<OurPurposeHeadingProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const { title = '', description = '' } = content;

  return (
    <section>
      <div className="container-custom">
        <div
          data-aos="fade-up"
          className="flex items-left pt-24 lg:pt-32 xl:pb-32 flex-col justify-center lg:flex-row text-left gap-8 md:max-w-[600px] xl:gap-36 lg:max-w-max lg:items-center"
        >
          <div
            className="text-[28px] sm:text-[38px] lg:text-[32px] xl:text-[38px] inline-flex flex-col lg:w-1/2 font-bold leading-[1.26] text-black"
            dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
          />

          <div
            className="text-xl font-normal lg:w-1/2 text-black"
            dangerouslySetInnerHTML={{ __html: parseHighlights(description) }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurPurposeHeading;
