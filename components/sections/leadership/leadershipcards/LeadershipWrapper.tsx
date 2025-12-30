import LeadershipCard, { LeadershipPerson } from './LeadershipCard';
import LeadershipSectionHeading from './LeadershipSectionHeading';

interface LeadershipWrapperProps {
  title: string;
  subtitle: string;
  data: LeadershipPerson[];
}

function LeadershipWrapper({ title, subtitle, data }: LeadershipWrapperProps) {
  return (
    <section className="bg-background">
      <div className="container-custom">
        <div className="flex w-full py-24 md:py-32 flex-col items-center justify-center gap-14 md:gap-16">
          <LeadershipSectionHeading title={title} subtitle={subtitle} />

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-4 md:gap-6">
            {data.map((person) => (
              <LeadershipCard key={person.id} {...person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipWrapper;
