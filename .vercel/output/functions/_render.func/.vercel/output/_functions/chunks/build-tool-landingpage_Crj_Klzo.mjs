import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li><a href=\"https://landingpage.fyi/landing-page-checklist\">https://landingpage.fyi/landing-page-checklist</a></li>\n</ul>";

				const frontmatter = {"title":"Landingpage.fyi","description":"Parcel combines a great out-of-the-box development experience","pubDate":"Jul 08 2022","heroImage":"/social-og.png"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/build-tool-landingpage.md";
				const url = undefined;
				function rawContent() {
					return "\n- https://landingpage.fyi/landing-page-checklist\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
