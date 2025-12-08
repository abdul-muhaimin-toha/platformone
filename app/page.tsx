import Cta from '@/components/sections/home/Cta';
import Hero from '@/components/sections/home/hero/Hero';
import TeamStartsWithUs from '@/components/sections/home/teamStartsWithUs/TeamStartsWithUs';
import TopClients from '@/components/sections/home/topClients/TopClients';
import TopInsightsWrapper from '@/components/sections/home/topInsights/TopInsightsWrapper';
import WeExistWrapper from '@/components/sections/home/weExist/WeExistWrapper';
import WhatItLikeToWorkWithUsWrapper from '@/components/sections/home/whatItLikeToWorkWithUs/WhatItLikeToWorkWithUsWrapper';

export default function HomePage() {
  return (
    <>
      <Hero
        bgImage="/home/hero/bg.svg"
        titleSpans={['Know', 'what', 'your', 'customers', 'want']}
        description="We get people – what they do, why they do it, and what that means for your business."
        subDescription="We decode behaviour so you can lead with confidence, not assumptions. No fluff. Just sharp insights that drive action."
        buttonLabel="Why We Exist"
      />
      <WeExistWrapper
        title="We exist to make sense of people."
        subtitle="Because business doesn’t make sense without them."
        description="In a world full of noise, hype, and half-truths, we cut through with sharp insight and real understanding."
        linkHref="/"
        linkLabel="See what drives us"
        imageSrc="/home/we-exist/we-exist.png"
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
      <TeamStartsWithUs
        heading="It starts with us."
        subheading="People aren’t just what we understand - they’re who we are."
        description="Curious minds. Sharp thinkers. Good humans. We back each other, challenge each other, and grow together. Because great insight starts with great people - and that’s what makes the work matter. "
        centerpieceImage="https://i.postimg.cc/5tFcF0dM/Layer-1.png"
        peopleImages={[
          'https://i.postimg.cc/Qdhrcg1Z/Ben-Sullivan.png',
          'https://i.postimg.cc/Qdhrcg1Z/Ben-Sullivan.png',
          'https://i.postimg.cc/HkdCb0XC/David-Lillis-1.png',
          'https://i.postimg.cc/P5Tk1bYh/Gary-Nicholas.png',
          'https://i.postimg.cc/x1nSLGMr/Jodie-Roberts.png',
          'https://i.postimg.cc/9QCjyPZQ/Kubra-D.png',
          'https://i.postimg.cc/7ZwyS106/Lachie-K.png',
          'https://i.postimg.cc/8zNVLdMc/Matthieu-P.png',
          'https://i.postimg.cc/XY409KdX/Melissa-R.png',
          'https://i.postimg.cc/9QbHb4YQ/Melodie.png',
          'https://i.postimg.cc/YCRBR4zv/Nicole-G.png',
          'https://i.postimg.cc/cH8zp6w3/Jo-OConnor.png',
        ]}
      />
      <TopInsightsWrapper
        insights={[
          {
            id: 1,
            category: 'Blog • Community',
            title: 'Food, Alcohol and Skincare: Gen Z’s New Wellbeing Paradigm',
            imageSrc: '/home/insights/insight-1.png',
            linkHref: '/',
          },
          {
            id: 2,
            category: 'Blog • Community',
            title: 'Food, Alcohol and Skincare: Gen Z’s New Wellbeing Paradigm',
            imageSrc: '/home/insights/insight-1.png',
            linkHref: '/',
          },
          {
            id: 3,
            category: 'Blog • Community',
            title: 'Food, Alcohol and Skincare: Gen Z’s New Wellbeing Paradigm',
            imageSrc: '/home/insights/insight-1.png',
            linkHref: '/',
          },
        ]}
        title="We are thought leaders."
        subtitle="See our latest insights"
        viewAllHref="/"
      />
      <Cta
        headingPrimary="People first."
        headingSecondary="Insight always."
        buttonText="Let’s talk"
        buttonHref="/contact"
      />
    </>
  );
}
