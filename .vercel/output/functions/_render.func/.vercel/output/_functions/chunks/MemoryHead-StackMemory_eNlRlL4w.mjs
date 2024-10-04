import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_CrkWirIh.mjs';
import { g as getImage } from './_astro_assets_iFGlQTNC.mjs';
import 'clsx';

const Astro__24WfXT = new Proxy({"src":"/_astro/memory-management-in-js.CHqv3Sva.png","width":1000,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/memory-management-in-js.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./memory-management-in-js\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./memory-management-in-js.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__24WfXT, ...props});
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
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./memory-management-in-js.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\"></p>\n<h3 id=\"stack-memory\">Stack Memory</h3>\n<ul>\n<li>\n<p>primitive type</p>\n</li>\n<li>\n<p>string| number| boolean| null| undefined | Symbol | BigInt</p>\n</li>\n</ul>\n<h3 id=\"head-memory\">Head Memory</h3>\n<ul>\n<li>\n<p>reference</p>\n</li>\n<li>\n<p>Arrays |Function | Objects</p>\n</li>\n</ul>\n<h3 id=\"macro-task\">Macro task</h3>\n<ul>\n<li>is a collection of distinct and independent tasks.</li>\n<li>setTimeout, setImmediate, requestAnimationFrame, setInterval, requestAnimationFrame, etc</li>\n</ul>\n<h3 id=\"micro-task\">Micro task</h3>\n<ul>\n<li>are minor tasks that update the state of an application and should be completed before the browser moves on to other activities, such as re-rendering the user interface</li>\n<li>process.nextTick, Promises, queueMicrotask, MutationObserver</li>\n</ul>");
	

				const frontmatter = {"title":"MemoryHead vs StackMemory","description":"MemoryHead ....","pubDate":"Jul 08 2022","heroImage":"/memory.png"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/MemoryHead-StackMemory.md";
				const url = undefined;
				function rawContent() {
					return "\n![Alt text](./memory-management-in-js.png)\n\n### Stack Memory\n\n- primitive type\n\n- string| number| boolean| null| undefined | Symbol | BigInt\n\n### Head Memory\n\n- reference\n\n- Arrays |Function | Objects\n\n### Macro task\n\n- is a collection of distinct and independent tasks.\n- setTimeout, setImmediate, requestAnimationFrame, setInterval, requestAnimationFrame, etc\n\n### Micro task\n\n- are minor tasks that update the state of an application and should be completed before the browser moves on to other activities, such as re-rendering the user interface\n- process.nextTick, Promises, queueMicrotask, MutationObserver\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"stack-memory","text":"Stack Memory"},{"depth":3,"slug":"head-memory","text":"Head Memory"},{"depth":3,"slug":"macro-task","text":"Macro task"},{"depth":3,"slug":"micro-task","text":"Micro task"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
