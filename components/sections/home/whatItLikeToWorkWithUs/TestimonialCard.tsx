import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Testimonial } from "./TestimonialSlider";

const TestimonialCard: FC<Testimonial> = ({
  logo,
  logoAlt,
  linkHref,
  linkLabel,
  message,
  avatar,
  avatarAlt,
  name,
  position,
}) => (
  <div className="flex flex-col p-6 md:py-8 md:px-10 gap-10 w-full bg-pulse-pink-800 rounded-2xl md:gap-[30px]">
    {/* Top */}
    <div className="w-full justify-between flex flex-row items-center">
      <Image
        src={logo}
        width={138}
        height={32}
        alt={logoAlt}
        className="aspect-138/32 object-contain"
      />
      <Link
        href={linkHref}
        className="inline-flex justify-center items-center gap-2 text-base font-normal leading-[100%] text-white hover:text-pulse-pink-200 duration-300"
      >
        <span>{linkLabel}</span>
        <ArrowUpRight className="w-5 h-5 shrink-0" />
      </Link>
    </div>

    {/* Message */}
    <p className="text-xl font-medium md:text-base md:font-normal md:leading-[1.37] leading-[1.30] text-white">
      {message}
    </p>

    {/* Avatar */}
    <div className="flex w-full items-center gap-2.5">
      <div className="flex items-center justify-center p-1.5 border-black/25 border-2 rounded-full">
        <Image
          src={avatar}
          width={64}
          height={64}
          className="aspect-square rounded-full"
          alt={avatarAlt}
        />
      </div>
      <div className="flex flex-col gap-1.5 text-white">
        <p className="text-base font-semibold leading-[1.37]">{name}</p>
        <p className="text-base font-normal leading-[1.37]">{position}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
