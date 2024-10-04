const id = "reactjs/LifeCycle.md";
						const collection = "essential";
						const slug = "reactjs/lifecycle";
						const body = "\n### Life cycle\n\n- A component mounts when it’s added to the screen.\n- A component updates when it receives new props or state, usually in response to an interaction.\n- A component unmounts when it’s removed from the screen.\n\n![Alt text](./lifecyclereactjs.webp)\n\n````\nconst serverUrl = 'https://localhost:1234';\n\nfunction ChatRoom({ roomId }) {\n  useEffect(() => {\n    const connection = createConnection(serverUrl, roomId);\n    connection.connect();\n    return () => {\n      connection.disconnect();\n    };\n  }, [roomId]);\n  // ...\n}```\n````\n";
						const data = {title:"Life cycle ReactJs",description:"A component mounts when it’s added to the screen.",pubDate:new Date(1657213200000),heroImage:"/lifecycle.webp"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/reactjs/LifeCycle.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
