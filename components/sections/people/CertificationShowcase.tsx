'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { BlockData, HeadingProps } from '../home/types';
import { parseHighlights } from '@/utils/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export interface CertificationItem {
  _id: string;
  certification_image: string;
}

export interface CertificationShowcaseData extends HeadingProps {
  certifications?: CertificationItem[];
}

export type CertificationShowcaseProps = BlockData<CertificationShowcaseData>;

const CertificationShowcase: FC<CertificationShowcaseProps> = ({ data }) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const content = data?.data;
  if (!content) return null;

  const {
    certifications = [],
    title = '',
    subtitle = '',
    short_description = '',
  } = content;

  return (
    <section className="bg-mulberry-950 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col w-full py-20 gap-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <h2
              className="text-[38px] xl:text-[56px] xl:leading-[1.28] font-bold leading-[1.26] text-white"
              dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
            />
            {subtitle && (
              <p className="text-xl xl:text-2xl font-semibold leading-[1.33] text-pulse-pink-300">
                {subtitle}
              </p>
            )}
            {short_description && (
              <p className="text-lg text-white/80 mt-4 max-w-2xl">
                {short_description}
              </p>
            )}
          </div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-start lg:justify-end gap-5 xl:gap-10">
            {certifications.length > 0 && (
              <>
                {certifications.length > 1 && (
                  <button
                    ref={(node) => setPrevEl(node)}
                    className={`hidden sm:flex cursor-pointer shrink-0 z-10 disabled:opacity-30 ${certifications.length <= 2 ? 'opacity-0 pointer-events-none' : ''}`}
                    aria-label="Previous slide"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        fill="#47102A"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#FFF0F9"
                      />
                      <path
                        d="M22.2929 13.2929C22.6834 12.9024 23.3164 12.9024 23.707 13.2929C24.0975 13.6834 24.0975 14.3164 23.707 14.707L18.414 19.9999L23.707 25.2929C24.0975 25.6834 24.0975 26.3164 23.707 26.707C23.3164 27.0975 22.6834 27.0975 22.2929 26.707L16.2929 20.707C15.9024 20.3164 15.9024 19.6834 16.2929 19.2929L22.2929 13.2929Z"
                        fill="#FFF0F9"
                      />
                    </svg>
                  </button>
                )}

                <Swiper
                  modules={[Autoplay, Navigation]}
                  slidesPerView={1.2}
                  spaceBetween={20}
                  loop={certifications.length > 2}
                  navigation={{
                    prevEl,
                    nextEl,
                  }}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: Math.min(certifications.length, 2),
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: Math.min(certifications.length, 2),
                      spaceBetween: 40,
                    },
                  }}
                  className={`!mx-0 w-full ${certifications.length === 1 ? 'max-w-[268px]' : 'max-w-[576px]'} flex-1`}
                >
                  {certifications.map((item) => (
                    <SwiperSlide
                      key={item._id}
                      className="flex items-center justify-start lg:justify-end"
                    >
                      <div className="relative w-full aspect-[268/112]">
                        <Image
                          className="object-contain"
                          alt="Certification"
                          src={item.certification_image}
                          fill
                          sizes="(max-width: 768px) 50vw, 268px"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {certifications.length > 1 && (
                  <button
                    ref={(node) => setNextEl(node)}
                    className={`hidden sm:flex cursor-pointer shrink-0 z-10 disabled:opacity-30 ${certifications.length <= 2 ? 'opacity-0 pointer-events-none' : ''}`}
                    aria-label="Next slide"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        fill="#47102A"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#FFF0F9"
                    />
                    <path
                      d="M16.2929 13.2929C16.6834 12.9024 17.3164 12.9024 17.707 13.2929L23.707 19.2929C24.0975 19.6834 24.0975 20.3164 23.707 20.707L17.707 26.707C17.3164 27.0975 16.6834 27.0975 16.2929 26.707C15.9024 26.3164 15.9024 25.6834 16.2929 25.2929L21.5859 19.9999L16.2929 14.707C15.9024 14.3164 15.9024 13.6834 16.2929 13.2929Z"
                      fill="#FFF0F9"
                    />
                  </svg>
                </button>
              )}
            </>
          )}
        </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationShowcase;
