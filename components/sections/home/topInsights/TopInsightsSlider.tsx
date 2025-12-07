'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import InsightCard, { Insight } from './InsightCard';

interface TopInsightsSliderProps {
  insights: Insight[];
}

export default function TopInsightsSlider({
  insights,
}: TopInsightsSliderProps) {
  return (
    <div className="flex w-full flex-col items-stretch justify-stretch">
      <div className="container-custom">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          pagination={{
            el: '.custom-pagination-insights',
            clickable: true,
          }}
          navigation={{
            prevEl: '.custom-prev-insights',
            nextEl: '.custom-next-insights',
          }}
          autoplay={{ pauseOnMouseEnter: true }}
          breakpoints={{
            360: { slidesPerView: 1 },
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 1.4, spaceBetween: 40 },
            1000: { slidesPerView: 2.3, spaceBetween: 40 },
            1280: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="w-full overflow-hidden"
        >
          {insights.map((insight) => (
            <SwiperSlide
              key={insight.id}
              className="flex! h-auto! cursor-grab active:cursor-grabbing"
            >
              <InsightCard insight={insight} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop navigation */}
      <div className="container-custom hidden w-full justify-start gap-4 lg:flex mt-6 lg:mt-10">
        <button className="custom-prev-insights cursor-pointer text-mulberry-900/30 duration-300 hover:text-mulberry-900 w-12 h-12 inline-flex justify-center items-center rounded-full border border-[#DBD9DD] hover:border-[#DBD9DD] focus:border-[#DBD9DD]">
          <ChevronLeft />
        </button>
        <button className="custom-next-insights cursor-pointer text-mulberry-900/30 duration-300 hover:text-mulberry-900 w-12 h-12 inline-flex justify-center items-center rounded-full border border-[#DBD9DD] hover:border-[#DBD9DD] focus:border-[#DBD9DD]">
          <ChevronRight />
        </button>
      </div>

      {/* Mobile pagination */}
      <div className="container-custom lg:hidden py-1 mt-6 lg:mt-10">
        <div className="custom-pagination-insights dark flex items-center justify-center gap-2" />
      </div>
    </div>
  );
}
