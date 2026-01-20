'use client';

import TeamCylinder from './TeamCylinder';
import TeamHeading from './TeamHeading';

import { BlockData, HeadingProps } from '../types';

export interface TeamStartsWithUsData extends HeadingProps {
  teams: { team_member: string; _id: string }[];
}

export type TeamStartsWithUsProps = BlockData<TeamStartsWithUsData>;

export default function TeamStartsWithUs({ data }: TeamStartsWithUsProps) {
  const content = data?.data ?? {};

  const {
    title = '',
    subtitle = '',
    short_description = '',
    teams = [],
  } = content;

  const peopleImages = teams.map((t) => t.team_member);

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
            title={title}
            subtitle={subtitle}
            short_description={short_description}
          />
        </div>
        <TeamCylinder
          peopleImages={peopleImages}
          centerpieceImage="/home/start-with-us/center.png"
        />
      </div>
    </section>
  );
}
