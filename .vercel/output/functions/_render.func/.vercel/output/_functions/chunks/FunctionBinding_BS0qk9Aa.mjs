import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h5 id=\"function-binding\">Function Binding</h5>\n<h1 id=\"losing-this\">Losing this</h1>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>let user = {</span></span>\n<span class=\"line\"><span>    firstName:\"Join\",</span></span>\n<span class=\"line\"><span>    console.log(this) // 1: this</span></span>\n<span class=\"line\"><span>    sayHi() {</span></span>\n<span class=\"line\"><span>        // using this 1</span></span>\n<span class=\"line\"><span>        console.log(\"Hello\", this.firstName);</span></span>\n<span class=\"line\"><span>    }</span></span>\n<span class=\"line\"><span>}</span></span>\n<span class=\"line\"><span>setTimeout(user.sayHi,1000); // Hello, undefined</span></span>\n<span class=\"line\"><span>// compiler</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>let fn = user.sayHi; // lose context this of Object user</span></span>\n<span class=\"line\"><span>setTimeout(fn,1000)</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<h1 id=\"bind\">Bind</h1>\n<ul>\n<li>\n<p>The bind() method of Function instances creates a new function that,when called,\ncalls this function with its this keyword set to the provided value, and a given sequence\nof arguments preceding any provided when the new function is called.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>const module = {</span></span>\n<span class=\"line\"><span>  name: \"Join\",</span></span>\n<span class=\"line\"><span>  getX(){</span></span>\n<span class=\"line\"><span>      console.log(\"hi\",this.name);</span></span>\n<span class=\"line\"><span>  }</span></span>\n<span class=\"line\"><span>}</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>const unboundGetX = module.getX;</span></span>\n<span class=\"line\"><span>console.log(unboundGetX); // hi, undefined</span></span>\n<span class=\"line\"><span>* solution</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>const getUnboundGetX = unboundGetX.bind(module);</span></span>\n<span class=\"line\"><span>console.log(getUnboundGetX());</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n</li>\n</ul>\n<h1 id=\"call\">Call</h1>\n<ul>\n<li>The call() method of Function instances calls this function with a given this value and arguments provided individually.</li>\n</ul>";

				const frontmatter = {"title":"FunctionBinding","description":"The bind() method of Function instances","pubDate":"Jul 08 2022","heroImage":"/bindingjs.jpg"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/FunctionBinding.md";
				const url = undefined;
				function rawContent() {
					return "\n##### Function Binding\n\n# Losing this\n\n```\nlet user = {\n    firstName:\"Join\",\n    console.log(this) // 1: this\n    sayHi() {\n        // using this 1\n        console.log(\"Hello\", this.firstName);\n    }\n}\nsetTimeout(user.sayHi,1000); // Hello, undefined\n// compiler\n\nlet fn = user.sayHi; // lose context this of Object user\nsetTimeout(fn,1000)\n```\n\n# Bind\n\n- The bind() method of Function instances creates a new function that,when called,\n  calls this function with its this keyword set to the provided value, and a given sequence\n  of arguments preceding any provided when the new function is called.\n\n  ```\n  const module = {\n    name: \"Join\",\n    getX(){\n        console.log(\"hi\",this.name);\n    }\n  }\n\n  const unboundGetX = module.getX;\n  console.log(unboundGetX); // hi, undefined\n  * solution\n\n  const getUnboundGetX = unboundGetX.bind(module);\n  console.log(getUnboundGetX());\n  ```\n\n# Call\n\n- The call() method of Function instances calls this function with a given this value and arguments provided individually.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":5,"slug":"function-binding","text":"Function Binding"},{"depth":1,"slug":"losing-this","text":"Losing this"},{"depth":1,"slug":"bind","text":"Bind"},{"depth":1,"slug":"call","text":"Call"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
