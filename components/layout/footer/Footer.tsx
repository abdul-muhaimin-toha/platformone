import LogoSocials from './LogoSocials';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';

const footerLinksData = [
  {
    title: 'Solutions',
    links: [
      { label: 'Customer Experience', href: '/' },
      { label: 'Insight Communities', href: '/' },
      { label: 'On-Demand Market Research', href: '/' },
      { label: 'Syndicated Research', href: '/' },
      { label: 'Digital Journey Intelligence', href: '/' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'Insights', href: '/' },
      { label: 'About Us', href: '/' },
      { label: 'Our Purpose', href: '/' },
      { label: 'Case Studies', href: '/' },
      { label: 'Contact', href: '/' },
    ],
  },
];

const footerBottomLinks = [
  { label: 'Privacy and legal policies', href: '/' },
  { label: 'Terms and conditions', href: '/' },
  { label: 'Auto survey winners', href: '/' },
  { label: 'Sitemap', href: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-linear-[97deg] from-gradient-start to-gradient-end w-full">
      <div className="container-custom">
        <div className="w-full py-10 md:py-24 gap-16 flex flex-col">
          <div className="w-full flex flex-col lg:flex-row gap-20 lg:gap-10 xl:gap-20">
            <LogoSocials
              logoSrc="/brandings/logo-footer.svg"
              logoAlt="Platformone Logo"
              description="We’re a global team of insight specialists driven to make understanding people easier."
            />
            <FooterLinks columns={footerLinksData} />
          </div>
          <FooterBottom
            copyright="© 2025 Platform One. All rights reserved."
            links={footerBottomLinks}
          />
        </div>
      </div>
    </footer>
  );
}
