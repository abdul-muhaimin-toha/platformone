import Button from '@/components/globals/Button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

function TopInsightcard({ version = 'v1' }) {
  return (
    <div
      className={cn(
        'group w-full  md:flex-row gap-6 pb-10 xl:pb-20 border-b border-b-border',
        version === 'v1'
          ? 'flex flex-col-reverse pb-10 xl:pb-20'
          : 'grid grid-cols-1  pb-20 md:grid-cols-2 lg:flex lg:flex-row'
      )}
    >
      {version === 'v2' && (
        <div className="w-full flex flex-col md:col-span-2 lg:max-w-[211px] border-r border-transparent md:pr-2 xl:max-w-[248px] xl:pr-6">
          <Button variant="back">Back</Button>
        </div>
      )}
      <div
        className={cn(
          'flex flex-col',
          version === 'v1'
            ? ''
            : 'row-start-3 md:col-start-1 md:row-start-2 xl:max-w-[456px]'
        )}
      >
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
        <div
          className={cn(
            'flex w-full items-center gap-4 mt-10 md:mt-auto',
            version === 'v1' ? '' : 'md:mt-8 md:mb-8 xl:my-10'
          )}
        >
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
        {version === 'v2' && (
          <div className="w-full flex flex-row items-center text-base font-normal leading-[1.37] text-[#000000] gap-2.5 mt-20 md:mt-auto">
            <p>Share this article on:</p>
            <button className="text-black hover:text-mulberry-950 duration-300 cursor-pointer">
              <svg
                className="shrink-0"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9C18 13.6055 14.5195 17.4023 10.0898 17.9648V11.7773H12.5156L13.0078 9H10.0898V8.05078C10.0898 6.57422 10.6523 6.01172 12.1289 6.01172C12.5859 6.01172 12.9375 6.04688 13.1484 6.04688V3.58594C12.7617 3.44531 11.7773 3.33984 11.2148 3.33984C8.19141 3.33984 6.82031 4.78125 6.82031 7.83984V9H4.95703V11.7773H6.82031V17.7539C2.88281 16.7695 0 13.2188 0 9C0 4.04297 4.00781 0 9 0C13.957 0 18 4.04297 18 9Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="text-black hover:text-mulberry-950 duration-300 cursor-pointer">
              <svg
                className="shrink-0"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.625 0C15.2227 0 15.75 0.527344 15.75 1.16016V14.625C15.75 15.2578 15.2227 15.75 14.625 15.75H1.08984C0.492188 15.75 0 15.2578 0 14.625V1.16016C0 0.527344 0.492188 0 1.08984 0H14.625ZM4.74609 13.5V6.01172H2.42578V13.5H4.74609ZM3.58594 4.95703C4.32422 4.95703 4.92188 4.35938 4.92188 3.62109C4.92188 2.88281 4.32422 2.25 3.58594 2.25C2.8125 2.25 2.21484 2.88281 2.21484 3.62109C2.21484 4.35938 2.8125 4.95703 3.58594 4.95703ZM13.5 13.5V9.38672C13.5 7.38281 13.043 5.80078 10.6875 5.80078C9.5625 5.80078 8.78906 6.43359 8.47266 7.03125H8.4375V6.01172H6.22266V13.5H8.54297V9.80859C8.54297 8.82422 8.71875 7.875 9.94922 7.875C11.1445 7.875 11.1445 9 11.1445 9.84375V13.5H13.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="text-black hover:text-mulberry-950 duration-300 cursor-pointer">
              <svg
                className="shrink-0"
                width={17}
                height={15}
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7617 0H15.2227L9.80859 6.22266L16.207 14.625H11.2148L7.27734 9.52734L2.8125 14.625H0.316406L6.11719 8.01562L0 0H5.13281L8.64844 4.67578L12.7617 0ZM11.8828 13.1484H13.2539L4.39453 1.40625H2.91797L11.8828 13.1484Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="text-black hover:text-mulberry-950 duration-300 cursor-pointer">
              <svg
                className="shrink-0"
                width={18}
                height={14}
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 1.6875C1.93359 1.6875 1.6875 1.96875 1.6875 2.25V3.05859L7.73438 8.01562C8.47266 8.61328 9.49219 8.61328 10.2305 8.01562L16.3125 3.05859V2.25C16.3125 1.96875 16.0312 1.6875 15.75 1.6875H2.25ZM1.6875 5.23828V11.25C1.6875 11.5664 1.93359 11.8125 2.25 11.8125H15.75C16.0312 11.8125 16.3125 11.5664 16.3125 11.25V5.23828L11.3203 9.31641C9.94922 10.4414 8.01562 10.4414 6.67969 9.31641L1.6875 5.23828ZM0 2.25C0 1.01953 0.984375 0 2.25 0H15.75C16.9805 0 18 1.01953 18 2.25V11.25C18 12.5156 16.9805 13.5 15.75 13.5H2.25C0.984375 13.5 0 12.5156 0 11.25V2.25Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div
        className={cn(
          'w-full md:w-1/2 xl:max-w-[536px] relative aspect-380/305 md:aspect-536/310 rounded-2xl shrink-0 overflow-hidden',
          version === 'v1'
            ? ''
            : 'md:col-start-2 md:w-full md:h-full lg:h-auto lg:w-2/5 xl:max-w-[440px] xl:aspect-440/367'
        )}
      >
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
