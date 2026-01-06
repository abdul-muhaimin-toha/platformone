import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface SideBySideProps {
  contentSide?: "left" | "right";
  heading: string;
  highlightedText?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const SideBySide: FC<SideBySideProps> = ({
  contentSide = "left",
  heading,
  highlightedText,
  description,
  imageSrc,
  imageAlt,
  className = "",
}) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-custom">
        <div
          className={cn(
            className,
            "w-full flex flex-col z-20 gap-16 md:gap-6 lg:gap-16 md:justify-between  pt-[168px]  items-start md:items-center justify-center",
            contentSide === "right"
              ? "flex-col-reverse md:flex-row-reverse pb-32"
              : "flex-col md:flex-row pb-14"
          )}
        >
          {/* Text Content */}
          <div className="w-full flex flex-col max-w-[480px] md:max-w-max">
            <h1 className="text-[38px] font-bold leading-[1.26] text-black mb-10">
              {heading}{" "}
              {highlightedText && (
                <span className="text-pulse-pink-600">{highlightedText}</span>
              )}
            </h1>
            <p className="text-xl font-normal text-black max-w-[578px] leading-[100%]">
              {description}
            </p>
          </div>

          {/* Image */}
          <div
            data-aos={contentSide === "right" && "fade-right"}
            className="w-full relative aspect-380/236 md:aspect-644/400 lg:max-w-[644px]"
          >
            <Image
              fill
              src={imageSrc}
              alt={imageAlt}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
      {contentSide == "right" && (
        <svg
          data-aos={contentSide === "right" && "fade-left"}
          data-aos-delay="1500"
          className="absolute top-20 z-10 -left-[200px] aspect-423/415 h-auto w-[350px] md:w-[423px] md:-left-[300px] md:top-1/2 md:-translate-y-1/2 xl:w-[640px] xl:-left-[460px]"
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
              <stop stopColor="#E13FAB" />
              <stop offset={1} stopColor="#EB335B" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </section>
  );
};

export default SideBySide;
