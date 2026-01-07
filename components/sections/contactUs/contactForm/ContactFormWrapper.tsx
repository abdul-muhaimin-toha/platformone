import ContactUsHeader, { ContactHeaderProps } from './ContactUsHeader';
import ContactUsForm from './ContactUsForm';

interface ContactFormWrapperProps {
  header: ContactHeaderProps;
}

function ContactFormWrapper({ header }: ContactFormWrapperProps) {
  return (
    <section className="z-10">
      <div className="container-custom max-w-[1176px] ">
        <div className="flex w-full flex-col items-start justify-center gap-10 pt-[132px] pb-20 sm:gap-16 lg:flex-row lg:gap-10 lg:pt-40">
          <ContactUsHeader {...header} />
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}

export default ContactFormWrapper;
