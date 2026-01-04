import Image from 'next/image';
import Link from 'next/link';

function TopInsightcard() {
  return (
    <div className="group w-full flex flex-col-reverse md:flex-row gap-6 pb-10 xl:pb-20 border-b border-b-border">
      <div className="flex flex-col">
        <h2 className="text-[32px] font-semibold md:font-normal xl:font-semibold md:text-2xl xl:text-[32px] leading-tight text-black mb-6 md:mb-2 xl:mb-6">
          From Feedback to Action: How to Turn Insights Into Measurable Growth
        </h2>
        <div className="flex flex-row items-center gap-1 text-base font-semibold leading-[1.37] text-pulse-pink-600">
          <Link
            href="/"
            className="hover:text-black duration-300 hover:underline"
          >
            Blog
          </Link>
          <p> • </p>
          <p>Insight Communities</p>
        </div>
        <div className="flex w-full items-center gap-4 mt-10 md:mt-auto">
          <div className="flex items-center justify-center rounded-full">
            <Image
              src="/home/work-with-us/avatar.png"
              width={56}
              height={56}
              className="aspect-square rounded-full w-14 md:w-12 xl:w-14"
              alt="User"
            />
          </div>
          <div className="flex flex-col gap-1 text-black">
            <p className="text-xl md:text-base xl:text-xl font-medium leading-[1.30]">
              Andrew Dye
            </p>
            <p className="text-base md:text-sm xl:text-base font-normal leading-[1.37] text-[#737373]">
              August 13, 2025
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:max-w-[536px] relative aspect-380/305 md:aspect-536/310 rounded-2xl shrink-0 overflow-hidden">
        <Image
          src="/insights/top-card.png"
          alt="Insight"
          className=" object-cover w-full h-full group-hover:scale-105 duration-300"
          fill
        />
      </div>
    </div>
  );
}

export default TopInsightcard;
