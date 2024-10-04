import { getCollection } from "astro:content";

export async function GET() {
  const siteUrl = import.meta.env.SITE;
  const posts = await getCollection("essential");

  const result = `  
<?xml version="1.0" encoding="UTF-8"?>  
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  
  <url><loc>${siteUrl}/</loc></url>  
  <url><loc>${siteUrl}/posts/</loc></url>  
  ${posts
    .map((post: { data: { updatedDate: any; pubDate: any }; slug: any }) => {
      const lastMod = (
        post.data.updatedDate ?? post.data.pubDate
      ).toISOString();
      return `<url><loc>${siteUrl}/essential/${post.slug}/</loc><lastmod>${lastMod}</lastmod></url>`;
    })
    .join("\n")}  
</urlset>  
  `.trim();

  return new Response(result, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
