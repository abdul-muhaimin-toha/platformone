import Image from 'next/image';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../home/types';
import { parseHighlights } from '@/utils/utils';

export interface CertificationShowcaseData extends HeadingProps {
  certification_image?: string;
}

export type CertificationShowcaseProps = BlockData<CertificationShowcaseData>;

const CertificationShowcase: FC<CertificationShowcaseProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const { certification_image = '', title = '', subtitle = '' } = content;

  return (
    <section className="bg-mulberry-950">
      <div className="container-custom">
        <div className="flex flex-col w-full py-20 gap-14">
          <div className="w-full flex items-left flex-col justify-center md:flex-row text-left gap-10 xl:gap-36 lg:max-w-full md:justify-between md:items-center xl:w-full">
            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              <h2
                className="text-[38px] xl:text-[56px] xl:leading-[1.28] font-bold leading-[1.26] text-white"
                dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
              />
              <p className="text-xl xl:font-2xl font-semibold leading-[1.33] text-pulse-pink-300">
                {subtitle}
              </p>
            </div>
            {certification_image && (
              <Image
                className="aspect-268/112 w-[200px] md:w-[268px] object-contain"
                alt={title.replace(/<[^>]*>/g, '')}
                src={certification_image}
                width={268}
                height={112}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationShowcase;
