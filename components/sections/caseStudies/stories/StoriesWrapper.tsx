import StoriesHeader from './StoriesHeader';
import StoriesCard, { StoriesCardProps } from './StoriesCard';

interface StoriesWrapperProps {
  title: string;
  highlightedTitle: string;
  description: string;
  stories: StoriesCardProps[];
}

function StoriesWrapper({
  title,
  highlightedTitle,
  description,
  stories,
}: StoriesWrapperProps) {
  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className="w-full flex flex-col gap-14 lg:gap-16 py-24">
          <StoriesHeader
            title={title}
            highlightedTitle={highlightedTitle}
            description={description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {stories.map((story, index) => (
              <StoriesCard key={index} {...story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoriesWrapper;
