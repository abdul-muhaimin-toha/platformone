import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { TestimonialData } from './TestimonialSlider';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  data?: TestimonialData;
}

const TestimonialCard: FC<Props> = ({ data }) => {
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
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (descriptionRef.current) {
        setIsTruncated(
          descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight
        );
      }
    };

    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [short_description]);

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
        <div className="flex flex-col gap-1.5">
          <p
            ref={descriptionRef}
            className="text-xl font-medium md:text-base md:font-normal md:leading-[1.37] leading-[1.30] text-white line-clamp-[7]"
          >
            {short_description}
          </p>
          {isTruncated && (
            <Dialog>
              <DialogTrigger asChild>
                <button 
                   className="text-pulse-pink-200 hover:text-pulse-pink-100 transition-all self-start text-base font-normal cursor-pointer shadow-none"
                >
                   Read More
                </button>
              </DialogTrigger>
              <DialogContent 
                className="bg-pulse-pink-800 border-none text-white w-[95vw] md:max-w-[700px] h-[60vh] rounded-2xl p-0 overflow-hidden outline-none"
                data-lenis-prevent
              >
                <div className="h-full overflow-y-auto p-6 md:p-10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-track]:bg-transparent scrollbar-gutter-stable">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Testimonial by {user_name || 'Client'}</DialogTitle>
                    <DialogDescription>Full testimonial description and client details.</DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-6 md:gap-8 w-full min-h-full">
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
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-medium md:text-base md:font-normal md:leading-[1.37] leading-[1.30] text-white">
                        {short_description}
                      </p>
                    </div>

                    {customer_image && (user_name || user_designation) && (
                      <div className="flex w-full items-center gap-2.5 mt-auto pt-4">
                        <div className="flex items-center justify-center p-1.5 border-black/25 border-2 rounded-full">
                          <Image
                            src={customer_image}
                            width={64}
                            height={64}
                            className="aspect-square rounded-full shrink-0"
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
                </div>
              </DialogContent>
            </Dialog>
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
