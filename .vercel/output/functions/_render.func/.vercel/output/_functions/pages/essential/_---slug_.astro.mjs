import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Bj6L-6l7.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DM3qFgiW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://essential-programming-concepts.vercel.app");
async function getStaticPaths() {
  const posts = await getCollection("essential");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/pages/essential/[...slug].astro", void 0);

const $$file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/pages/essential/[...slug].astro";
const $$url = "/essential/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
