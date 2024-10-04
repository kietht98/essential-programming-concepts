import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, f as renderHead } from '../chunks/astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Header, b as $$BaseHead } from '../chunks/Footer_Des7dNEK.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_CltHYR-X.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://essential-programming-concepts.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "<!-- Google Tag Manager --><!-- End Google Tag Manager -->", "</head> <body> ", ' <main> <h1>\u{1F9D1}\u200D\u{1F680} Hello, Everyone!</h1> <p>\nWelcome to the official <a href="https://astro.build/">Kiet blogger</a>\n.This template serves as a lightweight, minimally-styled starting point for\n        anyone looking to build a personal website, blog, or portfolio with Astro.\n</p> <p>\nPassionate and experienced front-end web developer with 4+ years of\n        experience building responsive web designs and mobile apps. Proficient\n        in CSS and JavaScript frameworks, with a strong understanding of UX and\n        user psychology. I am a highly motivated and results-oriented individual\n        with a proven track record of success in delivering high-quality web\n        applications. I am always looking for new challenges and opportunities\n        to improve my skills and knowledge. In the near future, I am seeking a\n        position where I can use my skills to make a real impact on the user\n        experience. In the long term, I aspire to become a solution architect.\n</p> <p>About me:</p> <ul> <li>\nMore than 4 years of experience working as a front end developer.\n</li> <li>Programming language experience Javascript/ Typescript.</li> <li>\nDeveloping web applications on multiple platforms using HTML/CSS -\n          Bootstrap/ Tailwind/ MaterialUI/ Ant design.\n</li> <li>\nWorking with libraries/framework included: ReactJS/ NextJS/ ViteJS/\n          GatsbyJS/ Angular(4-11) and Flutter(6 month).\n</li> <li>\nFamiliar with programing language: .Net MVC/ NodeJS- MongoDB/ SQL\n          Server.\n</li> <li>\nIn the coming years, I aim to be a successful front end developer and\n          a good Software engineer.\n</li> </ul> <p>\nHave fun! If you get stuck, remember to <a href="https://docs.astro.build/">read the docs\n</a> or <a href="https://github.com/kietht98">connect</a> to know about me.\n</p> <p>Looking for new challenges and opportunities.</p> </main> ', ' <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKV5X7FF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-5QCEXTM8W1"><\/script>  </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "image": "/about-me.webp" }), renderHead(), renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE }), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/pages/index.astro", void 0);

const $$file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
