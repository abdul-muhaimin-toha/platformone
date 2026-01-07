import StayUpToDateHeader from './StayUpToDateHeader';
import StayUpToDateImages from './StayUpToDateImages';

export interface StayUpToDateHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export interface StayUpToDateWrapperProps {
  header: StayUpToDateHeaderProps;
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
}

function StayUpToDateWrapper({ header, images }: StayUpToDateWrapperProps) {
  return (
    <section className="bg-mulberry-900">
      <div className="container-custom">
        <div className="flex flex-col w-full py-20 gap-14">
          <StayUpToDateHeader {...header} />
          <StayUpToDateImages images={images} />
        </div>
      </div>
    </section>
  );
}

export default StayUpToDateWrapper;
