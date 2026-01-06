import Button from '@/components/globals/Button';
import BlogsContent from '@/components/sections/insights/BlogsContent';
import MobileNavDrawer from '@/components/sections/insights/MobileNavDrawer';
import Sidebar from '@/components/sections/insights/sidebar/Sidebar';
import PoliciesRichText from '@/components/sections/policies/PoliciesRichText';

export default function PoliciesPage() {
  return (
    <main className="bg-white">
      <div className="container-custom max-w-[1256px]">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:flex lg:flex-row  pt-[124px] md:pt-[130px] lg:pt-[168px] w-full  group md:flex-row gap-6 pb-10 xl:pb-20 border-b border-b-border">
            <div className="w-full flex flex-col md:col-span-2 lg:max-w-[211px] border-r border-transparent md:pr-2 xl:max-w-[248px] xl:pr-6">
              <Button variant="back">Back</Button>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] leading-tight text-black font-semibold">
                Privacy Policy
              </h2>
              <p className="text-base font-normal leading-[1.37] text-black opacity-50">
                Last updated: 14 August 2025
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 py-32 pt-20 lg:py-20 lg:pt-20 lg:pb-32">
            <Sidebar
              version="v1"
              page="details"
              exploreLinks={[
                { label: 'All', href: '/', isActive: true },
                { label: 'Blogs', href: '/' },
                { label: 'Press Releases', href: '/' },
                { label: 'Podcasts', href: '/' },
                { label: 'Whitepapers', href: '/' },
              ]}
              topicLinks={[
                { label: 'All', href: '/', isActive: true },
                { label: 'Customer Experience', href: '/' },
                { label: 'Employee Experience', href: '/' },
                { label: 'Insight Communities', href: '/' },
                { label: 'Data Visualisation', href: '/' },
                { label: 'Data Visualisation', href: '/' },
              ]}
            />
            <div className="flex-1 flex flex-col gap-14 md:gap-10 xl:gap-20">
              <Sidebar
                version="v2"
                page="details"
                exploreLinks={[
                  { label: 'All', href: '/', isActive: true },
                  { label: 'Blogs', href: '/' },
                  { label: 'Press Releases', href: '/' },
                  { label: 'Podcasts', href: '/' },
                  { label: 'Whitepapers', href: '/' },
                ]}
                topicLinks={[
                  { label: 'All', href: '/', isActive: true },
                  { label: 'Customer Experience', href: '/' },
                  { label: 'Employee Experience', href: '/' },
                  { label: 'Insight Communities', href: '/' },
                  { label: 'Data Visualisation', href: '/' },
                  { label: 'Data Visualisation', href: '/' },
                ]}
              />
              <div className="flex flex-col w-full gap-10 xl:gap-20">
                <PoliciesRichText />
              </div>
            </div>
            <MobileNavDrawer
              page="details"
              exploreLinks={[
                { label: 'All', href: '/', isActive: true },
                { label: 'Blogs', href: '/' },
                { label: 'Press Releases', href: '/' },
                { label: 'Podcasts', href: '/' },
                { label: 'Whitepapers', href: '/' },
              ]}
              topicLinks={[
                { label: 'All', href: '/', isActive: true },
                { label: 'Blogs', href: '/' },
                { label: 'Press Releases', href: '/' },
                { label: 'Podcasts', href: '/' },
                { label: 'Whitepapers', href: '/' },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
