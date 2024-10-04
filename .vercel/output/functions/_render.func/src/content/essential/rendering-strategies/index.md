---
title: "Rendering strategies"
description: "Parcel combines a great out-of-the-box development experience"
pubDate: "sep 24 2024"
heroImage: "/ssg.jpg"
---

### Static Rendering (Default)

- With Static Rendering, routes are rendered at build time, or in the background after data revalidation. The result is cached and can be pushed to a Content Delivery Network (CDN). This optimization allows you to share the result of the rendering work between users and server requests.

- Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page.

### Dynamic Rendering

- With Dynamic Rendering, routes are rendered for each user at request time.

- Dynamic rendering is useful when a route has data that is personalized to the user or has information that can only be known at request time, such as cookies or the URL's search params.

---

- Dynamic Routes with Cached Data

- In most websites, routes are not fully static or fully dynamic - it's a spectrum. For example, you can have an e-commerce page that uses cached product data that's revalidated at an interval, but also has uncached, personalized customer data.

- In Next.js, you can have dynamically rendered routes that have both cached and uncached data. This is because the RSC Payload and data are cached separately. This allows you to opt into dynamic rendering without worrying about the performance impact of fetching all the data at request time.

  ###### Learn more about the full-route cache and Data Cache.

---

### Switching to Dynamic Rendering

| Dynamic | Functions  | Data        | Route    |
| ------- | ---------- | ----------- | -------- |
| No      | Cached     | Statically  | Rendered |
| Yes     | Cached     | Dynamically | Rendered |
| No      | Not Cached | Dynamically | Rendered |
| Yes     | Not Cached | Dynamically | Rendered |
