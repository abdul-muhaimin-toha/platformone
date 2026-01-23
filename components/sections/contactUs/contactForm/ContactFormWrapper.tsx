import ContactUsHeader from './ContactUsHeader';
import ContactUsForm from './ContactUsForm';

import { BlockData } from '../../home/types';

interface ContactFormData {
  title?: string;
  short_description?: string;
  email_address?: string;
}

export type ContactFormWrapperProps = BlockData<ContactFormData>;

function ContactFormWrapper({ data }: ContactFormWrapperProps) {
  const content = data?.data;
  if (!content) return null;

  const { title = '', short_description = '', email_address = '' } = content;

  return (
    <section className="z-10">
      <div className="container-custom max-w-[1176px] ">
        <div className="flex w-full flex-col items-start justify-center gap-10 pt-[132px] pb-20 sm:gap-16 lg:flex-row lg:gap-10 lg:pt-40">
          <ContactUsHeader
            title={title}
            description={short_description}
            email={email_address}
            emailHref={`mailto:${email_address}`}
          />
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}

export default ContactFormWrapper;
