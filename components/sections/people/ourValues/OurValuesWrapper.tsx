import Image from 'next/image';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../../home/types';
import { parseHighlights } from '@/utils/utils';

export interface OurValueItem {
  feature_icon?: string;
  value_title?: string;
  value_description?: string;
  bg_color?: string;
}

export interface OurValuesData extends HeadingProps {
  values?: OurValueItem[];
}

export type OurValuesWrapperProps = BlockData<OurValuesData>;

const OurValuesWrapper: FC<OurValuesWrapperProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const { title = '', values = [] } = content;

  const parsedTitle = parseHighlights(title);

  return (
    <section>
      <div className="container-custom">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center gap-6 py-28 xl:grid-cols-3 xl:py-32">
          {/* Heading */}
          <div className="w-full">
            <h2
              className="w-full text-[34px] md:text-[44px] xl:text-[56px] font-bold leading-[1.28] my-8"
              dangerouslySetInnerHTML={{ __html: parsedTitle }}
            />
          </div>

          {/* Cards */}
          {values.map((value, index) => (
            <div
              key={index}
              className="w-full flex flex-col rounded-2xl gap-10 p-10 md:p-6 lg:p-10"
              style={{ backgroundColor: value.bg_color || '#F9F9F9' }}
            >
              {value.feature_icon && (
                <Image
                  src={value.feature_icon}
                  className="aspect-70/70 object-contain"
                  width={70}
                  height={70}
                  alt={value.value_title || ''}
                />
              )}

              <div className="w-full flex flex-col gap-6">
                <h3 className="text-black text-[32px] font-semibold leading-normal">
                  {value.value_title}
                </h3>
                <p className="text-black text-xl font-normal leading-normal">
                  {value.value_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesWrapper;
