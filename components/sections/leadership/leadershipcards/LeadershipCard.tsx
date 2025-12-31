import Image from 'next/image';
import Button from '@/components/globals/Button';
import { cn } from '@/lib/utils';

export interface LeadershipPerson {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}

function LeadershipCard({ name, role, image, linkedinUrl }: LeadershipPerson) {
  return (
    <div
      data-aos="fade-up"
      className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-white"
    >
      {/* Image Section */}
      <div className="relative w-full min-h-[286px] bg-[#FFF0F9] aspect-320/286 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        <Image
          src="/leadership/peoples/background.svg"
          alt=""
          fill
          className="absolute inset-x-0 bottom-0 z-0 w-full transition-transform duration-500 group-hover:translate-y-6"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex w-full flex-col p-6 pt-4 sm:p-4 md:p-6">
        {/* Default gradient border */}
        <div
          className={cn(
            `absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#E13FAB] to-[#F02D30] group-hover:from-[#F02D30] group-hover:to-[#E13FAB] duration-500`
          )}
        />

        <p className="mb-1 text-2xl font-semibold leading-[1.33] text-mulberry-950">
          {name}
        </p>

        <p className="pb-4 text-xl font-normal leading-[1.3] text-pulse-pink-700">
          {role}
        </p>

        <Button href={linkedinUrl} variant="tertiary">
          LinkedIn
        </Button>
      </div>
    </div>
  );
}

export default LeadershipCard;
