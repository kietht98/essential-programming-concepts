const id = "redux/Redux.md";
						const collection = "essential";
						const slug = "redux/redux";
						const body = "\n### What is Redux?\n\n- is an open source library made using the scripting language Javascript.\n- primary use lies managing and centralizing (tập trung hóa) application state and\n- it's usually used along with Javascript libraries, for instance, React or Angular in order to\n- build UIs(User Interface).\n- It's a predictable state container for application build using JS.\n- It's based on the flux design pattern.\n- It's very small in size (around 2KB) and ahs no dependencies.\n\n# What is Flux?\n\n- ![Alt text](./image.png)\n\n- Flux is an application design pattern just like the MVC design pattern.\n- It's nothing but a bew kind of architecture that components React and\n  the concept of Unidirectional Data Flow.\n- The image given below shows how the workflow between dispatcher, store and views components\n  with distinct inputs and outputs are in Flux.\n\n### Difference Redux vs Flux\n\n| Comparison parameter            | Redux                                                     | Flux                                      |\n| ------------------------------- | --------------------------------------------------------- | ----------------------------------------- |\n| Number of store per application | includes a one store                                      | includes multiple store                   |\n| Architecture                    | open-source JS libraries used for creating User Interface | is designed to build client-side web apps |\n|                                 |                                                           |                                           |\n\n# What is Redux in React js?\n\n- React to read data from a Redux Store, and dispatch Actions to the Store for\n  updating the data\n\n- The purpose of Redux is to help applications scale well by\n  providing means to manage the state via a unidirectional (một chiều) data flow model.\n\n# What do you understand about Redux Toolkit and Redux Thunk and Redux Saga?\n\n- Redux Thunk for asynchronous logic (Redux middleware).\n- Redux Saga is a middleware library (Redux middleware).\n  - use for side effect (call api, async await, setTimeOut, setInterval,...). build on generate function.\n  - making HTTP requests to external services, accessing browser storage, executing Input/Output operations and many more.\n  ## Helper:\n  - takeEvery():\n  - takeLatest():\n  - take()\n  - put(): dispatch action.\n  - call(): exec function. If return promise, pause Saga until promise return result.\n  - race(): run async more side effect. but only get result for side effect the fastest and cancel result for side effect remaining.\n";
						const data = {title:"What is Redux?",description:"is an open source library made",pubDate:new Date(1657213200000),heroImage:"/redux.jpeg"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/redux/Redux.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
