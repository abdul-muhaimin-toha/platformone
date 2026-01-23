import LogoSocials from './LogoSocials';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';
import { FooterProps } from '../header/types';

export default function Footer({
  logoSrc,
  description,
  columns,
  copyright,
  bottomLinks,
  socials,
}: FooterProps) {
  return (
    <footer className="bg-linear-[97deg] from-gradient-start to-gradient-end w-full">
      <div className="container-custom">
        <div className="w-full py-10 md:py-24 gap-16 flex flex-col">
          <div className="w-full flex flex-col lg:flex-row gap-20 lg:gap-10 xl:gap-20">
            <LogoSocials
              logoSrc={logoSrc}
              logoAlt="Platformone Logo"
              description={description}
              socials={socials}
            />
            <FooterLinks columns={columns} />
          </div>
          <FooterBottom copyright={copyright} links={bottomLinks} />
        </div>
      </div>
    </footer>
  );
}
