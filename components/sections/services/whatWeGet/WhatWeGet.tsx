"use client";

import { FC, useRef } from "react";
import WhatWeGetCard, { WhatWeGetCardProps } from "./WhatWeGetCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface HighlightLineWidth {
  base: string;
  md: string;
}

interface WhatWeGetProps {
  version?: "v1" | "v2";
  title: string;
  highlightLineWidth?: HighlightLineWidth;
  cards: WhatWeGetCardProps[];
  closingText: string;
  closingHighlight: string;
}

const WhatWeGet: FC<WhatWeGetProps> = ({
  version = "v1",
  title,
  highlightLineWidth,
  cards,
  closingText,
  closingHighlight,
}) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    // Animate span underline
    if (spanRef.current) {
      gsap.fromTo(
        spanRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: spanRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Mouse-parallax for SVG (v1 only)
    if (version === "v1" && svgRef.current && sectionRef.current) {
      const svg = svgRef.current;
      const section = sectionRef.current;

      gsap.set(svg, {
        x: 0,
        y: 0,
        rotate: 0,
        transformOrigin: "50% 50%",
      });

      const moveStrength = 18; // px
      const rotateStrength = 4; // deg

      const qx = gsap.quickTo(svg, "x", { duration: 0.6, ease: "power3.out" });
      const qy = gsap.quickTo(svg, "y", { duration: 0.6, ease: "power3.out" });
      const qrot = gsap.quickTo(svg, "rotate", {
        duration: 0.6,
        ease: "power3.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
        const bounds = section.getBoundingClientRect();
        const relX = ((e.clientX - bounds.left) / bounds.width - 0.5) * 2; // -1 to 1
        const relY = ((e.clientY - bounds.top) / bounds.height - 0.5) * 2;

        qx(relX * moveStrength);
        qy(relY * moveStrength);
        qrot(relX * rotateStrength);
      };

      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  });

  return (
    <section ref={sectionRef} className="bg-mulberry-950 relative">
      <div className="container-custom">
        <div className="w-full z-20 flex flex-col gap-16 py-32 items-center justify-center">
          {/* Title with animated underline */}
          <h2 className="text-white w-full md:gap-3 flex-row flex items-center text-[38px] md:text-[56px] md:leading-[1.28] font-bold gap-2 leading-[1.26]">
            <span>{title}</span>
            <span
              ref={spanRef}
              className={cn(
                "inline-flex rounded-[3px] h-2 md:h-3 bg-linear-[90deg] from-pulse-pink-700/0 to-pulse-pink-700",
                highlightLineWidth?.base && `w-[${highlightLineWidth.base}]`,
                highlightLineWidth?.md && `md:w-[${highlightLineWidth.md}]`
              )}
            />
          </h2>

          {/* Cards */}
          <div className="grid w-full gap-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {cards.map((card, index) => (
              <WhatWeGetCard key={index} {...card} />
            ))}
          </div>

          {/* Closing text */}
          <h2
            data-aos="fade-up"
            className={cn(
              "text-white w-full text-[38px] self-start lg:text-[56px] lg:leading-[1.28] font-bold gap-2 leading-[1.26]",
              version === "v2" && "max-w-[800px] lg:max-w-[950px]"
            )}
          >
            {closingText}{" "}
            <span className="text-pulse-pink-600">{closingHighlight}</span>
          </h2>
        </div>
      </div>

      {/* V1 SVG */}
      {version === "v1" && (
        <svg
          ref={svgRef}
          className="absolute z-20 aspect-423/415 h-auto w-[350px] xl:w-[640px] -top-[120px]  -right-[200px] xl:-top-56 xl:-right-[478px]"
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

export default WhatWeGet;
