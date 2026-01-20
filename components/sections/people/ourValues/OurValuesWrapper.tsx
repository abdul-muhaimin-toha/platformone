import Image from 'next/image';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../../home/types';

export interface OurValueCard {
  icon: string;
  icon_alt?: string;
  title: string;
  short_description: string;
  bg_color: string;
}

export interface OurValuesData extends HeadingProps {
  highlight_text?: string;
  value_items?: OurValueCard[];
}

export type OurValuesWrapperProps = BlockData<OurValuesData>;

const OurValuesWrapper: FC<OurValuesWrapperProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    title = '',
    highlight_text = '',
    value_items = [],
  } = content;
  return (
    <section>
      <div className="container-custom">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center gap-6 py-28 xl:grid-cols-3 xl:py-32">
          {/* Heading */}
          <div className="w-full">
            <h2 className="w-full text-[56px] font-bold leading-[1.28] my-8">
              {title}{' '}
              <span className="text-pulse-pink-600">{highlight_text}</span>
            </h2>
          </div>

          {/* Cards */}
          {value_items.map((value, index) => (
            <div
              key={index}
              className="w-full flex flex-col rounded-2xl gap-10 p-10 md:p-6 lg:p-10"
              style={{ backgroundColor: value.bg_color }}
            >
              {value.icon && (
                <Image
                  src={value.icon}
                  className="aspect-70/70 object-contain"
                  width={70}
                  height={70}
                  alt={value.icon_alt || ''}
                />
              )}

              <div className="w-full flex flex-col gap-6">
                <h3 className="text-black text-[32px] font-semibold leading-normal">
                  {value.title}
                </h3>
                <p className="text-black text-xl font-normal leading-normal">
                  {value.short_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValuesWrapper;
