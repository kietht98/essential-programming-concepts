import { a as createComponent, r as renderTemplate, b as renderComponent, e as addAttribute, f as renderHead } from '../chunks/astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Header, b as $$BaseHead } from '../chunks/Footer_Des7dNEK.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_CltHYR-X.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bj6L-6l7.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_DB7A9s9g.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = [...await getCollection("essential")].sort(
    (a, b) => a.data?.pubDate?.valueOf() - b.data?.pubDate?.valueOf()
  );
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-lovv5mce> <head>', "<!-- Google Tag Manager --><!-- End Google Tag Manager -->", "</head> <body data-astro-cid-lovv5mce> ", " <main data-astro-cid-lovv5mce> <section data-astro-cid-lovv5mce> <ul data-astro-cid-lovv5mce> ", " </ul> </section> </main> ", ' <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKV5X7FF" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-lovv5mce></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-5QCEXTM8W1"><\/script>  </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "image": "/about-me.webp", "data-astro-cid-lovv5mce": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-lovv5mce": true }), posts.map((post) => renderTemplate`<li data-astro-cid-lovv5mce> <a${addAttribute(`/essential/${post.slug}`, "href")} data-astro-cid-lovv5mce> <img${addAttribute(460, "width")}${addAttribute(240, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-lovv5mce> <h4 class="title" data-astro-cid-lovv5mce>${post.data.title}</h4> <p class="date" data-astro-cid-lovv5mce> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-lovv5mce": true })} </p> </a> </li>`), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-lovv5mce": true }));
}, "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/pages/essential/index.astro", void 0);

const $$file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/pages/essential/index.astro";
const $$url = "/essential";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
