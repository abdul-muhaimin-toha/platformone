import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

export default async function LeadershipPage() {
  const homePageData = await getPageData('leadership');

  return <RenderBlocksHelper blocks={homePageData} />;
}

{
  /* <>
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
      <LeadershipWrapper
        title="Leadership here isn’t about titles - it’s about showing up, backing our people, and keeping things real."
        subtitle="That’s Platform One style."
        data={[
          {
            id: '1',
            name: 'Henry Cheang',
            role: 'Chairman & Chief Executive Officer',
            image: '/leadership/peoples/people-1.png',
            linkedinUrl: '#',
          },
          {
            id: '2',
            name: 'Henry Cheang',
            role: 'Chairman & Chief Executive Officer',
            image: '/leadership/peoples/people-1.png',
            linkedinUrl: '#',
          },
          {
            id: '3',
            name: 'Henry Cheang',
            role: 'Chairman & Chief Executive Officer',
            image: '/leadership/peoples/people-1.png',
            linkedinUrl: '#',
          },
          {
            id: '4',
            name: 'Henry Cheang',
            role: 'Chairman & Chief Executive Officer',
            image: '/leadership/peoples/people-1.png',
            linkedinUrl: '#',
          },
          {
            id: '5',
            name: 'Henry Cheang',
            role: 'Chairman & Chief Executive Officer',
            image: '/leadership/peoples/people-1.png',
            linkedinUrl: '#',
          },
          {
            id: '6',
            name: 'Henry Cheang',
            role: 'Chairman & Chief Executive Officer',
            image: '/leadership/peoples/people-1.png',
            linkedinUrl: '#',
          },
          {
            id: '7',
            name: 'Henry Cheang',
            role: 'Chairman & Chief Executive Officer',
            image: '/leadership/peoples/people-1.png',
            linkedinUrl: '#',
          },
          {
            id: '8',
            name: 'Henry Cheang',
            role: 'Chairman & Chief Executive Officer',
            image: '/leadership/peoples/people-1.png',
            linkedinUrl: '#',
          },
          {
            id: '9',
            name: 'Henry Cheang',
            role: 'Chairman & Chief Executive Officer',
            image: '/leadership/peoples/people-1.png',
            linkedinUrl: '#',
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
    </> */
}
