const id = "course/WhyForeachNotStop.md";
						const collection = "essential";
						const slug = "course/whyforeachnotstop";
						const body = "\n### Foreach\n\n- compiler foreach:\n\n```\nconst callback = function(element){\n    console.log(element);\n    if(element === 2){\n        return; // would this make a difference? no.\n    }\n}\nconst array= [1,2,3,4,5,5];\n\nfor(let i = 0; i< array.length>:i++;){\n    callback(array[i])\n}\n```\n\n- **beak**, **continue**, **return** cannot stop foreach\n  because there, foreach is not technically in a loop.\n";
						const data = {title:"Why cannot stop foreach?",description:"cannot stop foreach because there, foreach is not technically in a loop.",pubDate:new Date(1657213200000),heroImage:"/break-from-foreach-in-javascript.png"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/WhyForeachNotStop.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
