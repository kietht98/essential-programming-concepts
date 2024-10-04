import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.</li>\n</ul>";

				const frontmatter = {"title":"Parcel","description":"Practical tips for those who want to advance in their careers","pubDate":"Jul 08 2022","heroImage":"/Parcel-JavaScript-build-tool.png"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/parcel-build-tools.md";
				const url = undefined;
				function rawContent() {
					return "\n- Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.\n";
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
