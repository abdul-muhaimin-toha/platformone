'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

interface Props {
  testimonials: Testimonial[];
  autoplayDelay: number;
}

export interface Testimonial {
  logo: string;
  logoAlt: string;
  linkHref: string;
  linkLabel: string;
  message: string;
  avatar: string;
  avatarAlt: string;
  name: string;
  position: string;
}

const TestimonialSlider: FC<Props> = ({ testimonials, autoplayDelay }) => (
  <div className="flex w-full flex-col gap-6 lg:gap-10 items-stretch justify-stretch">
    <div className="slider-container">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop
        pagination={{ el: '.custom-pagination-client', clickable: true }}
        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
        autoplay={{ delay: autoplayDelay, pauseOnMouseEnter: true }}
        breakpoints={{
          360: { slidesPerView: 1 },
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 1.4, spaceBetween: 20 },
          1024: { slidesPerView: 2.3, spaceBetween: 20 },
          1280: { slidesPerView: 2.4, spaceBetween: 40 },
          1536: { slidesPerView: 3.3, spaceBetween: 40 },
        }}
        className="w-full overflow-hidden"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="flex! h-auto! cursor-grab active:cursor-grabbing"
          >
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Desktop navigation */}
    <div className="container-custom hidden w-full justify-start gap-4 lg:flex">
      <button className="custom-prev cursor-pointer text-mulberry-900/30 duration-300 hover:text-mulberry-900 w-12 h-12 inline-flex justify-center items-center rounded-full border border-[#DBD9DD] hover:border-[#DBD9DD] focus:border-[#DBD9DD]">
        <ChevronLeft />
      </button>
      <button className="custom-next cursor-pointer text-mulberry-900/30 duration-300 hover:text-mulberry-900 w-12 h-12 inline-flex justify-center items-center rounded-full border border-[#DBD9DD] hover:border-[#DBD9DD] focus:border-[#DBD9DD]">
        <ChevronRight />
      </button>
    </div>

    {/* Mobile pagination */}
    <div className="container-custom lg:hidden py-1">
      <div className="custom-pagination-client dark flex items-center justify-center gap-2" />
    </div>
  </div>
);

export default TestimonialSlider;
