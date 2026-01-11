import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

export default async function PeoplePage() {
  const homePageData = await getPageData('people');

  return <RenderBlocksHelper blocks={homePageData} />;
}

{
  /* <div className="overflow-hidden">
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
      <HowWeDoItWrapper
        title="We care about the work, but we care even more about"
        highlight="how we do it."
        paragraphs={[
          'We’re bold when it counts, flexible when it matters, and always up for finding a smarter way through.',
          'We’re bold when it counts, flexible when it matters, and always up for finding a smarter way through.',
        ]}
        image={{
          src: '/services/listening-is-not-enough/listening-is-not-enough.png',
          alt: 'How we do it',
        }}
      />
      <OpenRoleCta
        title="This is a place where people"
        highlight="thrive"
        title2="and the work reflects it."
        button={{
          label: 'View open roles',
          href: '/',
          variant: 'secondary',
        }}
      />
      <OurValuesWrapper
        heading={{
          title: 'Our',
          highlight: 'values.',
        }}
        values={[
          {
            icon: '/people/our-values/value-1.svg',
            iconAlt: 'Kindness',
            title: 'Kindness Matters',
            description:
              'Elevate those around you; lend a hand when you can; show respect and compassion toward others; small gestures can change lives.',
            bgColor: '#F7ECF5',
          },
          {
            icon: '/people/our-values/value-1.svg',
            iconAlt: 'Kindness',
            title: 'Kindness Matters',
            description:
              'Elevate those around you; lend a hand when you can; show respect and compassion toward others; small gestures can change lives.',
            bgColor: '#FCE7EC',
          },
          {
            icon: '/people/our-values/value-1.svg',
            iconAlt: 'Kindness',
            title: 'Kindness Matters',
            description:
              'Elevate those around you; lend a hand when you can; show respect and compassion toward others; small gestures can change lives.',
            bgColor: '#EDF5F3',
          },
          {
            icon: '/people/our-values/value-1.svg',
            iconAlt: 'Kindness',
            title: 'Kindness Matters',
            description:
              'Elevate those around you; lend a hand when you can; show respect and compassion toward others; small gestures can change lives.',
            bgColor: '#EBF2F6',
          },
          {
            icon: '/people/our-values/value-1.svg',
            iconAlt: 'Kindness',
            title: 'Kindness Matters',
            description:
              'Elevate those around you; lend a hand when you can; show respect and compassion toward others; small gestures can change lives.',
            bgColor: '#FEF5ED',
          },
        ]}
      />
      <WhatItLikeToWorkWithUsWrapper
        title="What it’s like to work with Platform One."
        description="We could tell you what we do – but it’s better coming from the people we work with.  These are the real stories, straight from our clients, about what it’s like to team up with P1.  The clarity, the momentum, the “finally, someone gets it” moments.  It’s not just about outcome – it’s about the experience along the way."
        testimonials={[
          {
            logo: '/home/work-with-us/card-1-logo.png',
            logoAlt: 'P1 Logo',
            linkHref: '/case-study',
            linkLabel: 'Read case study',
            message:
              'Platform One has been our Voice of Customer partner for nearly a decade, and their impact has been invaluable. They’ve helped us build and embed a program that delivers real-time insights, drives action, and continually improves our customer metrics. It’s not only strengthened customer loyalty and informed better decisions - it’s also supported our brand reputation and helped shape key business initiatives. Platform One is more than a provider - they’re a true partner, evolving with us and adding value every step of the way.',
            avatar: '/home/work-with-us/avatar.png',
            avatarAlt: 'Avatar',
            name: 'Lee Chadwick',
            position: 'Chief Executive Officer',
          },
          {
            logo: '/home/work-with-us/card-1-logo.png',
            logoAlt: 'P1 Logo',
            linkHref: '/case-study',
            linkLabel: 'Read case study',
            message:
              'Platform One has been our Voice of Customer partner for nearly a decade, and their impact has been invaluable. They’ve helped us build and embed a program that delivers real-time insights, drives action, and continually improves our customer metrics. It’s not only strengthened customer loyalty and informed better decisions - it’s also supported our brand reputation and helped shape key business initiatives. Platform One is more than a provider - they’re a true partner, evolving with us and adding value every step of the way.',
            avatar: '/home/work-with-us/avatar.png',
            avatarAlt: 'Avatar',
            name: 'Lee Chadwick',
            position: 'Chief Executive Officer',
          },
          {
            logo: '/home/work-with-us/card-1-logo.png',
            logoAlt: 'P1 Logo',
            linkHref: '/case-study',
            linkLabel: 'Read case study',
            message:
              'Platform One has been our Voice of Customer partner for nearly a decade, and their impact has been invaluable. They’ve helped us build and embed a program that delivers real-time insights, drives action, and continually improves our customer metrics. It’s not only strengthened customer loyalty and informed better decisions - it’s also supported our brand reputation and helped shape key business initiatives. Platform One is more than a provider - they’re a true partner, evolving with us and adding value every step of the way.',
            avatar: '/home/work-with-us/avatar.png',
            avatarAlt: 'Avatar',
            name: 'Sarah Dixey',
            position: 'Chief Executive Officer',
          },
          {
            logo: '/home/work-with-us/card-1-logo.png',
            logoAlt: 'P1 Logo',
            linkHref: '/case-study',
            linkLabel: 'Read case study',
            message:
              'Platform One has been our Voice of Customer partner for nearly a decade, and their impact has been invaluable. They’ve helped us build and embed a program that delivers real-time insights, drives action, and continually improves our customer metrics. It’s not only strengthened customer loyalty and informed better decisions - it’s also supported our brand reputation and helped shape key business initiatives. Platform One is more than a provider - they’re a true partner, evolving with us and adding value every step of the way.',
            avatar: '/home/work-with-us/avatar.png',
            avatarAlt: 'Avatar',
            name: 'Lee Chadwick',
            position: 'Chief Executive Officer',
          },
          {
            logo: '/home/work-with-us/card-1-logo.png',
            logoAlt: 'P1 Logo',
            linkHref: '/case-study',
            linkLabel: 'Read case study',
            message:
              'Platform One has been our Voice of Customer partner for nearly a decade, and their impact has been invaluable. They’ve helped us build and embed a program that delivers real-time insights, drives action, and continually improves our customer metrics. It’s not only strengthened customer loyalty and informed better decisions - it’s also supported our brand reputation and helped shape key business initiatives. Platform One is more than a provider - they’re a true partner, evolving with us and adding value every step of the way.',
            avatar: '/home/work-with-us/avatar.png',
            avatarAlt: 'Avatar',
            name: 'Lee Chadwick',
            position: 'Chief Executive Officer',
          },
          {
            logo: '/home/work-with-us/card-1-logo.png',
            logoAlt: 'P1 Logo',
            linkHref: '/case-study',
            linkLabel: 'Read case study',
            message:
              'Platform One has been our Voice of Customer partner for nearly a decade, and their impact has been invaluable. They’ve helped us build and embed a program that delivers real-time insights, drives action, and continually improves our customer metrics. It’s not only strengthened customer loyalty and informed better decisions - it’s also supported our brand reputation and helped shape key business initiatives. Platform One is more than a provider - they’re a true partner, evolving with us and adding value every step of the way.',
            avatar: '/home/work-with-us/avatar.png',
            avatarAlt: 'Avatar',
            name: 'Lee Chadwick',
            position: 'Chief Executive Officer',
          },
          {
            logo: '/home/work-with-us/card-1-logo.png',
            logoAlt: 'P1 Logo',
            linkHref: '/case-study',
            linkLabel: 'Read case study',
            message:
              'Platform One has been our Voice of Customer partner for nearly a decade, and their impact has been invaluable. They’ve helped us build and embed a program that delivers real-time insights, drives action, and continually improves our customer metrics. It’s not only strengthened customer loyalty and informed better decisions - it’s also supported our brand reputation and helped shape key business initiatives. Platform One is more than a provider - they’re a true partner, evolving with us and adding value every step of the way.',
            avatar: '/home/work-with-us/avatar.png',
            avatarAlt: 'Avatar',
            name: 'Lee Chadwick',
            position: 'Chief Executive Officer',
          },
          {
            logo: '/home/work-with-us/card-1-logo.png',
            logoAlt: 'P1 Logo',
            linkHref: '/case-study',
            linkLabel: 'Read case study',
            message:
              'Platform One has been our Voice of Customer partner for nearly a decade, and their impact has been invaluable. They’ve helped us build and embed a program that delivers real-time insights, drives action, and continually improves our customer metrics. It’s not only strengthened customer loyalty and informed better decisions - it’s also supported our brand reputation and helped shape key business initiatives. Platform One is more than a provider - they’re a true partner, evolving with us and adding value every step of the way.',
            avatar: '/home/work-with-us/avatar.png',
            avatarAlt: 'Avatar',
            name: 'Lee Chadwick',
            position: 'Chief Executive Officer',
          },
        ]}
      />
      <TopClients />
      <StayUpToDateWrapper
        header={{
          title: 'Stay up to date.',
          subtitle: 'Follow us on social media.',
          description:
            'Curious minds. Sharp thinkers. Good humans. We back each other, challenge each other, and grow together. Because great insight starts with great people - and that’s what makes the work matter.',
        }}
        images={[
          {
            src: '/services/customer-experience/customer-experience.png',
            alt: 'Customer Experience 1',
          },
          {
            src: '/services/customer-experience/customer-experience.png',
            alt: 'Customer Experience 2',
          },
          {
            src: '/services/customer-experience/customer-experience.png',
            alt: 'Customer Experience 3',
          },
        ]}
      />
      <CertificationShowcase
        title="We’re accredited."
        subtitle="Check our certifications."
        image={{
          src: '/people/certification.png',
          alt: 'Certification',
        }}
      />
      <Cta
        version="v2"
        headingPrimary="Want to help shape the"
        headingSecondary="future of insight?"
        buttonText="View open roles"
        buttonHref="/contact"
      />
    </div> */
}
