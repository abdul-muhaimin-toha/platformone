import { getServiceData } from '@/graphql/components/get-service-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

interface ServicesPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { slug } = await params;

  const serviceData = await getServiceData(slug);

  return (
    <div className="overflow-hidden">
      <RenderBlocksHelper blocks={serviceData} />
    </div>
  );
}

{
  /* <div className="overflow-hidden">
      <CustomerExperience
        title="Customer Experience"
        subtitle="From feedback to foresight."
        description="Your customers are talking - in surveys, reviews, support chats, and social posts. But hearing isn’t the same as understanding."
        imageSrc="/services/customer-experience/customer-experience.png"
        imageAlt="Customer experience"
      />
      <SideBySide
        contentSide="left"
        heading="Listening isn’t enough."
        highlightedText="Knowing is."
        description="We translate feedback into foresight – decoding what customers feel, value, and expect next. Then we help you turn that into action."
        imageSrc="/services/listening-is-not-enough/listening-is-not-enough.png"
        imageAlt="Customer experience"
      />
      <SideBySide
        contentSide="right"
        heading="Knowing is power,"
        highlightedText="change is progress."
        description="Our insight doesn’t live in a deck. It lives in your actions – helping teams make confident decisions. Because great CX isn’t about listening harder. It’s about building a business wired for what matters."
        imageSrc="/services/knowing-is-power/knowing-is-power.png"
        imageAlt="Knowing is power"
      />
      <ReimagineAService description="Whether you're refining a product, reimagining a service, or reshaping a journey, we make sure the voice of your customer drives what comes next." />
      <WhatWeGet
        title="What you get"
        cards={[
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'Signal over noise',
            description: 'Clarity on what drives loyalty and growth',
          },
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'Actionable insights',
            description: 'Turn feedback into confident decisions',
          },
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'Customer clarity',
            description: 'Know what matters most to your users',
          },
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'Signal over noise',
            description: 'Clarity on what drives loyalty and growth',
          },
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'Actionable insights',
            description: 'Turn feedback into confident decisions',
          },
        ]}
        closingText="Because when you understand your customers, you don’t just react, you"
        closingHighlight="design what’s next."
      />
      <WhatItLikeToWorkWithUsWrapper
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
    </div> */
}
