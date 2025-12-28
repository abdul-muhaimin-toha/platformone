import Button from '@/components/globals/Button';
import Image from 'next/image';

export interface StoriesCardProps {
  imageSrc: string;
  logoSrc: string;
  title: string;
  href: string;
}

function StoriesCard({ imageSrc, logoSrc, title, href }: StoriesCardProps) {
  return (
    <div
      data-aos="fade-up"
      className="flex group cursor-pointer flex-col w-full"
    >
      <div className="flex justify-center relative w-full rounded-t-4xl overflow-hidden items-center aspect-429/316">
        <Image
          src={imageSrc}
          fill
          alt=""
          className="object-cover group-hover:scale-105 duration-300"
        />
      </div>

      <div className="flex grow duration-300 z-10 flex-col w-full gap-4 p-6 pb-0 group-hover:pb-6 overflow-hidden -mt-12 group-hover:-mt-[74px] border border-pulse-pink-200 bg-white rounded-t-3xl rounded-b-4xl">
        <Image
          src={logoSrc}
          width={380}
          height={64}
          className="lg:w-full aspect-380/64 w-[300px] object-contain"
          alt=""
        />

        <h3 className="text-[32px] line-clamp-3 font-semibold leading-tight text-black">
          {title}
        </h3>

        <Button
          href={href}
          className="mt-2 opacity-0 translate-y-2 pointer-events-auto transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          variant="tertiary"
        >
          Read more
        </Button>
      </div>
    </div>
  );
}

export default StoriesCard;
