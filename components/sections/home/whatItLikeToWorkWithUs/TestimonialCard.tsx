import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { TestimonialData } from './TestimonialSlider';

interface Props {
  data?: TestimonialData;
}

const TestimonialCard: FC<Props> = ({ data }) => {
  // Hooks are always called
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (!textRef.current || !data?.short_description) return;

    const el = textRef.current;

    const checkOverflow = () => {
      // Remove clamp temporarily to measure full height
      el.classList.remove('line-clamp-5');
      const fullHeight = el.scrollHeight;
      el.classList.add('line-clamp-5');
      const clampedHeight = el.clientHeight;

      setShowButton(fullHeight > clampedHeight);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [data?.short_description]);

  // Early return JSX if no data
  if (!data) return null;

  const {
    company_logo,
    btn_url,
    btn_text,
    open_in_new_tab,
    short_description,
    customer_image,
    user_name,
    user_designation,
  } = data;

  return (
    <div className="flex relative flex-col overflow-hidden p-6 md:py-8 pb-16 md:pb-8 md:px-10 gap-10 w-full bg-pulse-pink-800 rounded-2xl md:gap-[30px]">
      {/* Top Section */}
      <div className="w-full justify-between flex flex-row items-center">
        {company_logo && (
          <Image
            src={company_logo}
            width={138}
            height={32}
            alt="Company Logo"
            className="aspect-138/32 object-contain"
          />
        )}

        {btn_url && btn_text && (
          <Link
            href={btn_url}
            target={open_in_new_tab ? '_blank' : undefined}
            rel={open_in_new_tab ? 'noopener noreferrer' : undefined}
            className="hidden md:inline-flex justify-center items-center gap-2 text-base font-normal leading-[100%] text-white hover:text-pulse-pink-200 duration-300"
          >
            <span>{btn_text}</span>
            <ArrowUpRight className="w-5 h-5 shrink-0" />
          </Link>
        )}
      </div>

      {/* Description */}
      {short_description && (
        <div className="text-white">
          <p
            ref={textRef}
            className={`text-xl font-medium md:text-base md:font-normal md:leading-[1.37] leading-[1.30] ${
              !isExpanded ? 'line-clamp-5' : ''
            }`}
          >
            {short_description}
          </p>

          {showButton && (
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="text-xl md:text-base font-medium md:font-normal md:leading-[1.37] leading-[1.30] text-pulse-pink-200 mt-1 underline underline-offset-4 hover:text-pulse-pink-100 transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      )}

      {/* User Info */}
      {customer_image && (user_name || user_designation) && (
        <div className="flex mt-auto w-full items-center gap-2.5">
          <div className="flex items-center justify-center p-1.5 border-black/25 border-2 rounded-full">
            <Image
              src={customer_image}
              width={64}
              height={64}
              className="aspect-square rounded-full"
              alt={user_name || 'User Avatar'}
            />
          </div>

          <div className="flex flex-col gap-1.5 text-white">
            {user_name && (
              <p className="text-base font-semibold leading-[1.37]">
                {user_name}
              </p>
            )}
            {user_designation && (
              <p className="text-base font-normal leading-[1.37]">
                {user_designation}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Mobile Button */}
      {btn_url && btn_text && (
        <Link
          className="absolute h-10 md:hidden bg-mulberry-900 text-white gap-2 text-base font-normal leading-[100%] hover:text-pulse-pink-200 duration-300 inline-flex justify-center items-center bottom-0 left-0 right-0"
          href={btn_url}
          target={open_in_new_tab ? '_blank' : undefined}
          rel={open_in_new_tab ? 'noopener noreferrer' : undefined}
        >
          Read Case Study
        </Link>
      )}
    </div>
  );
};

export default TestimonialCard;
