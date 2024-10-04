---
title: "CommonJS vs EsModules"
description: "CommonJS vs EsModules"
pubDate: "Jul 08 2022"
heroImage: "/cjs.png"
---

| \              | Functionality                  | CommonJS (Microsoft)                       | ES Module (Google) |
| -------------- | ------------------------------ | ------------------------------------------ | ------------------ |
| Functionality  | Works with the NodeJs platform | Works with the web browser environment     |
|                |                                |                                            |
| Compilation    | Compiled into AMD modules      | Does not require a modules loader like AMD |
|                |                                |                                            |
| Dependencies   | All dependencies are listed in | Reference any other module in the same     |
|                | the same file ()               | package available on the global namespace  |
|                |                                |                                            |
| Type-checking  | No type-checking capabilities  | Robust typing support via imports          |
|                |                                |                                            |
|                |                                |                                            |
| Dependency     | Packaging up functionality     | Declare dependencies between modules       |
| Packaging      | into small pieces              |                                            |
|                |                                |                                            |
|                |                                |                                            |
| File Structure | Flat files                     | References to other modules                |
|                |                                |                                            |
|                |                                |                                            |
| Export         | Exports in the same file       | Exports scattered through codebase         |
|                |                                |                                            |
|                |                                |                                            |
| Import         | No import functionality        | Must use a require statement               |
|                |                                | to access exported functions and           |
|                |                                | properties                                 |
