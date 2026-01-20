import { FC, forwardRef } from 'react';

interface CaseStudiesDetailsHeroSvgProps {
  className?: string;
}

const CaseStudiesDetailsHeroSvg = forwardRef<
  SVGSVGElement,
  CaseStudiesDetailsHeroSvgProps
>(({ className }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={641}
      height={630}
      viewBox="0 0 641 630"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M320.5 0C143.496 0 0 140.916 0 314.759C0 488.601 143.496 629.496 320.5 629.496C497.504 629.496 641 488.58 641 314.759C641 140.938 497.504 0 320.5 0ZM320.985 508.276C217.109 508.276 132.874 421.629 132.874 314.759C132.874 207.888 217.109 121.22 320.985 121.22C424.861 121.22 509.095 207.867 509.095 314.759C509.095 421.651 424.882 508.276 320.985 508.276Z"
        fill="url(#paint0_linear_2069_9817)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2069_9817"
          x1={0}
          y1="314.737"
          x2={641}
          y2="314.737"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ED29FF" />
          <stop offset={1} stopColor="#7386F5" />
        </linearGradient>
      </defs>
    </svg>
  );
});

CaseStudiesDetailsHeroSvg.displayName = 'CaseStudiesDetailsHeroSvg';

export default CaseStudiesDetailsHeroSvg;
