import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderSlot, e as addAttribute, f as renderHead } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Header, b as $$BaseHead } from './Footer_Des7dNEK.mjs';
import { $ as $$FormattedDate } from './FormattedDate_DB7A9s9g.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://essential-programming-concepts.vercel.app");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-bvzihdzo> <head>', "<!-- Google Tag Manager --><!-- End Google Tag Manager -->", "</head> <body data-astro-cid-bvzihdzo> ", ' <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ', ' </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ', " ", " </div> <h1 data-astro-cid-bvzihdzo>", "</h1> <hr data-astro-cid-bvzihdzo> </div> ", " </div> </article> </main> ", ' <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKV5X7FF" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-bvzihdzo></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-5QCEXTM8W1"><\/script>  </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": heroImage, "data-astro-cid-bvzihdzo": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true }), heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`, renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true }), updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`, title, renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true }));
}, "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
