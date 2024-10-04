const id = "typescript/decorator.md";
						const collection = "essential";
						const slug = "typescript/decorator";
						const body = "\n### Introduction\n\n- With the introduction of **Classes** in **Typescript** and **ES6**,\n  there now exits certain (chắc chắn) scenarios( kịch bản) that require additional feature to support annotating or modifying classes and class members. Decorator provide a way to (1 cách để ) add both annotation and a meta-programming syntax for class declarations and members.\n\n- **Node**: To enable experimental(thực nghiệm) support for decorator,\n  you must enable the **experimentalDecorators** compiler option either on **tsconfig.json**:\n\n  ```\n  tsc --target ES5 --experimentalDecorators\n  ```\n\n  - compiler tsconfig.json:\n\n  ```\n  {\n  \"compilerOptions\": {\n    \"target\": \"ES5\",\n    \"experimentalDecorators\": true\n  }\n  }\n  ```\n\n### Decorators\n\n- A **decorator** kind of declaration that can be attached to a **class declaration**, **method**,**accessor**(người tiếp cận), **property** or **parameter**. Decorator use the form **@expression**, where **expression** must evaluate to a function that will be called at runtime with information about the decorated declaration.\n\n  ```\n  function sealed(target) {\n    // do something with 'target' ...\n  }\n  ```\n\n### Decorator Factories\n\n- **A Decorator Factory** is simply a function that returns the expression that will be called by the decorator at runtime.\n\n  ```\n  function color(value: string) {\n    // this is the decorator factory, it sets up\n    // the returned decorator function\n    return function (target) {\n      // this is the decorator\n      // do something with 'target' and 'value'...\n    };\n  }\n  ```\n\n### Decorator Composition\n\n- Multiple decorators can be applied to a declaration, for example on a single line:\n\n  ```\n  @f @g x\n  ```\n\n- On multiple lines:\n\n  ```\n  function first() {\n    console.log(\"first(): factory evaluated\");\n    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n      console.log(\"first(): called\");\n    };\n  }\n\n  function second() {\n    console.log(\"second(): factory evaluated\");\n    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n      console.log(\"second(): called\");\n    };\n  }\n\n  class ExampleClass {\n    @first()\n    @second()\n    method() {}\n  }\n\n  // Which would print this output to the console:\n\n  first(): factory evaluated\n  second(): factory evaluated\n  second(): called\n  first(): called\n  ```\n\n- When multiple decorators apply to a single declaration, their evaluation is similar to function composition in mathematics. In this model, when composing functions f and g, the resulting composite (f ∘ g)(x) is equivalent to f(g(x)).\n\n- As such, the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:\n\n  - The expressions for each decorator are evaluated top-to-bottom.\n  - The results are then called as functions from bottom-to-top.\n\n### Class Decorators\n\n- **A Decorator** is declared just before a function declaration. The class decorator is applied to the constructor of the class and can be used modify, observe, or replace a class definition(định nghĩa). **A class decorator** cannot be used in a declaration file, or in many other ambient(xung quanh) context(such as on declare class).\n\n- if the class decorator returns a values, it will replace the class declaration with the provided constructor function.\n\n  ```\n  @sealed\n  class BugReport {\n    type = \"report\";\n    //title= string;\n\n    constructor(t: string) {\n      this.title = t;\n    }\n  }\n  function sealed(constructor: Function) {\n    Object.seal(constructor);\n    Object.seal(constructor.prototype);\n  }\n\n  ```\n\n### Note: the decorator _does not_ change the TypeScript type\n";
						const data = {title:"Typescript",description:"Lorem ipsum dolor sit amet",pubDate:new Date(1657213200000),heroImage:"/typescript.jpg"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/typescript/decorator.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
