import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify';

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
    sitemap(),
    robotsTxt({
      sitemap:["https://essential-programming-concepts.vercel.app/sitemap_index.xml","https://essential-programming-concepts.vercel.app/sitemap-0.xml",
        "https://essential-programming-concepts.vercel.app/sitemap.xml", "https://essential-programming-concepts.vercel.app/sitemap-index.xml",
      ],
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },)
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  output: 'server',
  adapter: netlify(),
});
