import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>\\ // Prototypal Inheritance and the Prototype chain</p>\n<p>// ES6 introduced classes which is the modern way to construct objects</p>\n<p>// that said, prototypal inheritance and the prototype chain are:</p>\n<ul>\n<li>1: “under the hood”, (ES6 Classes are considered (được xem) “syntactic sugar”).</li>\n<li>2: often in interview questions.</li>\n<li>3: and are useful to understand.</li>\n</ul>\n<p>// Object Literals:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>const person = {</span></span>\n<span class=\"line\"><span>  alive: true</span></span>\n<span class=\"line\"><span>};</span></span>\n<span class=\"line\"><span>const musician = {</span></span>\n<span class=\"line\"><span>  plays: true</span></span>\n<span class=\"line\"><span>};</span></span>\n<span class=\"line\"><span>musician.__proto__ = person;</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span></span></span></code></pre>";

				const frontmatter = {"title":"Prototypal Inheritance and the Prototype chain","description":"ES6 introduced classes which is the modern way to construct objects","pubDate":"Jul 08 2022","heroImage":"/prototype.png"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/Proto-ProtoType.md";
				const url = undefined;
				function rawContent() {
					return "\n\\ // Prototypal Inheritance and the Prototype chain\n\n// ES6 introduced classes which is the modern way to construct objects\n\n// that said, prototypal inheritance and the prototype chain are:\n\n- 1: \"under the hood\", (ES6 Classes are considered (được xem) \"syntactic sugar\").\n- 2: often in interview questions.\n- 3: and are useful to understand.\n\n// Object Literals:\n\n```\nconst person = {\n  alive: true\n};\nconst musician = {\n  plays: true\n};\nmusician.__proto__ = person;\n\n```\n";
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
