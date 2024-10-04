import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><a href=\"https://devops.vinahost.vn/Version-Control/Git/#so-sanh-giua-git-va-subversion-svn\">To understand about git, i refer blog to you</a></p>\n<p><a href=\"https://git-scm.com/\">Reference tutorial</a></p>\n<p><a href=\"https://ndpsoftware.com/git-cheatsheet.html#google_vignette\">Flow git you should know</a></p>";

				const frontmatter = {"title":"Git Tutorial for beginner","description":"Git Tutorial for beginner","pubDate":"sep 24 2024","heroImage":"/git.png"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/git/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n[To understand about git, i refer blog to you](https://devops.vinahost.vn/Version-Control/Git/#so-sanh-giua-git-va-subversion-svn)\r\n\r\n[Reference tutorial][def]\r\n\r\n[def]: https://git-scm.com/\r\n\r\n[Flow git you should know][defe]\r\n\r\n[defe]: https://ndpsoftware.com/git-cheatsheet.html#google_vignette\r\n";
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
