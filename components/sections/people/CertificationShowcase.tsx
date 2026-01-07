import Image from 'next/image';

export interface CertificationShowcaseProps {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
}

function CertificationShowcase({
  title,
  subtitle,
  image,
}: CertificationShowcaseProps) {
  return (
    <section className="bg-mulberry-950">
      <div className="container-custom">
        <div className="flex flex-col w-full py-20 gap-14">
          <div className="w-full flex items-left flex-col justify-center md:flex-row text-left gap-10 xl:gap-36 lg:max-w-full md:justify-between md:items-center xl:w-full">
            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              <h2 className="text-[38px] xl:text-[56px] xl:leading-[1.28] font-bold leading-[1.26] text-white">
                {title}
              </h2>
              <p className="text-xl xl:font-2xl font-semibold leading-[1.33] text-pulse-pink-300">
                {subtitle}
              </p>
            </div>
            <Image
              className="aspect-268/112 w-[200px] md:w-[268px] object-contain"
              alt={image.alt}
              src={image.src}
              width={268}
              height={112}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificationShowcase;
