import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_CrkWirIh.mjs';
import { g as getImage } from './_astro_assets_iFGlQTNC.mjs';
import 'clsx';

const Astro__155DsU = new Proxy({"src":"/_astro/scope-js.BJzXUr92.png","width":724,"height":724,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/scope-js.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./scope-js\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./scope-js.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__155DsU, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h3 id=\"scope\">Scope</h3>\n<ul>\n<li>\n<p>Scope</p>\n</li>\n<li>\n<p>Local Scope</p>\n</li>\n<li>\n<p>Global scope</p>\n</li>\n<li>\n<p>Function Scope</p>\n</li>\n<li>\n<p>Block Scope</p>\n</li>\n</ul>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./scope-js.png&#x22;,&#x22;alt&#x22;:&#x22;alt&#x22;,&#x22;index&#x22;:0}\"></p>\n<h3 id=\"scope-in-js\">Scope In js</h3>\n<ul>\n<li>\n<p>Scope determines the accessibility (visibility) of variables.</p>\n</li>\n<li>\n<p>JavaScript has 3 types of scope:</p>\n<ul>\n<li>\n<p>Block scope</p>\n</li>\n<li>\n<p>Function scope</p>\n</li>\n<li>\n<p>Global scope</p>\n</li>\n</ul>\n</li>\n<li>\n<p>One of the differences between var and let is :</p>\n<ul>\n<li>var will have function scope whereas let will have block scope.</li>\n</ul>\n</li>\n<li>\n<p>Function scope is within the function.</p>\n</li>\n<li>\n<p>Block scope is within curly brackets.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>var character4 =</span></span>\n<span class=\"line\"><span>  function foo() {</span></span>\n<span class=\"line\"><span>      if(true) {</span></span>\n<span class=\"line\"><span>          var character1 = \"Robin\" //function scope</span></span>\n<span class=\"line\"><span>          let character2 = \"Ted\" //block scope</span></span>\n<span class=\"line\"><span>          const character3 = \"Barney\" //block scope</span></span>\n<span class=\"line\"><span>      }</span></span>\n<span class=\"line\"><span>      console.log(character1) //Robin</span></span>\n<span class=\"line\"><span>      console.log(character2) //not defined</span></span>\n<span class=\"line\"><span>      console.log(character3). //not defined</span></span>\n<span class=\"line\"><span>  }</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n</li>\n<li>\n<p>Global Scope: Variables declared Globally (outside any function) have Global Scope.</p>\n</li>\n<li>\n<p>Global variables can be accessed from anywhere in a JavaScript program.</p>\n</li>\n<li>\n<p>Another is the Local Scope, variables declared inside the functions are considered to be of the local scope and it is further divided into function scoped and block scoped.</p>\n</li>\n<li>\n<p>Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.</p>\n</li>\n<li>\n<p>Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be concise, the variables declared inside the curly braces are called within the block scope.</p>\n</li>\n</ul>");
	

				const frontmatter = {"title":"Scope","description":"Nested (child) function have access to the scope of their parent functions","pubDate":"Jul 08 2022","heroImage":"/scope.png"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/Scope.md";
				const url = undefined;
				function rawContent() {
					return "\n### Scope\n\n- Scope\n\n- Local Scope\n\n- Global scope\n\n- Function Scope\n\n- Block Scope\n\n![alt](./scope-js.png)\n\n### Scope In js\n\n- Scope determines the accessibility (visibility) of variables.\n\n- JavaScript has 3 types of scope:\n\n  - Block scope\n\n  - Function scope\n\n  - Global scope\n\n- One of the differences between var and let is :\n\n  - var will have function scope whereas let will have block scope.\n\n- Function scope is within the function.\n- Block scope is within curly brackets.\n\n  ```\n  var character4 =\n    function foo() {\n        if(true) {\n            var character1 = \"Robin\" //function scope\n            let character2 = \"Ted\" //block scope\n            const character3 = \"Barney\" //block scope\n        }\n        console.log(character1) //Robin\n        console.log(character2) //not defined\n        console.log(character3). //not defined\n    }\n  ```\n\n- Global Scope: Variables declared Globally (outside any function) have Global Scope.\n\n- Global variables can be accessed from anywhere in a JavaScript program.\n\n- Another is the Local Scope, variables declared inside the functions are considered to be of the local scope and it is further divided into function scoped and block scoped.\n\n- Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.\n\n- Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be concise, the variables declared inside the curly braces are called within the block scope.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"scope","text":"Scope"},{"depth":3,"slug":"scope-in-js","text":"Scope In js"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
