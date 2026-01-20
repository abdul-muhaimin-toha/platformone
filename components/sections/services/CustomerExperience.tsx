'use client';

import Image from 'next/image';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../home/types';
import CustomerExperienceSvg from './CustomerExperienceSvg';

export interface CustomerExperienceData extends HeadingProps {
  top_title?: string;
  feature_image?: string;
}

export type CustomerExperienceProps = BlockData<CustomerExperienceData>;

const CustomerExperience: FC<CustomerExperienceProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    top_title = '',
    title = '',
    subtitle = '',
    short_description = '',
    feature_image = '',
  } = content;

  return (
    <section>
      <div className="bg-pulse-pink-50 rounded-bl-[64px]">
        <div className="container-custom">
          <div
            data-aos="fade-up"
            className="w-full flex flex-col z-50 gap-20 md:flex-row md:gap-10 md:justify-between pt-[186px] pb-8 lg:pb-3 lg:pt-[150px] items-center justify-center"
          >
            {/* Text Content */}
            <div className="w-full flex flex-col md:max-w-[578px]">
              {top_title && (
                <p className="text-xl lg:text-2xl lg:leading-[1.33] font-semibold leading-[1.30] text-pulse-pink-700 mb-2">
                  {top_title}
                </p>
              )}
              {(title || subtitle) && (
                <h1 className="text-[38px] font-bold leading-[1.26] lg:text-[56px] lg:leading-[1.28] text-black mb-10">
                  {title || subtitle}
                </h1>
              )}
              {short_description && (
                <p className="text-xl font-normal text-black leading-[100%]">
                  {short_description}
                </p>
              )}
            </div>

            {/* Image + SVG */}
            {feature_image && (
              <div className="w-full relative md:max-w-[440px] aspect-380/365">
                <Image
                  fill
                  src={feature_image}
                  alt={top_title || 'Header image'}
                  className="object-cover z-20 rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
                <CustomerExperienceSvg />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerExperience;
