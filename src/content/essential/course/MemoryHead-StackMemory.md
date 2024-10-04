---
title: "MemoryHead vs StackMemory"
description: "MemoryHead ...."
pubDate: "Jul 08 2022"
heroImage: "/memory.png"
---

![Alt text](./memory-management-in-js.png)

### Stack Memory

- primitive type

- string| number| boolean| null| undefined | Symbol | BigInt

### Head Memory

- reference

- Arrays |Function | Objects

### Macro task

- is a collection of distinct and independent tasks.
- setTimeout, setImmediate, requestAnimationFrame, setInterval, requestAnimationFrame, etc

### Micro task

- are minor tasks that update the state of an application and should be completed before the browser moves on to other activities, such as re-rendering the user interface
- process.nextTick, Promises, queueMicrotask, MutationObserver
