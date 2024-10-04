---
title: "Prototypal Inheritance and the Prototype chain"
description: "ES6 introduced classes which is the modern way to construct objects"
pubDate: "Jul 08 2022"
heroImage: "/prototype.png"
---

\ // Prototypal Inheritance and the Prototype chain

// ES6 introduced classes which is the modern way to construct objects

// that said, prototypal inheritance and the prototype chain are:

- 1: "under the hood", (ES6 Classes are considered (được xem) "syntactic sugar").
- 2: often in interview questions.
- 3: and are useful to understand.

// Object Literals:

```
const person = {
  alive: true
};
const musician = {
  plays: true
};
musician.__proto__ = person;

```
