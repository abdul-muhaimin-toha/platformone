import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { TestimonialData } from './TestimonialSlider';

interface Props {
  data?: TestimonialData;
}

const TestimonialCard: FC<Props> = ({ data }) => {
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
    <div className="flex flex-col p-6 md:py-8 md:px-10 gap-10 w-full bg-pulse-pink-800 rounded-2xl md:gap-[30px]">
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
            className="inline-flex justify-center items-center gap-2 text-base font-normal leading-[100%] text-white hover:text-pulse-pink-200 duration-300"
          >
            <span>{btn_text}</span>
            <ArrowUpRight className="w-5 h-5 shrink-0" />
          </Link>
        )}
      </div>

      {short_description && (
        <p className="text-xl font-medium md:text-base md:font-normal md:leading-[1.37] leading-[1.30] text-white">
          {short_description}
        </p>
      )}

      {customer_image && (user_name || user_designation) && (
        <div className="flex w-full items-center gap-2.5">
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
    </div>
  );
};

export default TestimonialCard;
