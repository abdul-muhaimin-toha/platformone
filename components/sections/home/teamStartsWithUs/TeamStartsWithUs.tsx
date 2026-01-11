'use client';

import TeamCylinder from './TeamCylinder';
import TeamHeading from './TeamHeading';

export interface TeamStartsWithUsData {
  title: string;
  subtitle: string;
  short_description: string;
  teams: { team_member: string; _id: string }[];
}

interface TeamStartsWithUsProps {
  data?: {
    data?: TeamStartsWithUsData;
  };
}

export default function TeamStartsWithUs({ data }: TeamStartsWithUsProps) {
  const content: TeamStartsWithUsData = data?.data ?? {
    title: '',
    subtitle: '',
    short_description: '',
    teams: [],
  };

  const { title, subtitle, short_description, teams } = content;

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
