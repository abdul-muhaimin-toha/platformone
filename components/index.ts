import CounterWrapper from './sections/caseStudies/counterSection/CounterWrapper';
import CaseStudiesDetailsHero from './sections/caseStudies/hero/CaseStudiesDetailsHero';
import CaseStudiesHero from './sections/caseStudies/hero/CaseStudiesHero';
import SideBySideWrapper from './sections/caseStudies/sideBySideCard/SideBySideWrapper';
import StoriesWrapper from './sections/caseStudies/stories/StoriesWrapper';
import Cta from './sections/home/Cta';
import Hero from './sections/home/hero/Hero';
import TeamStartsWithUs from './sections/home/teamStartsWithUs/TeamStartsWithUs';
import TopClients from './sections/home/topClients/TopClients';
import TopInsightsWrapper from './sections/home/topInsights/TopInsightsWrapper';
import WeExistWrapper from './sections/home/weExist/WeExistWrapper';
import WhatItLikeToWorkWithUsWrapper from './sections/home/whatItLikeToWorkWithUs/WhatItLikeToWorkWithUsWrapper';
import WhatWeDoSection from './sections/home/whatWeDo/WhatWeDoWrapper';
import LeadershipHero from './sections/leadership/leadershipHero/LeadershipHero';
import CertificationShowcase from './sections/people/CertificationShowcase';
import CultureShowcaseWrapper from './sections/people/cultureShowcase/CultureShowcaseWrapper';
import HowWeDoItWrapper from './sections/people/howWeDoIt/HowWeDoItWrapper';
import OpenRoleCta from './sections/people/OpenRoleCta';
import OurValuesWrapper from './sections/people/ourValues/OurValuesWrapper';
import StayUpToDateWrapper from './sections/people/stayUpToDate/StayUpToDateWrapper';
import CustomerExperience from './sections/services/CustomerExperience';
import ReimagineAService from './sections/services/ReimagineAService';
import SideBySide from './sections/services/SideBySide';
import WhatWeGet from './sections/services/whatWeGet/WhatWeGet';

const blockComponentsMapping = {
  // /////////////////////
  // Home
  // /////////////////////
  'carbon-fields/home-hero-section': Hero,
  'carbon-fields/home-customer-experience-section': WhatWeDoSection,
  'carbon-fields/home-half-to-half-image-with-text-section': WeExistWrapper,
  'carbon-fields/testimonial-section': WhatItLikeToWorkWithUsWrapper,
  'carbon-fields/brand-logo-section': TopClients,
  'carbon-fields/team-animation-section': TeamStartsWithUs,
  'carbon-fields/home-insight-section': TopInsightsWrapper,
  'carbon-fields/get-in-touch-section': Cta,
  // /////////////////////
  //services
  // /////////////////////
  'carbon-fields/service-banner-section': CustomerExperience,
  'carbon-fields/service-banner-two-section': SideBySide,
  'carbon-fields/reimagine-a-service': ReimagineAService,
  'carbon-fields/service-what-you-get-section': WhatWeGet,

  // /////////////////////
  // Case Studies
  // /////////////////////
  'carbon-fields/global-banner-section': CaseStudiesHero,
  'carbon-fields/case-study-list-section': StoriesWrapper,
  'carbon-fields/testimonial-for-single-user-section': SideBySideWrapper,

  // /////////////////////
  // Case Study Details
  // /////////////////////
  'carbon-fields/case-study-banner-section': CaseStudiesDetailsHero,
  'carbon-fields/counter-section': CounterWrapper,

  // /////////////////////
  // People
  // /////////////////////
  'carbon-fields/people-banner-section': LeadershipHero,
  'carbon-fields/people-cultural-section': CultureShowcaseWrapper,
};

export default blockComponentsMapping;
