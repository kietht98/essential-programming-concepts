import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: "https://essential-programming-concepts.vercel.app",
  integrations: [
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2022-09-24'),
    })
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
