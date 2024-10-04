import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_CrkWirIh.mjs';
import { g as getImage } from './_astro_assets_iFGlQTNC.mjs';
import 'clsx';

const Astro__21MHjg = new Proxy({"src":"/_astro/image.BFmlzqjQ.png","width":787,"height":654,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/image.png";
							}
							
							return target[name];
						}
					});

const Astro__Z1tO80o = new Proxy({"src":"/_astro/event-binding.CkhnXhV6.png","width":709,"height":761,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/event-binding.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./image\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./image.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__21MHjg, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./event-binding\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./event-binding.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1tO80o, ...props});
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
			const html = await updateImageReferences("<p>\\ - <img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./image.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\"></p>\n<h3 id=\"capturing--target--bubbling\">Capturing => Target => Bubbling</h3>\n<ul>\n<li>Capturing: goes down to the elements.</li>\n<li>Target: reached and trigger event.</li>\n<li>Bubble: bubbles up from other elements.</li>\n</ul>\n<p>===</p>\n<h1 id=\"event-binding\">Event Binding</h1>\n<ul>\n<li>CurrentTarget is element to which the event is attached. Never change noting.</li>\n<li>Target is element to which have activated event. It dependent exactly where user click.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./event-binding.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\"></li>\n</ul>\n<h1 id=\"bubbling\">Bubbling</h1>\n<ul>\n<li>\n<p>Event bubbling is a concept in the Dom (Document Object Model).\nIt happens when an element receives an event, and that event bubbles up\n(or you can say is transmitted(truyền đi) or propagated (truyền bá)) to\nits parent and ancestor elements in the DOM tree until it gets to root element.</p>\n</li>\n<li>\n<p>can you prevents:</p>\n<ul>\n<li>stopPropagation():\n<ul>\n<li>The stopPropagation() method of the Event interface\nprevents further propagation (ngăn chặn sự lan truyền tiếp theo) of\nthe current event in the Capturing and Bubbling phases.</li>\n</ul>\n</li>\n<li>preventDefault():\n<ul>\n<li>stop(cancel) those behaviors, prevent event Spread into elements remaining.</li>\n</ul>\n</li>\n<li>stopImmediatePropagation:\n<ul>\n<li>prevent other listeners is listening event called</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h1 id=\"capturing\">Capturing</h1>\n<p>*(chụp / bắt được)</p>\n<ul>\n<li>The event goes down to the element</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>const elements = document.getBylElementId(\"container\");</span></span>\n<span class=\"line\"><span>elements.addEventListener(callBackFn, {capture: true})</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>// or</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>elements.addEventListener(callBackFn, true)</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>* note:</span></span>\n<span class=\"line\"><span>    - if it's false(default), handle bubbling function.</span></span>\n<span class=\"line\"><span>    - if it's true, handle capturing function.</span></span>\n<span class=\"line\"><span></span></span></code></pre>");
	

				const frontmatter = {"title":"Target vs CurrentTarget","description":"Capturing => Target => Bubbling","pubDate":"Jul 08 2022","heroImage":"/targetjs.webp"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/Current-CurrentTarget.md";
				const url = undefined;
				function rawContent() {
					return "\n\\ - ![Alt text](./image.png)\n\n### Capturing => Target => Bubbling\n\n- Capturing: goes down to the elements.\n- Target: reached and trigger event.\n- Bubble: bubbles up from other elements.\n\n===\n\n# Event Binding\n\n- CurrentTarget is element to which the event is attached. Never change noting.\n- Target is element to which have activated event. It dependent exactly where user click.\n  ![Alt text](./event-binding.png)\n\n# Bubbling\n\n- Event bubbling is a concept in the Dom (Document Object Model).\n  It happens when an element receives an event, and that event bubbles up\n  (or you can say is transmitted(truyền đi) or propagated (truyền bá)) to\n  its parent and ancestor elements in the DOM tree until it gets to root element.\n\n- can you prevents:\n\n  - stopPropagation():\n    - The stopPropagation() method of the Event interface\n      prevents further propagation (ngăn chặn sự lan truyền tiếp theo) of\n      the current event in the Capturing and Bubbling phases.\n  - preventDefault():\n    - stop(cancel) those behaviors, prevent event Spread into elements remaining.\n  - stopImmediatePropagation:\n    - prevent other listeners is listening event called\n\n# Capturing\n\n\\*(chụp / bắt được)\n\n- The event goes down to the element\n\n```\nconst elements = document.getBylElementId(\"container\");\nelements.addEventListener(callBackFn, {capture: true})\n\n// or\n\nelements.addEventListener(callBackFn, true)\n\n\n* note:\n    - if it's false(default), handle bubbling function.\n    - if it's true, handle capturing function.\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"capturing--target--bubbling","text":"Capturing => Target => Bubbling"},{"depth":1,"slug":"event-binding","text":"Event Binding"},{"depth":1,"slug":"bubbling","text":"Bubbling"},{"depth":1,"slug":"capturing","text":"Capturing"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
