import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Passionate and experienced front-end web developer with 4+ years of experience building responsive web designs and mobile apps. Proficient in CSS and JavaScript frameworks, with a strong understanding of UX and user psychology.</p>\n<p>I am a highly motivated and results-oriented individual with a proven track record of success in delivering high-quality web applications. I am always looking for new challenges and opportunities to improve my skills and knowledge. In the near future, I am seeking a position where I can use my skills to make a real impact on the user experience. In the long term, I aspire to become a solution architect.</p>";

				const frontmatter = {"title":"Passionate","description":"Parcel combines a great out-of-the-box development experience","pubDate":"Jul 08 2022","heroImage":"/about-me.webp"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/About-me.md";
				const url = undefined;
				function rawContent() {
					return "\nPassionate and experienced front-end web developer with 4+ years of experience building responsive web designs and mobile apps. Proficient in CSS and JavaScript frameworks, with a strong understanding of UX and user psychology.\n\nI am a highly motivated and results-oriented individual with a proven track record of success in delivering high-quality web applications. I am always looking for new challenges and opportunities to improve my skills and knowledge. In the near future, I am seeking a position where I can use my skills to make a real impact on the user experience. In the long term, I aspire to become a solution architect.\n";
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
