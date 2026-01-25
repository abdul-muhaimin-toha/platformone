import StayUpToDateHeader from './StayUpToDateHeader';
import StayUpToDateImages from './StayUpToDateImages';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../../home/types';
import Script from 'next/script';
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

  const { title = '', subtitle = '', short_description = '' } = content;

  const elfsightAppScript = process.env.NEXT_PUBLIC_ELFSIGHT_APP_SCRIPT;
  const elfsightAppClass = process.env.NEXT_PUBLIC_ELFSIGHT_APP_CLASS;

  return (
    <section className="bg-mulberry-900">
      <div className="container-custom">
        <div className="flex flex-col w-full py-20 gap-14">
          <StayUpToDateHeader
            title={title}
            subtitle={subtitle}
            description={short_description}
          />
          <Script
            src={elfsightAppScript}
            strategy="lazyOnload"
          />

          {elfsightAppClass && (
            <div className={elfsightAppClass} />
          )}
        </div>
      </div>
    </section>
  );
};

export default StayUpToDateWrapper;
