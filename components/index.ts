import Cta from './sections/home/Cta';
import TeamStartsWithUs from './sections/home/teamStartsWithUs/TeamStartsWithUs';
import TopClients from './sections/home/topClients/TopClients';
import WeExistWrapper from './sections/home/weExist/WeExistWrapper';
import WhatItLikeToWorkWithUsWrapper from './sections/home/whatItLikeToWorkWithUs/WhatItLikeToWorkWithUsWrapper';
import CustomerExperience from './sections/services/CustomerExperience';
import SideBySide from './sections/services/SideBySide';
import WhatWeGet from './sections/services/whatWeGet/WhatWeGet';

const blockComponentsMapping = {
  // /////////////////////
  // Home
  // /////////////////////
  'carbon-fields/home-half-to-half-image-with-text-section': WeExistWrapper,
  'carbon-fields/testimonial-section': WhatItLikeToWorkWithUsWrapper,
  'carbon-fields/brand-logo-section': TopClients,
  'carbon-fields/team-animation-section': TeamStartsWithUs,
  'carbon-fields/get-in-touch-section': Cta,
  // /////////////////////
  //services
  // /////////////////////
  'carbon-fields/service-banner-section': CustomerExperience,
  'carbon-fields/service-what-you-get-section': WhatWeGet,

  // Case Studies
  // 'carbon-fields/global-banner-section': Hero,
  // 'carbon-fields/case-study-list-section': Hero,
  // 'carbon-fields/testimonial-section': Hero,
  // 'carbon-fields/brand-logo-section': Hero,
  // People
  // 'carbon-fields/global-banner-section': Hero,
  // 'carbon-fields/people-cultural-section': Hero,
  // 'carbon-fields/half-title-half-button-section': Hero,
  // 'carbon-fields/people-values-section': Hero,
  // 'carbon-fields/testimonial-section': Hero,
  // 'carbon-fields/brand-logo-section': Hero,
  // 'carbon-fields/people-up-to-date-section': Hero,
  // 'carbon-fields/half-title-half-button-section': Hero,
  // 'carbon-fields/half-title-half-button-section': Hero,
  // Leadership
  // 'carbon-fields/global-banner-section': Hero,
  // 'carbon-fields/people-list-section': Hero,
  // 'carbon-fields/half-title-half-button-section': Hero,
  // Our Purpose
  // 'carbon-fields/global-banner-section': Hero,
  // 'carbon-fields/half-title-half-description-section': Hero,
  // 'carbon-fields/home-half-to-half-image-with-text-section': Hero,
  // 'carbon-fields/description-section': Hero,
  // 'carbon-fields/purpose-for-people-join': Hero,
  // 'carbon-fields/testimonial-section': Hero,
  // 'carbon-fields/brand-logo-section': Hero,
  // Contact Us
  // 'carbon-fields/contact-us-section': Hero,
  // 'carbon-fields/brand-logo-section': Hero,
  // 'carbon-fields/location-section': Hero,
  // Policies
  // 'carbon-fields/policies': Hero,
};

export default blockComponentsMapping;
