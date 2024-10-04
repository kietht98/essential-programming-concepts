import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_CrkWirIh.mjs';
import { g as getImage } from './_astro_assets_iFGlQTNC.mjs';
import 'clsx';

const Astro__21MHjg = new Proxy({"src":"/_astro/image.Bf0BLDhq.png","width":609,"height":171,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/redux/image.png";
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
			const html = await updateImageReferences("<h3 id=\"what-is-redux\">What is Redux?</h3>\n<ul>\n<li>is an open source library made using the scripting language Javascript.</li>\n<li>primary use lies managing and centralizing (tập trung hóa) application state and</li>\n<li>it’s usually used along with Javascript libraries, for instance, React or Angular in order to</li>\n<li>build UIs(User Interface).</li>\n<li>It’s a predictable state container for application build using JS.</li>\n<li>It’s based on the flux design pattern.</li>\n<li>It’s very small in size (around 2KB) and ahs no dependencies.</li>\n</ul>\n<h1 id=\"what-is-flux\">What is Flux?</h1>\n<ul>\n<li>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./image.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\"></p>\n</li>\n<li>\n<p>Flux is an application design pattern just like the MVC design pattern.</p>\n</li>\n<li>\n<p>It’s nothing but a bew kind of architecture that components React and\nthe concept of Unidirectional Data Flow.</p>\n</li>\n<li>\n<p>The image given below shows how the workflow between dispatcher, store and views components\nwith distinct inputs and outputs are in Flux.</p>\n</li>\n</ul>\n<h3 id=\"difference-redux-vs-flux\">Difference Redux vs Flux</h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Comparison parameter</th><th>Redux</th><th>Flux</th></tr></thead><tbody><tr><td>Number of store per application</td><td>includes a one store</td><td>includes multiple store</td></tr><tr><td>Architecture</td><td>open-source JS libraries used for creating User Interface</td><td>is designed to build client-side web apps</td></tr><tr><td></td><td></td><td></td></tr></tbody></table>\n<h1 id=\"what-is-redux-in-react-js\">What is Redux in React js?</h1>\n<ul>\n<li>\n<p>React to read data from a Redux Store, and dispatch Actions to the Store for\nupdating the data</p>\n</li>\n<li>\n<p>The purpose of Redux is to help applications scale well by\nproviding means to manage the state via a unidirectional (một chiều) data flow model.</p>\n</li>\n</ul>\n<h1 id=\"what-do-you-understand-about-redux-toolkit-and-redux-thunk-and-redux-saga\">What do you understand about Redux Toolkit and Redux Thunk and Redux Saga?</h1>\n<ul>\n<li>Redux Thunk for asynchronous logic (Redux middleware).</li>\n<li>Redux Saga is a middleware library (Redux middleware).\n<ul>\n<li>use for side effect (call api, async await, setTimeOut, setInterval,…). build on generate function.</li>\n<li>making HTTP requests to external services, accessing browser storage, executing Input/Output operations and many more.</li>\n</ul>\n<h2 id=\"helper\">Helper:</h2>\n<ul>\n<li>takeEvery():</li>\n<li>takeLatest():</li>\n<li>take()</li>\n<li>put(): dispatch action.</li>\n<li>call(): exec function. If return promise, pause Saga until promise return result.</li>\n<li>race(): run async more side effect. but only get result for side effect the fastest and cancel result for side effect remaining.</li>\n</ul>\n</li>\n</ul>");
	

				const frontmatter = {"title":"What is Redux?","description":"is an open source library made","pubDate":"Jul 08 2022","heroImage":"/redux.jpeg"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/redux/Redux.md";
				const url = undefined;
				function rawContent() {
					return "\n### What is Redux?\n\n- is an open source library made using the scripting language Javascript.\n- primary use lies managing and centralizing (tập trung hóa) application state and\n- it's usually used along with Javascript libraries, for instance, React or Angular in order to\n- build UIs(User Interface).\n- It's a predictable state container for application build using JS.\n- It's based on the flux design pattern.\n- It's very small in size (around 2KB) and ahs no dependencies.\n\n# What is Flux?\n\n- ![Alt text](./image.png)\n\n- Flux is an application design pattern just like the MVC design pattern.\n- It's nothing but a bew kind of architecture that components React and\n  the concept of Unidirectional Data Flow.\n- The image given below shows how the workflow between dispatcher, store and views components\n  with distinct inputs and outputs are in Flux.\n\n### Difference Redux vs Flux\n\n| Comparison parameter            | Redux                                                     | Flux                                      |\n| ------------------------------- | --------------------------------------------------------- | ----------------------------------------- |\n| Number of store per application | includes a one store                                      | includes multiple store                   |\n| Architecture                    | open-source JS libraries used for creating User Interface | is designed to build client-side web apps |\n|                                 |                                                           |                                           |\n\n# What is Redux in React js?\n\n- React to read data from a Redux Store, and dispatch Actions to the Store for\n  updating the data\n\n- The purpose of Redux is to help applications scale well by\n  providing means to manage the state via a unidirectional (một chiều) data flow model.\n\n# What do you understand about Redux Toolkit and Redux Thunk and Redux Saga?\n\n- Redux Thunk for asynchronous logic (Redux middleware).\n- Redux Saga is a middleware library (Redux middleware).\n  - use for side effect (call api, async await, setTimeOut, setInterval,...). build on generate function.\n  - making HTTP requests to external services, accessing browser storage, executing Input/Output operations and many more.\n  ## Helper:\n  - takeEvery():\n  - takeLatest():\n  - take()\n  - put(): dispatch action.\n  - call(): exec function. If return promise, pause Saga until promise return result.\n  - race(): run async more side effect. but only get result for side effect the fastest and cancel result for side effect remaining.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"what-is-redux","text":"What is Redux?"},{"depth":1,"slug":"what-is-flux","text":"What is Flux?"},{"depth":3,"slug":"difference-redux-vs-flux","text":"Difference Redux vs Flux"},{"depth":1,"slug":"what-is-redux-in-react-js","text":"What is Redux in React js?"},{"depth":1,"slug":"what-do-you-understand-about-redux-toolkit-and-redux-thunk-and-redux-saga","text":"What do you understand about Redux Toolkit and Redux Thunk and Redux Saga?"},{"depth":2,"slug":"helper","text":"Helper:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
