import { FC } from 'react';
import Button from '@/components/globals/Button';
import { CaseStudyNode } from '@/graphql/types';
import Image from 'next/image';

export interface StoriesCardProps {
  caseStudy: CaseStudyNode;
}

const StoriesCard: FC<StoriesCardProps> = ({ caseStudy }) => {
  if (!caseStudy) return null;

  return (
    <div
      data-aos="fade-up"
      className="flex group cursor-pointer flex-col w-full"
    >
      <div className="flex justify-center relative w-full rounded-t-4xl overflow-hidden items-center aspect-429/316">
        {caseStudy.featuredImage?.node?.mediaItemUrl && (
          <Image
            src={caseStudy.featuredImage.node.mediaItemUrl}
            fill
            alt={caseStudy.title || 'Case study featured image'}
            className="object-cover group-hover:scale-105 duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      <div className="flex grow duration-300 z-10 flex-col w-full gap-4 p-6 pb-0 group-hover:pb-6 overflow-hidden -mt-12 group-hover:-mt-[74px] border border-pulse-pink-200 bg-white rounded-t-3xl rounded-b-4xl">
        {caseStudy.logoFile && (
          <Image
            src={caseStudy.logoFile}
            width={380}
            height={64}
            className="lg:w-full aspect-380/64 w-[300px] object-contain"
            alt={`${caseStudy.title} client logo`}
          />
        )}

        {caseStudy.title && (
          <h3 className="text-[32px] line-clamp-3 font-semibold leading-tight text-black">
            {caseStudy.title}
          </h3>
        )}

        <Button
          href={`/case-studies/${caseStudy.slug}` || '#'}
          className="mt-2 opacity-0 translate-y-2 pointer-events-auto transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          variant="tertiary"
        >
          Read more
        </Button>
      </div>
    </div>
  );
};

export default StoriesCard;
