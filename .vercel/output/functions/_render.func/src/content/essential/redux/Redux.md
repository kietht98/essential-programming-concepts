---
title: "What is Redux?"
description: "is an open source library made"
pubDate: "Jul 08 2022"
heroImage: "/redux.jpeg"
---

### What is Redux?

- is an open source library made using the scripting language Javascript.
- primary use lies managing and centralizing (tập trung hóa) application state and
- it's usually used along with Javascript libraries, for instance, React or Angular in order to
- build UIs(User Interface).
- It's a predictable state container for application build using JS.
- It's based on the flux design pattern.
- It's very small in size (around 2KB) and ahs no dependencies.

# What is Flux?

- ![Alt text](./image.png)

- Flux is an application design pattern just like the MVC design pattern.
- It's nothing but a bew kind of architecture that components React and
  the concept of Unidirectional Data Flow.
- The image given below shows how the workflow between dispatcher, store and views components
  with distinct inputs and outputs are in Flux.

### Difference Redux vs Flux

| Comparison parameter            | Redux                                                     | Flux                                      |
| ------------------------------- | --------------------------------------------------------- | ----------------------------------------- |
| Number of store per application | includes a one store                                      | includes multiple store                   |
| Architecture                    | open-source JS libraries used for creating User Interface | is designed to build client-side web apps |
|                                 |                                                           |                                           |

# What is Redux in React js?

- React to read data from a Redux Store, and dispatch Actions to the Store for
  updating the data

- The purpose of Redux is to help applications scale well by
  providing means to manage the state via a unidirectional (một chiều) data flow model.

# What do you understand about Redux Toolkit and Redux Thunk and Redux Saga?

- Redux Thunk for asynchronous logic (Redux middleware).
- Redux Saga is a middleware library (Redux middleware).
  - use for side effect (call api, async await, setTimeOut, setInterval,...). build on generate function.
  - making HTTP requests to external services, accessing browser storage, executing Input/Output operations and many more.
  ## Helper:
  - takeEvery():
  - takeLatest():
  - take()
  - put(): dispatch action.
  - call(): exec function. If return promise, pause Saga until promise return result.
  - race(): run async more side effect. but only get result for side effect the fastest and cancel result for side effect remaining.
