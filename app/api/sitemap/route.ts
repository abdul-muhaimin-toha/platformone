import { getSitemapData } from '@/graphql/components/get-sitemap-data';
import { WPNode } from '@/graphql/types';
import { NextResponse } from 'next/server';

export const GET = async () => {
   const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API;
   const data = await getSitemapData();

   const urls: { loc: string; lastmod: string }[] = [];

   // Pages
   if (data?.pages) {
      data.pages.forEach(({ node }: { node: WPNode }) =>
         urls.push({ loc: `${baseUrl}${node.uri}`, lastmod: node.modified! })
      );
   }

   // Posts / Insights
   if (data?.posts) {
      data.posts.forEach(({ node }: { node: WPNode }) =>
         urls.push({
            loc: `${baseUrl}/insight/${node.slug}`,
            lastmod: node.modified!,
         })
      );
   }

   // Projects
   if (data?.projects) {
      data.projects.forEach(({ node }: { node: WPNode }) =>
         urls.push({
            loc: `${baseUrl}/projects/${node.slug}`,
            lastmod: node.modified!,
         })
      );
   }

   // Careers
   if (data?.careers) {
      data.careers.forEach(({ node }: { node: WPNode }) =>
         urls.push({
            loc: `${baseUrl}/career/${node.slug}`,
            lastmod: node.modified!,
         })
      );
   }


   // Build XML
   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
   .map(
      (url) => `<url>
  <loc>${url.loc}</loc>
  <lastmod>${new Date(url.lastmod).toISOString()}</lastmod>
</url>`
   )
   .join('')}
</urlset>`;

   return new NextResponse(sitemap, {
      headers: { 'Content-Type': 'application/xml' },
   });
};
