'use client';

import TeamCylinder from './TeamCylinder';
import TeamHeading from './TeamHeading';

export default function TeamStartsWithUs({
  heading,
  subheading,
  description,
  centerpieceImage,
  peopleImages,
}: {
  heading: string;
  subheading: string;
  description: string;
  centerpieceImage: string;
  peopleImages: string[];
}) {
  return (
    <section className="bg-white">
      <div
        style={{
          background: 'linear-gradient(97deg, #571B39 0%, #2F0730 100%)',
        }}
        className="flex bg-blend-hard-light gap-10 flex-col rounded-tr-[80px] lg:rounded-tr-[120px] py-24 justify-center items-center w-full"
      >
        <div className="container-custom">
          <TeamHeading
            heading={heading}
            subheading={subheading}
            description={description}
          />
        </div>

        <TeamCylinder
          peopleImages={peopleImages}
          centerpieceImage={centerpieceImage}
        />
      </div>
    </section>
  );
}
