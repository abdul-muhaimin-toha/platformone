import InsightPageWrapper from '@/components/sections/insights/InsightPageWrapper';

export default function InsightsPage() {
  return (
    <InsightPageWrapper
      topInsight={{
        title:
          'From Feedback to Action: How to Turn Insights Into Measurable Growth',
        image: '/insights/top-card.png',
        category: { label: 'Blog', href: '/' },
        secondaryCategory: 'Insight Communities',
        author: 'Andrew Dye',
        authorImage: '/home/work-with-us/avatar.png',
        date: 'August 13, 2025',
      }}
      gridInsights={[
        {
          title: 'The CX Scorecard: How to Measure What Really Matters',
          image: '/insights/top-card.png',
          category: { label: 'Blog', href: '/' },
          secondaryCategory: 'Insight Communities',
          author: 'Ray Poynter',
        },
        {
          title: 'The CX Scorecard: How to Measure What Really Matters',
          image: '/insights/top-card.png',
          category: { label: 'Blog', href: '/' },
          secondaryCategory: 'Insight Communities',
          author: 'Ray Poynter',
        },
        {
          title: 'The CX Scorecard: How to Measure What Really Matters',
          image: '/insights/top-card.png',
          category: { label: 'Blog', href: '/' },
          secondaryCategory: 'Insight Communities',
          author: 'Ray Poynter',
        },
        {
          title: 'The CX Scorecard: How to Measure What Really Matters',
          image: '/insights/top-card.png',
          category: { label: 'Blog', href: '/' },
          secondaryCategory: 'Insight Communities',
          author: 'Ray Poynter',
        },
        {
          title: 'The CX Scorecard: How to Measure What Really Matters',
          image: '/insights/top-card.png',
          category: { label: 'Blog', href: '/' },
          secondaryCategory: 'Insight Communities',
          author: 'Ray Poynter',
        },
        {
          title: 'The CX Scorecard: How to Measure What Really Matters',
          image: '/insights/top-card.png',
          category: { label: 'Blog', href: '/' },
          secondaryCategory: 'Insight Communities',
          author: 'Ray Poynter',
        },
        {
          title: 'The CX Scorecard: How to Measure What Really Matters',
          image: '/insights/top-card.png',
          category: { label: 'Blog', href: '/' },
          secondaryCategory: 'Insight Communities',
          author: 'Ray Poynter',
        },
        {
          title: 'The CX Scorecard: How to Measure What Really Matters',
          image: '/insights/top-card.png',
          category: { label: 'Blog', href: '/' },
          secondaryCategory: 'Insight Communities',
          author: 'Ray Poynter',
        },
        {
          title: 'The CX Scorecard: How to Measure What Really Matters',
          image: '/insights/top-card.png',
          category: { label: 'Blog', href: '/' },
          secondaryCategory: 'Insight Communities',
          author: 'Ray Poynter',
        },
      ]}
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
  );
}
