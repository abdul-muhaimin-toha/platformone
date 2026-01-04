'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react';
import clsx from 'clsx';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'primary-arrow' | 'back';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center shrink-0 duration-300 cursor-pointer';

  const variants: Record<string, string> = {
    primary:
      'h-14 w-fit py-2 px-6 text-xl leading-normal font-semibold rounded-full text-white bg-pulse-pink-600 hover:bg-pulse-pink-700 duration-800',
    'primary-arrow':
      'h-14 w-fit py-2 px-6 text-xl leading-normal font-semibold rounded-full text-white bg-pulse-pink-600 hover:bg-pulse-pink-700 duration-800',
    secondary:
      'group h-10 w-fit px-4 py-2 text-base font-semibold leading-normal gap-2 rounded-[40px] bg-mulberry-900 hover:bg-mulberry-950 text-white inline-flex',
    tertiary:
      'group text-base font-normal w-fit leading-normal inline-flex items-center gap-2 text-black',

    back: 'group h-10 bg-transparent w-fit py-2 pl-2 pr-3 text-base leading-normal font-normal rounded-full text-[#000000] hover:text-white hover:bg-pulse-pink-700 duration-800 border border border-border',
  };

  const content = (
    <>
      {variant === 'secondary' && (
        <div className="relative shrink-0 w-2 h-2 transition-all duration-300 origin-center group-hover:w-5 group-hover:h-5">
          <div className="absolute inset-0 rounded-full border-2 border-white bg-transparent transition-all duration-300 origin-center group-hover:bg-white" />
          <ArrowRight className="absolute inset-0 w-4 h-4 text-pulse-pink-700 m-auto opacity-0 transition-all duration-300 origin-center group-hover:opacity-100" />
        </div>
      )}

      {variant === 'tertiary' && (
        <div className="inline-flex items-center justify-center h-6 w-6 bg-[#E8006D29] rounded-full group-hover:bg-pulse-pink-700 duration-300">
          <ArrowRight className="text-pulse-pink-700 w-4 h-4 group-hover:text-white shrink-0 duration-300" />
        </div>
      )}

      {variant === 'back' && (
        <div className="inline-flex items-center justify-center h-6 w-6 duration-300 text-inherit">
          <ChevronLeft className="text-inherit size-5 shrink-0 duration-800" />
        </div>
      )}

      <span>{children}</span>

      {variant === 'primary-arrow' && (
        <div className="inline-flex items-center justify-center">
          <svg
            className="shrink-0 ml-4"
            width={13}
            height={13}
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6406 0H12.5781V0.9375V10.3125V11.25H10.7031V10.3125V3.20312L1.99219 11.9141L1.32812 12.5781L0 11.25L0.664062 10.5859L9.375 1.875H2.26562H1.32812V0H2.26562H11.6406Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </>
  );

  // 👉 If href exists → Link
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(baseStyles, variants[variant], className)}
      >
        {content}
      </Link>
    );
  }

  // 👉 If no href → real <button>
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {content}
    </button>
  );
}
