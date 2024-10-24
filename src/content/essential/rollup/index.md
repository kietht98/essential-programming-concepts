---
title: "Rollup JS"
description: "Rollup is a module bundler for JavaScript"
pubDate: "Jul 08 2024"
heroImage: "/typescript.jpg"
---

Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the standardized ES module format for code, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. Rollup can optimize ES modules for faster native loading in modern browsers, or output a legacy module format allowing ES module workflows today.

### Why use:

    - Developing software is usually easier if you break your project into smaller separate pieces, since that often removes unexpected interactions and dramatically reduces the complexity of the problems you'll need to solve, and simply writing smaller projects in the first place isn't necessarily the answer. Unfortunately, JavaScript has not historically included this capability as a core feature in the language.

    - This finally changed with ES modules support in JavaScript, which provides a syntax for importing and exporting functions and data so they can be shared between separate scripts. Most browsers and Node.js support ES modules. However, Node.js releases before 12.17 support ES modules only behind the --experimental-modules flag, and older browsers like Internet Explorer do not support ES modules at all. Rollup allows you to write your code using ES modules, and run your application even in environments that do not support ES modules natively. For environments that support them, Rollup can output optimized ES modules; for environments that don't, Rollup can compile your code to other formats such as CommonJS modules, AMD modules, and IIFE-style scripts. This means that you get to write future-proof code, and you also get the tremendous benefits of...

### Key Features of Rollup:

### Tree Shaking:

- Rollup performs tree shaking, meaning it removes unused or dead code. This is particularly useful for bundling libraries, as it helps produce smaller and more efficient bundles by only including the code that’s actually used.
- ES Modules (ESM):
- Rollup was designed with ES modules in mind, which are the standard format for JavaScript modules. It works best when your codebase uses import and export syntax, though it supports other formats as well (e.g., CommonJS and AMD).

### Plugins:

- Rollup has a powerful plugin system that allows you to extend its functionality. For example, you can use plugins to handle different types of files (CSS, JSON, etc.), minify code, or transpile code with Babel.
  Popular plugins include:
  @rollup/plugin-commonjs: To convert CommonJS modules to ES6.
  @rollup/plugin-node-resolve: To resolve node_modules.
  rollup-plugin-terser: For minifying the bundle.
- Multiple Output Formats:
- Rollup can output bundles in various module formats, such as:
  ES Module (es or esm)
  CommonJS (cjs)
  IIFE (Immediately Invoked Function Expression)
  UMD (Universal Module Definition)
- Code Splitting:
- Rollup supports code splitting to optimize the bundle by splitting large files into smaller chunks, enabling lazy loading.
- Bundling Libraries:
- It is particularly useful for creating libraries that are shared between multiple projects, where small bundle size is crucial, and tree-shaking ensures only the necessary parts of the library are included in the final build.
  Example of a Simple Rollup Configuration:
- javascript
- // rollup.config.js

```
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',  // Entry file
  output: {
    file: 'dist/bundle.js',  // Output bundle file
    format: 'iife',  // Output format (e.g., 'iife', 'esm', 'cjs', 'umd')
    name: 'MyLibrary',  // Global variable name for the IIFE/UMD bundle
    sourcemap: true  // Enable sourcemaps for debugging
  },
  plugins: [
    resolve(),  // Resolves modules in node_modules
    commonjs(), // Converts CommonJS to ES modules
    terser()    // Minifies the bundle
  ]
};
```

- Breakdown of Example:

  - Input: The input specifies the entry file, which Rollup will start bundling from (e.g., src/index.js).
  - Output: The output specifies the location and format of the generated bundle (e.g., dist/bundle.js).
  - Plugins: Rollup uses plugins to handle various tasks. In this case:
    - @rollup/plugin-node-resolve allows resolving dependencies from node_modules.
    - @rollup/plugin-commonjs converts CommonJS modules to ES modules, which Rollup natively supports.rollup-plugin-terser minifies the bundle to reduce file size.

- Multiple Output Formats Example:

```
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/my-library.cjs.js',
      format: 'cjs', // CommonJS format
    },
    {
      file: 'dist/my-library.esm.js',
      format: 'esm', // ES Module format
    },
    {
      file: 'dist/my-library.umd.js',
      format: 'umd', // UMD format
      name: 'MyLibrary', // Global variable name for UMD/IIFE bundles
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
};

```

### This configuration outputs the bundle in three formats:

- CommonJS (CJS), typically for Node.js.
- ES Module (ESM), which is the native module format for modern browsers.
- UMD, which can run in both browsers and Node.js environments.

### When to Use Rollup:

- Library Development: Rollup is ideal for creating libraries because it produces lean, optimized bundles, and its tree-shaking feature ensures unused code is excluded.
- Modern JavaScript Projects: If you're writing modern ES6/ESM JavaScript, Rollup is a great fit due to its native ES module support.
- Smaller Bundles: If your primary concern is optimizing for small bundle sizes, Rollup is known to produce smaller bundles compared to Webpack, especially for libraries.

### When to Consider Other Bundlers (e.g., Webpack):

- Applications: If you're working on a larger web application with more complex features like hot module replacement (HMR), multi-page setup, or CSS preprocessing, Webpack might be more suitable since it is more feature-rich for complex applications.
- Multiple Module Formats: Rollup shines when bundling libraries, but if your project deals with a variety of different module formats (like CommonJS or AMD), Webpack may have better support out-of-the-box.
