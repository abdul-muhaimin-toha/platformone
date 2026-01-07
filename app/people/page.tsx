import Cta from '@/components/sections/home/Cta';
import LeadershipHero from '@/components/sections/leadership/leadershipHero/LeadershipHero';
import CultureShowcaseWrapper from '@/components/sections/people/cultureShowcase/CultureShowcaseWrapper';

export default function PeoplePage() {
  return (
    <>
      <LeadershipHero
        heading={{ title: 'Meet the team', subtitle: 'makes us, us' }}
        desktopImages={[
          [
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
          ],
          [
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
          ],
          [
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
          ],
        ]}
        mobileImages={[
          [
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
          ],
          [
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
            { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
          ],
        ]}
        button={{
          label: 'Our Leadership',
          href: '/leadership',
        }}
      />
      <CultureShowcaseWrapper
        heading={{
          title: 'Culture isn’t a poster, it’s how we show up.',
          subtitle: 'Every day.',
          description:
            'We’re curious, collaborative, and unapologetically human. We ask better questions, challenge with respect, and back each other all the way. No egos. No silos. Just good people doing great work - together.',
        }}
        images={[
          {
            src: '/services/customer-experience/customer-experience.png',
            alt: 'Culture-1',
          },
          {
            src: '/services/customer-experience/customer-experience.png',
            alt: 'Culture-2',
          },
          {
            src: '/services/customer-experience/customer-experience.png',
            alt: 'Culture-3',
          },
        ]}
      />

      <Cta
        version="v2"
        headingPrimary="Want to help shape the"
        headingSecondary="future of insight?"
        buttonText="View open roles"
        buttonHref="/contact"
      />
    </>
  );
}
