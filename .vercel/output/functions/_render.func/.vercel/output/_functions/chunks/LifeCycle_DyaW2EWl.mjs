import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_CrkWirIh.mjs';
import { g as getImage } from './_astro_assets_iFGlQTNC.mjs';
import 'clsx';

const Astro__Z1Wirur = new Proxy({"src":"/_astro/lifecyclereactjs.nxQafuRb.webp","width":2438,"height":1350,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/reactjs/lifecyclereactjs.webp";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./lifecyclereactjs\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./lifecyclereactjs.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1Wirur, ...props});
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
			const html = await updateImageReferences("<h3 id=\"life-cycle\">Life cycle</h3>\n<ul>\n<li>A component mounts when it’s added to the screen.</li>\n<li>A component updates when it receives new props or state, usually in response to an interaction.</li>\n<li>A component unmounts when it’s removed from the screen.</li>\n</ul>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./lifecyclereactjs.webp&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\"></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>const serverUrl = 'https://localhost:1234';</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>function ChatRoom({ roomId }) {</span></span>\n<span class=\"line\"><span>  useEffect(() => {</span></span>\n<span class=\"line\"><span>    const connection = createConnection(serverUrl, roomId);</span></span>\n<span class=\"line\"><span>    connection.connect();</span></span>\n<span class=\"line\"><span>    return () => {</span></span>\n<span class=\"line\"><span>      connection.disconnect();</span></span>\n<span class=\"line\"><span>    };</span></span>\n<span class=\"line\"><span>  }, [roomId]);</span></span>\n<span class=\"line\"><span>  // ...</span></span>\n<span class=\"line\"><span>}```</span></span>\n<span class=\"line\"><span></span></span></code></pre>");
	

				const frontmatter = {"title":"Life cycle ReactJs","description":"A component mounts when it’s added to the screen.","pubDate":"Jul 08 2022","heroImage":"/lifecycle.webp"};
				const file = "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/reactjs/LifeCycle.md";
				const url = undefined;
				function rawContent() {
					return "\n### Life cycle\n\n- A component mounts when it’s added to the screen.\n- A component updates when it receives new props or state, usually in response to an interaction.\n- A component unmounts when it’s removed from the screen.\n\n![Alt text](./lifecyclereactjs.webp)\n\n````\nconst serverUrl = 'https://localhost:1234';\n\nfunction ChatRoom({ roomId }) {\n  useEffect(() => {\n    const connection = createConnection(serverUrl, roomId);\n    connection.connect();\n    return () => {\n      connection.disconnect();\n    };\n  }, [roomId]);\n  // ...\n}```\n````\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"life-cycle","text":"Life cycle"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
