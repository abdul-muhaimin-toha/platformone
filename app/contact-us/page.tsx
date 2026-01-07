import ContactFormWrapper from '@/components/sections/contactUs/contactForm/ContactFormWrapper';
import LocationCardWrapper from '@/components/sections/contactUs/locationCards/LocationCardWrapper';
import TopClients from '@/components/sections/home/topClients/TopClients';

export default function ContactUsPage() {
  return (
    <div className="relative bg-linear-to-bl from-[#FFEBF5] to-white">
      <ContactFormWrapper
        header={{
          title: ['Let’s start a', 'conversation.'],
          description: [
            'Whether you’ve got a project in mind or just want to explore what’s possible, we’re all ears.',
            'Reach out and let’s chat about how we can help turn insights into action—and action into measurable impact.',
          ],
          email: 'info@platform1.cx',
          emailHref: '/',
        }}
      />
      <TopClients bg="bg-white" />
      <LocationCardWrapper
        locations={[
          {
            title: 'Sydney, Australia',
            address: 'The Commons, 388 George Street, Sydney, 2000, Australia',
          },
          {
            title: 'New York, USA',
            address: '123 Main Street, New York, NY 10001',
          },
          { title: 'London, UK', address: '45 Baker Street, London, W1U 7AJ' },
          { title: 'Tokyo, Japan', address: '1-2-3 Shibuya, Tokyo 150-0002' },
          {
            title: 'Sydney, Australia',
            address: 'The Commons, 388 George Street, Sydney, 2000, Australia',
          },
          { title: 'London, UK', address: '45 Baker Street, London, W1U 7AJ' },
          { title: 'Tokyo, Japan', address: '1-2-3 Shibuya, Tokyo 150-0002' },
        ]}
      />
    </div>
  );
}
