import Image from 'next/image';

interface StayUpToDateImagesProps {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
}

function StayUpToDateImages({ images }: StayUpToDateImagesProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:gap-10">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          width={img.width ?? 424}
          height={img.height ?? 485}
          className="aspect-424/485 w-full object-cover rounded-xl lg:rounded-4xl"
          alt={img.alt}
        />
      ))}
    </div>
  );
}

export default StayUpToDateImages;
