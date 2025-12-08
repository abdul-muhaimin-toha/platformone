'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

type ButtonProps = {
  href?: string; // <- now optional
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
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
    'inline-flex items-center justify-center shrink-0 duration-300';

  const variants: Record<string, string> = {
    primary:
      'h-14 w-fit py-2 px-6 text-xl leading-normal font-semibold rounded-full text-white bg-pulse-pink-600 hover:bg-pulse-pink-700 duration-800',
    secondary:
      'group h-10 w-fit px-4 py-2 text-base font-semibold leading-normal gap-2 rounded-[40px] bg-mulberry-900 hover:bg-mulberry-950 text-white inline-flex',
    tertiary:
      'group text-base font-normal w-fit leading-normal inline-flex items-center gap-2 text-black',
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

      <span>{children}</span>
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
