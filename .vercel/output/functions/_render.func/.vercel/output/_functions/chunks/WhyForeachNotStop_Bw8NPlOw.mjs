import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"foreach\">Foreach</h3>\n<ul>\n<li>compiler foreach:</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>const callback = function(element){</span></span>\n<span class=\"line\"><span>    console.log(element);</span></span>\n<span class=\"line\"><span>    if(element === 2){</span></span>\n<span class=\"line\"><span>        return; // would this make a difference? no.</span></span>\n<span class=\"line\"><span>    }</span></span>\n<span class=\"line\"><span>}</span></span>\n<span class=\"line\"><span>const array= [1,2,3,4,5,5];</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>for(let i = 0; i&#x3C; array.length>:i++;){</span></span>\n<span class=\"line\"><span>    callback(array[i])</span></span>\n<span class=\"line\"><span>}</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<ul>\n<li><strong>beak</strong>, <strong>continue</strong>, <strong>return</strong> cannot stop foreach\nbecause there, foreach is not technically in a loop.</li>\n</ul>";

				const frontmatter = {"title":"Why cannot stop foreach?","description":"cannot stop foreach because there, foreach is not technically in a loop.","pubDate":"Jul 08 2022","heroImage":"/break-from-foreach-in-javascript.png"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/WhyForeachNotStop.md";
				const url = undefined;
				function rawContent() {
					return "\n### Foreach\n\n- compiler foreach:\n\n```\nconst callback = function(element){\n    console.log(element);\n    if(element === 2){\n        return; // would this make a difference? no.\n    }\n}\nconst array= [1,2,3,4,5,5];\n\nfor(let i = 0; i< array.length>:i++;){\n    callback(array[i])\n}\n```\n\n- **beak**, **continue**, **return** cannot stop foreach\n  because there, foreach is not technically in a loop.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"foreach","text":"Foreach"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
