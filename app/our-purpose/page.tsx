import BulbIcon from '@/components/icons/BulbIcon';
import CaseStudiesHero from '@/components/sections/caseStudies/hero/CaseStudiesHero';
import TopClients from '@/components/sections/home/topClients/TopClients';
import WhatItLikeToWorkWithUsWrapper from '@/components/sections/home/whatItLikeToWorkWithUs/WhatItLikeToWorkWithUsWrapper';
import OurPurposeHeading from '@/components/sections/ourPurpose/OurPurposeHeading';
import ReimagineAService from '@/components/sections/services/ReimagineAService';
import SideBySide from '@/components/sections/services/SideBySide';
import WhatWeGet from '@/components/sections/services/whatWeGet/WhatWeGet';

export default function OurPurposePage() {
  return (
    <>
      <CaseStudiesHero
        version="v2"
        title="We’re here to make"
        subtitle="insight matter."
        imageSrc="/services/customer-experience/customer-experience.png"
        imageAlt="Customer experience"
      />
      <OurPurposeHeading
        heading={{
          line1: 'We exist to help businesses',
          line2: 'stay human.',
        }}
        paragraph="We decode what people think, feel, and do - because behind every strategy, product, and experience is a person making a choice. And understanding that choice is what gives businesses their edge."
      />
      <SideBySide
        className="pb-32! pt-[168px]!"
        contentSide="left"
        heading="Listening isn’t enough."
        highlightedText="Knowing is."
        description="We translate feedback into foresight – decoding what customers feel, value, and expect next. Then we help you turn that into action."
        imageSrc="/services/listening-is-not-enough/listening-is-not-enough.png"
        imageAlt="Customer experience"
      />
      <ReimagineAService description="This is what drives us. It’s what makes our work meaningful. And it’s why our people, and our clients, are proud to be part of it. " />
      <WhatWeGet
        version="v2"
        title="Why people like working with us"
        cards={[
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'We make complexity clear - and clarity actionable ',
          },
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'We’re easy to work with, but hard to forget ',
          },
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'We bring energy, edge, and empathy to every engagement ',
          },
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'We help teams move faster, think smarter, and stay human ',
          },
          {
            icon: (
              <BulbIcon className="text-pulse-pink-700 size-9 md:size-10" />
            ),
            title: 'We challenge assumptions to find better answers ',
          },
        ]}
        closingText="Because when insight drives action, everything else clicks. "
        closingHighlight=""
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
    </>
  );
}
