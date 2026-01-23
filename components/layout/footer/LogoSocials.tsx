import Link from 'next/link';
import Image from 'next/image';
import FacebookIcon from '@/components/icons/socials/FacebookIcon';
import InstagramIcon from '@/components/icons/socials/InstagramIcon';
import LinkedInIcon from '@/components/icons/socials/LinkedInIcon';

interface LogoSocialsProps {
  logoSrc: string;
  logoAlt: string;
  description: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export default function LogoSocials({
  logoSrc,
  logoAlt,
  description,
  socials,
}: LogoSocialsProps) {
  return (
    <div className="flex flex-col max-w-[416px] gap-8 w-full bg-white/8 p-6 rounded-2xl">
      {logoSrc && (
        <Image
          src={logoSrc}
          width={208}
          height={34}
          className="aspect-208/34"
          alt={logoAlt}
        />
      )}
      <p className="font-normal text-lg leading-[1.33] xl:leading-[100%] text-pulse-pink-300">
        {description}
      </p>
      <div className="flex text-pulse-pink-700 flex-row gap-3 items-center">
        {socials.facebook && (
          <Link href={socials.facebook} target="_blank">
            <FacebookIcon className="hover:text-pulse-pink-800 duration-300" />
          </Link>
        )}
        {socials.linkedin && (
          <Link href={socials.linkedin} target="_blank">
            <LinkedInIcon className="hover:text-pulse-pink-800 duration-300" />
          </Link>
        )}
        {socials.instagram && (
          <Link href={socials.instagram} target="_blank">
            <InstagramIcon className="hover:text-pulse-pink-800 duration-300" />
          </Link>
        )}
      </div>
    </div>
  );
}
