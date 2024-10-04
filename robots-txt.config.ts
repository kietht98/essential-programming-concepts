import type { RobotsTxtOptions } from "astro-robots-txt";

const robotsConfig: RobotsTxtOptions = {
  policy: [
    {
      userAgent: "*",
      // The next line enables or disables the crawling on the `robots.txt` level
      disallow: "/",
    },
  ],
  sitemapBaseFileName: "sitemap-index", // default 'sitemap-index'
};

export default robotsConfig;
