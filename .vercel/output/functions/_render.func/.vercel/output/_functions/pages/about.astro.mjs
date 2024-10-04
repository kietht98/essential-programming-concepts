import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_DM3qFgiW.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "About Me", "description": "Passionate and experienced front-end", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Passionate and experienced front-end web developer with 4+ years of
    experience building responsive web designs and mobile apps. Proficient in
    CSS and JavaScript frameworks, with a strong understanding of UX and user
    psychology.
</p> <p>
I am a highly motivated and results-oriented individual with a proven track
    record of success in delivering high-quality web applications. I am always
    looking for new challenges and opportunities to improve my skills and
    knowledge. In the near future, I am seeking a position where I can use my
    skills to make a real impact on the user experience.
</p> <p>In the long term, I aspire to become a solution architect.</p> ` })}`;
}, "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/pages/about.astro", void 0);

const $$file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
