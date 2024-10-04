import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_Djo8X02C.mjs';
import { a as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from './astro/server_CrkWirIh.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://essential-programming-concepts.vercel.app", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/Advice-From-a-Software-Engineer.md": () => import('./Advice-From-a-Software-Engineer_dFGCVhxU.mjs'),"/src/content/blog/first-post.md": () => import('./first-post_Rf_SPpf0.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_Dph_HlS6.mjs'),"/src/content/blog/second-post.md": () => import('./second-post_BgcE_qqA.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_NdfnCCnt.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_BjQdiQVD.mjs'),"/src/content/essential/About-me.md": () => import('./About-me_DWeLdto8.mjs'),"/src/content/essential/DOM-Virtual/index.md": () => import('./index_UHEzrM1B.mjs'),"/src/content/essential/browser-work/index.md": () => import('./index_BMpAw9e8.mjs'),"/src/content/essential/build-tool-landingpage.md": () => import('./build-tool-landingpage_DYTvO24p.mjs'),"/src/content/essential/careerPath/Advice-From-a-Software-Engineer.md": () => import('./Advice-From-a-Software-Engineer_BnCYpDfM.mjs'),"/src/content/essential/course/CommonJS-EsModules.md": () => import('./CommonJS-EsModules_CLbKsptS.mjs'),"/src/content/essential/course/Current-CurrentTarget.md": () => import('./Current-CurrentTarget_Q2S7aEHt.mjs'),"/src/content/essential/course/FunctionBinding.md": () => import('./FunctionBinding_C1kqD8qD.mjs'),"/src/content/essential/course/MemoryHead-StackMemory.md": () => import('./MemoryHead-StackMemory_B9ejleaA.mjs'),"/src/content/essential/course/Proto-ProtoType.md": () => import('./Proto-ProtoType_B94yLwUK.mjs'),"/src/content/essential/course/Scope.md": () => import('./Scope_CxiAApRm.mjs'),"/src/content/essential/course/WhyForeachNotStop.md": () => import('./WhyForeachNotStop_mo73YE4f.mjs'),"/src/content/essential/docker/index.md": () => import('./index_DXUUeaVQ.mjs'),"/src/content/essential/git/index.md": () => import('./index_C5O7r_kZ.mjs'),"/src/content/essential/graphql/graphql.md": () => import('./graphql_B_a6heGc.mjs'),"/src/content/essential/install-nvm.md": () => import('./install-nvm_D2R5YEMT.mjs'),"/src/content/essential/optimize-in-nextjs/index.md": () => import('./index_ClcN7dCS.mjs'),"/src/content/essential/parcel-build-tools.md": () => import('./parcel-build-tools_DsEAFzxA.mjs'),"/src/content/essential/reactjs/LifeCycle.md": () => import('./LifeCycle_DHPLIzQm.mjs'),"/src/content/essential/redux/Redux.md": () => import('./Redux_C8bVf5Ll.mjs'),"/src/content/essential/rendering-strategies/index.md": () => import('./index_Cjr4WOhy.mjs'),"/src/content/essential/typescript/decorator.md": () => import('./decorator_BKdB04F0.mjs'),"/src/content/essential/understand-hook/index.md": () => import('./index_BF8aAQGv.mjs'),"/src/content/essential/zustand/index.md": () => import('./index_CwpHA6r7.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"advice-from-a-software-engineer":"/src/content/blog/Advice-From-a-Software-Engineer.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md","second-post":"/src/content/blog/second-post.md","third-post":"/src/content/blog/third-post.md","using-mdx":"/src/content/blog/using-mdx.mdx","first-post":"/src/content/blog/first-post.md"}},"essential":{"type":"content","entries":{"install-nvm":"/src/content/essential/install-nvm.md","build-tool-landingpage":"/src/content/essential/build-tool-landingpage.md","parcel-build-tools":"/src/content/essential/parcel-build-tools.md","about-me":"/src/content/essential/About-me.md","careerpath/advice-from-a-software-engineer":"/src/content/essential/careerPath/Advice-From-a-Software-Engineer.md","browser-work":"/src/content/essential/browser-work/index.md","course/commonjs-esmodules":"/src/content/essential/course/CommonJS-EsModules.md","course/current-currenttarget":"/src/content/essential/course/Current-CurrentTarget.md","course/memoryhead-stackmemory":"/src/content/essential/course/MemoryHead-StackMemory.md","docker":"/src/content/essential/docker/index.md","course/proto-prototype":"/src/content/essential/course/Proto-ProtoType.md","course/functionbinding":"/src/content/essential/course/FunctionBinding.md","course/scope":"/src/content/essential/course/Scope.md","course/whyforeachnotstop":"/src/content/essential/course/WhyForeachNotStop.md","optimize-in-nextjs":"/src/content/essential/optimize-in-nextjs/index.md","reactjs/lifecycle":"/src/content/essential/reactjs/LifeCycle.md","graphql/graphql":"/src/content/essential/graphql/graphql.md","redux/redux":"/src/content/essential/redux/Redux.md","git":"/src/content/essential/git/index.md","dom-virtual":"/src/content/essential/DOM-Virtual/index.md","rendering-strategies":"/src/content/essential/rendering-strategies/index.md","typescript/decorator":"/src/content/essential/typescript/decorator.md","understand-hook":"/src/content/essential/understand-hook/index.md","zustand":"/src/content/essential/zustand/index.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/Advice-From-a-Software-Engineer.md": () => import('./Advice-From-a-Software-Engineer_C0K4ZTQH.mjs'),"/src/content/blog/first-post.md": () => import('./first-post_B5cb8g99.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_CBaTPin_.mjs'),"/src/content/blog/second-post.md": () => import('./second-post_DfYyvE7r.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_CuxePnTN.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_BW3Qsf6A.mjs'),"/src/content/essential/About-me.md": () => import('./About-me_CK01kncu.mjs'),"/src/content/essential/DOM-Virtual/index.md": () => import('./index_Cs5M-13p.mjs'),"/src/content/essential/browser-work/index.md": () => import('./index_BTF32h9P.mjs'),"/src/content/essential/build-tool-landingpage.md": () => import('./build-tool-landingpage_ClHxG9Ho.mjs'),"/src/content/essential/careerPath/Advice-From-a-Software-Engineer.md": () => import('./Advice-From-a-Software-Engineer_6ZSLC7KK.mjs'),"/src/content/essential/course/CommonJS-EsModules.md": () => import('./CommonJS-EsModules_BPLzEhS5.mjs'),"/src/content/essential/course/Current-CurrentTarget.md": () => import('./Current-CurrentTarget_DbV38RRL.mjs'),"/src/content/essential/course/FunctionBinding.md": () => import('./FunctionBinding_BtIJiWUT.mjs'),"/src/content/essential/course/MemoryHead-StackMemory.md": () => import('./MemoryHead-StackMemory_U8DLDzNu.mjs'),"/src/content/essential/course/Proto-ProtoType.md": () => import('./Proto-ProtoType_CUjuJktC.mjs'),"/src/content/essential/course/Scope.md": () => import('./Scope_DHKF-FYj.mjs'),"/src/content/essential/course/WhyForeachNotStop.md": () => import('./WhyForeachNotStop_CgO_XMl-.mjs'),"/src/content/essential/docker/index.md": () => import('./index_C72UzY7n.mjs'),"/src/content/essential/git/index.md": () => import('./index_Uo2KR8xa.mjs'),"/src/content/essential/graphql/graphql.md": () => import('./graphql__0nE9RKn.mjs'),"/src/content/essential/install-nvm.md": () => import('./install-nvm_CPAOTVCR.mjs'),"/src/content/essential/optimize-in-nextjs/index.md": () => import('./index_D9pK2TDC.mjs'),"/src/content/essential/parcel-build-tools.md": () => import('./parcel-build-tools_BTWXv3DY.mjs'),"/src/content/essential/reactjs/LifeCycle.md": () => import('./LifeCycle_CgQV5kXW.mjs'),"/src/content/essential/redux/Redux.md": () => import('./Redux_91LOuSYZ.mjs'),"/src/content/essential/rendering-strategies/index.md": () => import('./index_DyaPMNhk.mjs'),"/src/content/essential/typescript/decorator.md": () => import('./decorator_wDD_m1hl.mjs'),"/src/content/essential/understand-hook/index.md": () => import('./index_CWO85A05.mjs'),"/src/content/essential/zustand/index.md": () => import('./index_B6kW3aic.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
