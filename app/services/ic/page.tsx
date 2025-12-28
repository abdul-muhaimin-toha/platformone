import BulbIcon from '@/components/icons/BulbIcon';
import TopClients from '@/components/sections/home/topClients/TopClients';
import WhatItLikeToWorkWithUsWrapper from '@/components/sections/home/whatItLikeToWorkWithUs/WhatItLikeToWorkWithUsWrapper';
import CustomerExperience from '@/components/sections/services/CustomerExperience';
import ReimagineAService from '@/components/sections/services/ReimagineAService';
import SideBySide from '@/components/sections/services/SideBySide';
import WhatWeGet from '@/components/sections/services/whatWeGet/WhatWeGet';

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <CustomerExperience
        title="Insight Communities"
        subtitle="The conversations you want to be in. "
        description="Traditional research asks. Insight Communities listen - continuously. "
        imageSrc="/services/customer-experience/insight-communities.png"
        imageAlt="Customer experience"
      />
      <SideBySide
        contentSide="left"
        heading="The power of"
        highlightedText=" always-on."
        description="We build always-on communities that keep you connected to your customers in real time. These aren’t static panels - they’re dynamic spaces where people react fast, engage deeply and co-create with you.  "
        imageSrc="/services/listening-is-not-enough/the-poswer-of-always-on.png"
        imageAlt="Customer experience"
      />
      <SideBySide
        contentSide="right"
        heading="From connection"
        highlightedText="to action."
        description="It’s faster, leaner, and more human.  You get answers at the speed of decision-making, without the cost or complexity of starting from scratch."
        imageSrc="/services/knowing-is-power/from-connection.svg"
        imageAlt="Knowing is power"
      />
      <ReimagineAService description="Whether you're testing ideas, exploring behaviours, or shaping new experiences, our communities give you a direct line to the people who matter most." />
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
        closingText="Because when you stay in the conversation, "
        closingHighlight="you stay ahead."
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
    </div>
  );
}
