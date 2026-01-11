'use client';

import Image from 'next/image';
import { FC } from 'react';

interface CustomerExperienceProps {
  data?: {
    data?: {
      top_title?: string;
      title?: string;
      subtitle?: string;
      short_description?: string;
      feature_image?: string;
    };
  };
}

const CustomerExperience: FC<CustomerExperienceProps> = ({ data }) => {
  const content = data?.data ?? {};

  const { top_title, title, subtitle, short_description, feature_image } =
    content;

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
                <svg
                  className="absolute -bottom-[57px] w-[515px] h-[104px] sm:-right-16 md:-right-20 md:-bottom-[60px] lg:w-[600px] lg:h-[122px] lg:-bottom-[73px] lg:-right-[150px] 2xl:-right-10"
                  width={450}
                  height={122}
                  viewBox="0 0 450 122"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M602.644 0H0V122.404H602.644V0Z"
                    fill="url(#paint0_linear_2287_7082)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2287_7082"
                      x1={0}
                      y1="61.2"
                      x2="602.644"
                      y2="61.2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E13FAB" />
                      <stop offset={1} stopColor="#EB335B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerExperience;
