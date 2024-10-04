const id = "course/Current-CurrentTarget.md";
						const collection = "essential";
						const slug = "course/current-currenttarget";
						const body = "\n\\ - ![Alt text](./image.png)\n\n### Capturing => Target => Bubbling\n\n- Capturing: goes down to the elements.\n- Target: reached and trigger event.\n- Bubble: bubbles up from other elements.\n\n===\n\n# Event Binding\n\n- CurrentTarget is element to which the event is attached. Never change noting.\n- Target is element to which have activated event. It dependent exactly where user click.\n  ![Alt text](./event-binding.png)\n\n# Bubbling\n\n- Event bubbling is a concept in the Dom (Document Object Model).\n  It happens when an element receives an event, and that event bubbles up\n  (or you can say is transmitted(truyền đi) or propagated (truyền bá)) to\n  its parent and ancestor elements in the DOM tree until it gets to root element.\n\n- can you prevents:\n\n  - stopPropagation():\n    - The stopPropagation() method of the Event interface\n      prevents further propagation (ngăn chặn sự lan truyền tiếp theo) of\n      the current event in the Capturing and Bubbling phases.\n  - preventDefault():\n    - stop(cancel) those behaviors, prevent event Spread into elements remaining.\n  - stopImmediatePropagation:\n    - prevent other listeners is listening event called\n\n# Capturing\n\n\\*(chụp / bắt được)\n\n- The event goes down to the element\n\n```\nconst elements = document.getBylElementId(\"container\");\nelements.addEventListener(callBackFn, {capture: true})\n\n// or\n\nelements.addEventListener(callBackFn, true)\n\n\n* note:\n    - if it's false(default), handle bubbling function.\n    - if it's true, handle capturing function.\n```\n";
						const data = {title:"Target vs CurrentTarget",description:"Capturing => Target => Bubbling",pubDate:new Date(1657213200000),heroImage:"/targetjs.webp"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/course/Current-CurrentTarget.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
