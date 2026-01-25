import { cn, parseHighlights } from '@/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../home/types';
import SideBySideSvg from './SideBySideSvg';

export interface SideBySideData extends HeadingProps {
  highlight_text?: string;
  feature_image?: string;
  content_type?: 'left' | 'right';
  select_version?: string;
}

export type SideBySideProps = BlockData<SideBySideData>;

const SideBySide: FC<SideBySideProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    title = '',
    highlight_text = '',
    short_description = '',
    feature_image = '',
    content_type = 'left',
    select_version,
  } = content;

  return (
    <section className="relative overflow-hidden">
      <div className="container-custom">
        <div
          className={cn(
            'w-full flex flex-col z-20 gap-16 md:gap-6 lg:gap-16 md:justify-between  pt-[168px] pb-14  items-start md:items-center justify-center',
            content_type === 'right'
              ? 'flex-col-reverse md:flex-row-reverse pb-32 xl:pt-32'
              : 'flex-col md:flex-row pb-14',
            select_version === 'v2' && 'pb-32! pt-[168px]!',
          )}
        >
          {/* Text Content */}
          <div className="w-full flex flex-col max-w-[480px] md:max-w-max">
            <h1
              className="text-[38px] font-bold leading-[1.26] text-black mb-10"
              dangerouslySetInnerHTML={{
                __html:
                  parseHighlights(title) +
                  (highlight_text
                    ? ` <span class="text-pulse-pink-600">${parseHighlights(highlight_text)}</span>`
                    : ''),
              }}
            />
            <p className="text-xl font-normal text-black max-w-[578px] leading-[27px]">
              {short_description}
            </p>
          </div>

          {/* Image */}
          {feature_image && (
            <div
              data-aos={content_type === 'right' ? 'fade-right' : undefined}
              className="w-full relative aspect-380/236 md:aspect-644/400 lg:max-w-[644px]"
            >
              <Image
                fill
                src={feature_image}
                alt={title.replace(/<[^>]*>/g, '') || 'Side by side image'}
                className="object-cover w-full"
              />
            </div>
          )}
        </div>
      </div>
      {content_type === 'right' && <SideBySideSvg />}
    </section>
  );
};

export default SideBySide;
