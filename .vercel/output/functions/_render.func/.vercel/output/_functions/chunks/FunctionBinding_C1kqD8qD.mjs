const id = "course/FunctionBinding.md";
						const collection = "essential";
						const slug = "course/functionbinding";
						const body = "\n##### Function Binding\n\n# Losing this\n\n```\nlet user = {\n    firstName:\"Join\",\n    console.log(this) // 1: this\n    sayHi() {\n        // using this 1\n        console.log(\"Hello\", this.firstName);\n    }\n}\nsetTimeout(user.sayHi,1000); // Hello, undefined\n// compiler\n\nlet fn = user.sayHi; // lose context this of Object user\nsetTimeout(fn,1000)\n```\n\n# Bind\n\n- The bind() method of Function instances creates a new function that,when called,\n  calls this function with its this keyword set to the provided value, and a given sequence\n  of arguments preceding any provided when the new function is called.\n\n  ```\n  const module = {\n    name: \"Join\",\n    getX(){\n        console.log(\"hi\",this.name);\n    }\n  }\n\n  const unboundGetX = module.getX;\n  console.log(unboundGetX); // hi, undefined\n  * solution\n\n  const getUnboundGetX = unboundGetX.bind(module);\n  console.log(getUnboundGetX());\n  ```\n\n# Call\n\n- The call() method of Function instances calls this function with a given this value and arguments provided individually.\n";
						const data = {title:"FunctionBinding",description:"The bind() method of Function instances",pubDate:new Date(1657213200000),heroImage:"/bindingjs.jpg"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/FunctionBinding.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
