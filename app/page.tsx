import Cta from '@/components/sections/home/Cta';
import Hero from '@/components/sections/home/hero/Hero';
import TeamStartsWithUs from '@/components/sections/home/teamStartsWithUs/TeamStartsWithUs';
import TopClients from '@/components/sections/home/topClients/TopClients';
import TopInsightsWrapper from '@/components/sections/home/topInsights/TopInsightsWrapper';
import WeExistWrapper from '@/components/sections/home/weExist/WeExistWrapper';
import WhatItLikeToWorkWithUsWrapper from '@/components/sections/home/whatItLikeToWorkWithUs/WhatItLikeToWorkWithUsWrapper';
import WhatWeDoSection from '@/components/sections/home/whatWeDo/WhatWeDoWrapper';

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
      <WhatWeDoSection
        headingTitle="Insight starts with people."
        headingDescription="We turn real understanding into ideas that move you forward. Whether it’s shaping strategy, sparking innovation, or refining experience, we uncover the truths that drive action - and bring clarity to what comes next."
        cards={[
          {
            id: 1,
            bg: 'bg-[#FDF6F9]',
            category: 'Customer Experience',
            title: 'Your customers are talking.',
            subtitle: 'We help you hear what matters.',
            description:
              'Customer feedback is everywhere - but real understanding is rare. We help you uncover what customers truly value - so you can design products, services, and experiences that hit the mark. Our Voice of Customer solutions go beyond feedback to deliver sharp, human-first insight that drives relevance, loyalty, and growth.',
            buttonText: 'Turn feedback into action',
            imageSrc: '/home/what-we-do/card-1.png',
          },
          {
            id: 2,
            bg: 'bg-[#FCEFF4]',
            category: 'Insight Communities',
            title: 'We don’t just listen.',
            subtitle: 'We stay in the conversation.',
            description:
              'Customer feedback is everywhere - but real understanding is rare. We help you uncover what customers truly value - so you can design products, services, and experiences that hit the mark. Our Voice of Customer solutions go beyond feedback to deliver sharp, human-first insight that drives relevance, loyalty, and growth.',
            buttonText: 'Turn feedback into action',
            imageSrc: '/home/what-we-do/card-1.png',
          },
          {
            id: 3,
            bg: 'bg-[#FFEAF1]',
            category: 'On-Demand Market Research',
            title: 'Insight when you need it.',
            subtitle: 'Strategy when it counts.',
            description:
              'Customer feedback is everywhere - but real understanding is rare. We help you uncover what customers truly value - so you can design products, services, and experiences that hit the mark. Our Voice of Customer solutions go beyond feedback to deliver sharp, human-first insight that drives relevance, loyalty, and growth.',
            buttonText: 'Turn feedback into action',
            imageSrc: '/home/what-we-do/card-1.png',
          },
          {
            id: 4,
            bg: 'bg-[#FFE1EB]',
            category: 'Syndicated Research',
            title: 'We track what’s changing,',
            subtitle: 'so you can lead what’s next.',
            description:
              'Customer feedback is everywhere - but real understanding is rare. We help you uncover what customers truly value - so you can design products, services, and experiences that hit the mark. Our Voice of Customer solutions go beyond feedback to deliver sharp, human-first insight that drives relevance, loyalty, and growth.',
            buttonText: 'Turn feedback into action',
            imageSrc: '/home/what-we-do/card-1.png',
          },
          {
            id: 5,
            bg: 'bg-[#FFD7E4]',
            category: 'Digital Journey Intelligence',
            title: 'We follow the journey,',
            subtitle: 'so you can shape what comes next.',
            description:
              'Customer feedback is everywhere - but real understanding is rare. We help you uncover what customers truly value - so you can design products, services, and experiences that hit the mark. Our Voice of Customer solutions go beyond feedback to deliver sharp, human-first insight that drives relevance, loyalty, and growth.',
            buttonText: 'Turn feedback into action',
            imageSrc: '/home/what-we-do/card-1.png',
          },
        ]}
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
      <TeamStartsWithUs
        heading="It starts with us."
        subheading="People aren’t just what we understand - they’re who we are."
        description="Curious minds. Sharp thinkers. Good humans. We back each other, challenge each other, and grow together. Because great insight starts with great people - and that’s what makes the work matter. "
        centerpieceImage="/home/start-with-us/center.png"
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
