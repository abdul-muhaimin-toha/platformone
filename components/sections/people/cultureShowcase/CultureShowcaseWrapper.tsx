import CultureHeading from './CultureHeading';
import CultureImageGrid from './CultureImageGrid';

interface CultureShowcaseWrapperProps {
  heading: {
    title: string;
    subtitle: string;
    description: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
}

function CultureShowcaseWrapper({
  heading,
  images,
}: CultureShowcaseWrapperProps) {
  return (
    <section>
      <div className="container-custom">
        <div className="flex flex-col py-32 w-full gap-16">
          <CultureHeading {...heading} />
          <CultureImageGrid images={images} />
        </div>
      </div>
    </section>
  );
}

export default CultureShowcaseWrapper;
