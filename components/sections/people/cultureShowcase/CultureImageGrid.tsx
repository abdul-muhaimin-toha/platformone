import Image from 'next/image';

interface CultureImage {
  src: string;
  alt: string;
}

interface CultureImageGridProps {
  images: CultureImage[];
}

function CultureImageGrid({ images }: CultureImageGridProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 lg:grid-cols-3">
      {images.map((image, index) => {
        const baseClass =
          'rounded-2xl aspect-380/338 w-full object-cover lg:aspect-434/367';

        const positionClass =
          index === 1
            ? 'hidden md:block md:mt-20'
            : index === 2
            ? 'hidden lg:block md:mt-40'
            : '';

        return (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={380}
            height={338}
            className={`${baseClass} ${positionClass}`}
          />
        );
      })}
    </div>
  );
}

export default CultureImageGrid;
