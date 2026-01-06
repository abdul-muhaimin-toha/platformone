import PoliciesWrapper from '@/components/sections/policies/PoliciesWrapper';

export default function PoliciesPage() {
  return (
    <PoliciesWrapper
      policies={[
        {
          title: 'Terms and Conditions',
          date: 'Last updated: 15 August 2025',
          buttonText: 'Read policy',
        },
        {
          title: 'Privacy Policy',
          date: 'Last updated: 10 July 2025',
          buttonText: 'Read policy',
        },
        {
          title: 'Cookie Policy',
          date: 'Last updated: 1 June 2025',
          buttonText: 'Read policy',
        },
        {
          title: 'Refund Policy',
          date: 'Last updated: 20 May 2025',
          buttonText: 'Read policy',
        },
        {
          title: 'Accessibility Statement',
          date: 'Last updated: 5 April 2025',
          buttonText: 'Read policy',
        },
        {
          title: 'Code of Conduct',
          date: 'Last updated: 25 March 2025',
          buttonText: 'Read policy',
        },
        {
          title: 'Community Guidelines',
          date: 'Last updated: 15 February 2025',
          buttonText: 'Read policy',
          className: 'lg:col-start-2',
        },
      ]}
    />
  );
}
