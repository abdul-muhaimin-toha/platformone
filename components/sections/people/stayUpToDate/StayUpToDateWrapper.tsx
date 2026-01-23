import StayUpToDateHeader from './StayUpToDateHeader';
import StayUpToDateImages from './StayUpToDateImages';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../../home/types';
export interface StayUpToDateItem {
  feature_image: string;
}

export interface StayUpToDateData extends HeadingProps {
  up_to_date?: StayUpToDateItem[];
}

export type StayUpToDateWrapperProps = BlockData<StayUpToDateData>;

const StayUpToDateWrapper: FC<StayUpToDateWrapperProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    title = '',
    subtitle = '',
    short_description = '',
    up_to_date = [],
  } = content;

  const images = up_to_date.map((img) => ({
    src: img.feature_image,
    alt: title.replace(/<[^>]*>/g, ''),
  }));
  return (
    <section className="bg-mulberry-900">
      <div className="container-custom">
        <div className="flex flex-col w-full py-20 gap-14">
          <StayUpToDateHeader
            title={title}
            subtitle={subtitle}
            description={short_description}
          />
          <StayUpToDateImages images={images} />
        </div>
      </div>
    </section>
  );
};

export default StayUpToDateWrapper;
