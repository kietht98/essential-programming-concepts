const id = "understand-hook/index.md";
						const collection = "essential";
						const slug = "understand-hook";
						const body = "\r\n🤖🤖🤖 In React.js, **Hooks** are functions that allow you to use React features like state and lifecycle methods inside functional components. Prior to the introduction of hooks in React 16.8, these features were only available in class components.\r\n\r\n### Why Use Hooks?\r\n\r\n- **Simplify Code**: Hooks make it possible to manage state and side effects without needing class components, which can simplify the structure and readability of your code.\r\n- **Reuse Logic**: With hooks, you can extract and reuse stateful logic between components without needing to refactor components themselves.\r\n- **Functional Components**: You can keep everything functional, avoiding the complexity of classes.\r\n\r\n### Common React Hooks\r\n\r\n1. **useState**\r\n\r\n   - Manages local state in a functional component.\r\n   - Returns an array with two elements: the current state and a function to update the state.\r\n\r\n   Example:\r\n\r\n   ```javascript\r\n   import { useState } from \"react\";\r\n\r\n   function Counter() {\r\n     const [count, setCount] = useState(0);\r\n\r\n     return (\r\n       <div>\r\n         <p>You clicked {count} times</p>\r\n         <button onClick={() => setCount(count + 1)}>Click me</button>\r\n       </div>\r\n     );\r\n   }\r\n   ```\r\n\r\n   - `useState(0)` initializes the state variable `count` with a value of `0`, and `setCount` is used to update the state.\r\n\r\n2. **useEffect**\r\n\r\n   - Handles side effects like data fetching, subscriptions, or directly interacting with the DOM.\r\n   - Runs after the component has rendered and can be configured to run on specific changes in dependencies.\r\n\r\n   Example:\r\n\r\n   ```javascript\r\n   import { useState, useEffect } from \"react\";\r\n\r\n   function Example() {\r\n     const [count, setCount] = useState(0);\r\n\r\n     useEffect(() => {\r\n       // This runs after every render (componentDidMount & componentDidUpdate)\r\n       document.title = `You clicked ${count} times`;\r\n\r\n       return () => {\r\n         // Cleanup function (like componentWillUnmount)\r\n         console.log(\"Cleanup effect\");\r\n       };\r\n     }, [count]); // Dependency array, effect runs only when `count` changes\r\n\r\n     return (\r\n       <div>\r\n         <p>You clicked {count} times</p>\r\n         <button onClick={() => setCount(count + 1)}>Click me</button>\r\n       </div>\r\n     );\r\n   }\r\n   ```\r\n\r\n   - The `useEffect` hook with the dependency array `[count]` ensures that the effect only runs when `count` changes. Without the dependency array, the effect would run after every render.\r\n\r\n3. **useContext**\r\n\r\n   - Accesses values stored in a React Context. Context provides a way to pass data through the component tree without needing to pass props down manually.\r\n\r\n   Example:\r\n\r\n   ```javascript\r\n   import React, { useContext, createContext } from \"react\";\r\n\r\n   const MyContext = createContext();\r\n\r\n   function Component() {\r\n     const value = useContext(MyContext);\r\n     return <p>{value}</p>;\r\n   }\r\n\r\n   function App() {\r\n     return (\r\n       <MyContext.Provider value=\"Hello, World!\">\r\n         <Component />\r\n       </MyContext.Provider>\r\n     );\r\n   }\r\n   ```\r\n\r\n4. **useRef**\r\n\r\n   - Provides a way to persist values across renders without causing a re-render. It’s often used to reference DOM elements directly.\r\n\r\n   Example:\r\n\r\n   ```javascript\r\n   import { useRef } from \"react\";\r\n\r\n   function InputFocus() {\r\n     const inputEl = useRef(null);\r\n\r\n     const focusInput = () => {\r\n       inputEl.current.focus();\r\n     };\r\n\r\n     return (\r\n       <div>\r\n         <input ref={inputEl} type=\"text\" />\r\n         <button onClick={focusInput}>Focus Input</button>\r\n       </div>\r\n     );\r\n   }\r\n   ```\r\n\r\n5. **useReducer**\r\n\r\n   - Manages complex state logic by dispatching actions to update state, similar to how you would with Redux.\r\n\r\n   Example:\r\n\r\n   ```javascript\r\n   import { useReducer } from \"react\";\r\n\r\n   const initialState = { count: 0 };\r\n\r\n   function reducer(state, action) {\r\n     switch (action.type) {\r\n       case \"increment\":\r\n         return { count: state.count + 1 };\r\n       case \"decrement\":\r\n         return { count: state.count - 1 };\r\n       default:\r\n         throw new Error();\r\n     }\r\n   }\r\n\r\n   function Counter() {\r\n     const [state, dispatch] = useReducer(reducer, initialState);\r\n\r\n     return (\r\n       <div>\r\n         <p>Count: {state.count}</p>\r\n         <button onClick={() => dispatch({ type: \"increment\" })}>+</button>\r\n         <button onClick={() => dispatch({ type: \"decrement\" })}>-</button>\r\n       </div>\r\n     );\r\n   }\r\n   ```\r\n\r\n### Custom Hooks\r\n\r\nYou can create **custom hooks** to encapsulate reusable logic. A custom hook is simply a function that uses one or more of the built-in hooks and follows the naming convention of `useSomething`.\r\n\r\nExample of a custom hook for managing form inputs:\r\n\r\n```javascript\r\nimport { useState } from \"react\";\r\n\r\nfunction useInput(initialValue) {\r\n  const [value, setValue] = useState(initialValue);\r\n\r\n  const handleChange = (e) => {\r\n    setValue(e.target.value);\r\n  };\r\n\r\n  return [value, handleChange];\r\n}\r\n\r\n// Usage in a component\r\nfunction MyForm() {\r\n  const [name, handleNameChange] = useInput(\"\");\r\n\r\n  return (\r\n    <input value={name} onChange={handleNameChange} placeholder=\"Enter name\" />\r\n  );\r\n}\r\n```\r\n\r\n### Summary\r\n\r\n- **Hooks** allow functional components to have state, side effects, and other lifecycle features without needing to convert them to class components.\r\n- The most common hooks are `useState`, `useEffect`, `useContext`, `useRef`, and `useReducer`.\r\n- **Custom Hooks** allow you to reuse stateful logic across multiple components.\r\n";
						const data = {title:"Understand hook in reactJS 🤖🤖🤖",description:"Understand hook in reactJS",pubDate:new Date(1727629200000),heroImage:"/hook.jpg"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/kiet.huynh/Documents/essential-programming-concepts-master/essential-programming-concepts-master/src/content/essential/understand-hook/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
