import Image from "next/image";
import FacebookIcon from "@/components/icons/socials/FacebookIcon";
import InstagramIcon from "@/components/icons/socials/InstagramIcon";
import LinkedInIcon from "@/components/icons/socials/LinkedInIcon";

interface LogoSocialsProps {
  logoSrc: string;
  logoAlt: string;
  description: string;
  socials?: React.ReactNode[];
}

export default function LogoSocials({
  logoSrc,
  logoAlt,
  description,
  socials = [
    <FacebookIcon
      key="fb"
      className="hover:text-pulse-pink-800 duration-300"
    />,
    <LinkedInIcon
      key="li"
      className="hover:text-pulse-pink-800 duration-300"
    />,
    <InstagramIcon
      key="ig"
      className="hover:text-pulse-pink-800 duration-300"
    />,
  ],
}: LogoSocialsProps) {
  return (
    <div className="flex flex-col max-w-[416px] gap-8 w-full bg-white/8 p-6 rounded-2xl">
      <Image
        src={logoSrc}
        width={208}
        height={34}
        className="aspect-208/34"
        alt={logoAlt}
      />
      <p className="font-normal text-lg leading-[1.33] xl:leading-[100%] text-pulse-pink-300">
        {description}
      </p>
      <div className="flex text-pulse-pink-700 flex-row gap-3 items-center">
        {socials}
      </div>
    </div>
  );
}
