import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import Image from 'next/image';
import Link from 'next/link';

function WhatWeDoWrapper() {
  return (
    <section>
      <div className="container-custom">
        <div className="w-full flex flex-col my-32">
          <div className="flex items-left flex-col justify-center lg:items-start text-left gap-10 md:gap-5 lg:gap-36 md:flex-row">
            <h2 className="text-[38px] sm:text-[56px] sm:leading-[1.28] font-bold leading-[1.26] md:w-full text-black">
              Insight starts with people.
            </h2>
            <p className="text-2xl font-normal md:w-full leading-[1.33] text-black xl:w-auto xl:max-w-xl">
              We turn real understanding into ideas that move you forward.
              Whether it’s shaping strategy, sparking innovation, or refining
              experience, we uncover the truths that drive action - and bring
              clarity to what comes next.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full pr-4">
          <div className="container-custom bg-yellow-300 pt-16 sm:pb-16 [@media(min-width:900px)]:pb-0">
            <div className="w-full flex flex-col gap-6 sm:gap-10 [@media(min-width:900px)]:flex-row [@media(min-width:900px)]:items-end justify-between">
              <div className="flex flex-col w-full [@media(min-width:900px)]:mb-16 [@media(min-width:1000px)]:max-w-[632px]">
                <h4 className="text-2xl font-semibold leading-[1.33] uppercase text-[#6C445F] tracking-[2px] mb-6">
                  Customer Experience
                </h4>
                <h3 className="text-[38px] font-bold leading-[1.47] text-black mb-2">
                  Your customers are talking. 
                </h3>
                <p className="text-[#D9225F] font-semibold text-2xl leading-[1.33] mb-8">
                  We help you hear what matters.
                </p>
                <p className="text-base font-normal leading-[1.37] mb-8">
                  Customer feedback is everywhere - but real understanding is
                  rare. We help you uncover what customers truly value - so you
                  can design products, services, and experiences that hit the
                  mark. Our Voice of Customer solutions go beyond feedback to
                  deliver sharp, human-first insight that drives relevance,
                  loyalty, and growth.
                </p>
                <Link
                  href="/"
                  className="text-base self-start inline-flex justify-center items-center gap-2 font-normal leading-[1.37] text-black"
                >
                  <ArrowRightIcon className="text-pulse-pink-700" />
                  <span>Turn feedback into action</span>
                </Link>
              </div>
              <Image
                className="aspect-338/335 w-full max-w-[400px] sm:mx-auto object-cover [@media(min-width:900px)]:mx-0 [@media(min-width:900px)]:max-w-[310px] [@media(min-width:1000px)]:min-w-[400px]"
                src="/home/what-we-do/card-1.png"
                alt="Card 1"
                width={338}
                height={335}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoWrapper;
