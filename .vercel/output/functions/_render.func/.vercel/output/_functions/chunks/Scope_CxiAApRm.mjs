const id = "course/Scope.md";
						const collection = "essential";
						const slug = "course/scope";
						const body = "\n### Scope\n\n- Scope\n\n- Local Scope\n\n- Global scope\n\n- Function Scope\n\n- Block Scope\n\n![alt](./scope-js.png)\n\n### Scope In js\n\n- Scope determines the accessibility (visibility) of variables.\n\n- JavaScript has 3 types of scope:\n\n  - Block scope\n\n  - Function scope\n\n  - Global scope\n\n- One of the differences between var and let is :\n\n  - var will have function scope whereas let will have block scope.\n\n- Function scope is within the function.\n- Block scope is within curly brackets.\n\n  ```\n  var character4 =\n    function foo() {\n        if(true) {\n            var character1 = \"Robin\" //function scope\n            let character2 = \"Ted\" //block scope\n            const character3 = \"Barney\" //block scope\n        }\n        console.log(character1) //Robin\n        console.log(character2) //not defined\n        console.log(character3). //not defined\n    }\n  ```\n\n- Global Scope: Variables declared Globally (outside any function) have Global Scope.\n\n- Global variables can be accessed from anywhere in a JavaScript program.\n\n- Another is the Local Scope, variables declared inside the functions are considered to be of the local scope and it is further divided into function scoped and block scoped.\n\n- Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.\n\n- Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be concise, the variables declared inside the curly braces are called within the block scope.\n";
						const data = {title:"Scope",description:"Nested (child) function have access to the scope of their parent functions",pubDate:new Date(1657213200000),heroImage:"/scope.png"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/Scope.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
