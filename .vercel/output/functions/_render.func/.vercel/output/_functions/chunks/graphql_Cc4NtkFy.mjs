import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"graphql\">Graphql</h3>\n<ul>\n<li>is an open source query language and runtime APis. Its provides a more efficient and flexible alternative to traditional RESTful architectures.</li>\n<li>provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.</li>\n</ul>\n<h3 id=\"the-main-advantage-of-using-graphql\">The main advantage of using GraphQL</h3>\n<ul>\n<li><strong>Efficient data fetching</strong>:\n<ul>\n<li>Client can request only the data they need, avoiding over-fetching or under-fetching scenarios common in REST APis.</li>\n</ul>\n</li>\n<li><strong>Strong type system</strong>:\n<ul>\n<li>has a schema that defines the data structure, making it easier to understand and work with the APis.</li>\n</ul>\n</li>\n<li><strong>Rapid development</strong>:\n<ul>\n<li>frontend, backend teams can work more independently, enabling faster iterations and reducing dependencies.</li>\n</ul>\n</li>\n<li><strong>Versioning and deprecation</strong>: - (Lập phiên bản and sử phản đối):\n<ul>\n<li>provides a backward-compatible way to evolve (tiến hóa) APOs by deprecating fields and introducing new ones without breaking existing clients.</li>\n</ul>\n</li>\n<li><strong>Introspection and tooling</strong>:\n<ul>\n<li>introspection capabilities allow for powerful developer tools.</li>\n</ul>\n</li>\n<li><strong>Efficient network request</strong>:</li>\n<li><strong>Real time update</strong></li>\n</ul>";

				const frontmatter = {"title":"Graphql","description":"is an open source query language and runtime APis.","pubDate":"Jul 08 2022","heroImage":"/graphql.png"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/graphql/graphql.md";
				const url = undefined;
				function rawContent() {
					return "\n### Graphql\n\n- is an open source query language and runtime APis. Its provides a more efficient and flexible alternative to traditional RESTful architectures.\n- provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.\n\n### The main advantage of using GraphQL\n\n- **Efficient data fetching**:\n  - Client can request only the data they need, avoiding over-fetching or under-fetching scenarios common in REST APis.\n- **Strong type system**:\n  - has a schema that defines the data structure, making it easier to understand and work with the APis.\n- **Rapid development**:\n  - frontend, backend teams can work more independently, enabling faster iterations and reducing dependencies.\n- **Versioning and deprecation**: - (Lập phiên bản and sử phản đối):\n  - provides a backward-compatible way to evolve (tiến hóa) APOs by deprecating fields and introducing new ones without breaking existing clients.\n- **Introspection and tooling**:\n  - introspection capabilities allow for powerful developer tools.\n- **Efficient network request**:\n- **Real time update**\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"graphql","text":"Graphql"},{"depth":3,"slug":"the-main-advantage-of-using-graphql","text":"The main advantage of using GraphQL"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
