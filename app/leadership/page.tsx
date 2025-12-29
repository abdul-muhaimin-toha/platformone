import LeadershipHero from '@/components/sections/leadership/leadershipHero/LeadershipHero';

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHero
        heading={{ title: 'Meet the team', subtitle: 'leading the way.' }}
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
      />
    </>
  );
}
