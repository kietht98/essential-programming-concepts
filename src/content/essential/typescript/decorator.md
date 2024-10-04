---
title: "Typescript"
description: "Lorem ipsum dolor sit amet"
pubDate: "Jul 08 2022"
heroImage: "/typescript.jpg"
---

### Introduction

- With the introduction of **Classes** in **Typescript** and **ES6**,
  there now exits certain (chắc chắn) scenarios( kịch bản) that require additional feature to support annotating or modifying classes and class members. Decorator provide a way to (1 cách để ) add both annotation and a meta-programming syntax for class declarations and members.

- **Node**: To enable experimental(thực nghiệm) support for decorator,
  you must enable the **experimentalDecorators** compiler option either on **tsconfig.json**:

  ```
  tsc --target ES5 --experimentalDecorators
  ```

  - compiler tsconfig.json:

  ```
  {
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
  }
  ```

### Decorators

- A **decorator** kind of declaration that can be attached to a **class declaration**, **method**,**accessor**(người tiếp cận), **property** or **parameter**. Decorator use the form **@expression**, where **expression** must evaluate to a function that will be called at runtime with information about the decorated declaration.

  ```
  function sealed(target) {
    // do something with 'target' ...
  }
  ```

### Decorator Factories

- **A Decorator Factory** is simply a function that returns the expression that will be called by the decorator at runtime.

  ```
  function color(value: string) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return function (target) {
      // this is the decorator
      // do something with 'target' and 'value'...
    };
  }
  ```

### Decorator Composition

- Multiple decorators can be applied to a declaration, for example on a single line:

  ```
  @f @g x
  ```

- On multiple lines:

  ```
  function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called");
    };
  }

  function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("second(): called");
    };
  }

  class ExampleClass {
    @first()
    @second()
    method() {}
  }

  // Which would print this output to the console:

  first(): factory evaluated
  second(): factory evaluated
  second(): called
  first(): called
  ```

- When multiple decorators apply to a single declaration, their evaluation is similar to function composition in mathematics. In this model, when composing functions f and g, the resulting composite (f ∘ g)(x) is equivalent to f(g(x)).

- As such, the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:

  - The expressions for each decorator are evaluated top-to-bottom.
  - The results are then called as functions from bottom-to-top.

### Class Decorators

- **A Decorator** is declared just before a function declaration. The class decorator is applied to the constructor of the class and can be used modify, observe, or replace a class definition(định nghĩa). **A class decorator** cannot be used in a declaration file, or in many other ambient(xung quanh) context(such as on declare class).

- if the class decorator returns a values, it will replace the class declaration with the provided constructor function.

  ```
  @sealed
  class BugReport {
    type = "report";
    //title= string;

    constructor(t: string) {
      this.title = t;
    }
  }
  function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

  ```

### Note: the decorator _does not_ change the TypeScript type
