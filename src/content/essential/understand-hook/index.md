---
title: "Understand hook in reactJS 🤖🤖🤖"
description: "Understand hook in reactJS"
pubDate: "Sep 30 2024"
heroImage: "/hook.jpg"
---

🤖🤖🤖 In React.js, **Hooks** are functions that allow you to use React features like state and lifecycle methods inside functional components. Prior to the introduction of hooks in React 16.8, these features were only available in class components.

### Why Use Hooks?

- **Simplify Code**: Hooks make it possible to manage state and side effects without needing class components, which can simplify the structure and readability of your code.
- **Reuse Logic**: With hooks, you can extract and reuse stateful logic between components without needing to refactor components themselves.
- **Functional Components**: You can keep everything functional, avoiding the complexity of classes.

### Common React Hooks

1. **useState**

   - Manages local state in a functional component.
   - Returns an array with two elements: the current state and a function to update the state.

   Example:

   ```javascript
   import { useState } from "react";

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>Click me</button>
       </div>
     );
   }
   ```

   - `useState(0)` initializes the state variable `count` with a value of `0`, and `setCount` is used to update the state.

2. **useEffect**

   - Handles side effects like data fetching, subscriptions, or directly interacting with the DOM.
   - Runs after the component has rendered and can be configured to run on specific changes in dependencies.

   Example:

   ```javascript
   import { useState, useEffect } from "react";

   function Example() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       // This runs after every render (componentDidMount & componentDidUpdate)
       document.title = `You clicked ${count} times`;

       return () => {
         // Cleanup function (like componentWillUnmount)
         console.log("Cleanup effect");
       };
     }, [count]); // Dependency array, effect runs only when `count` changes

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>Click me</button>
       </div>
     );
   }
   ```

   - The `useEffect` hook with the dependency array `[count]` ensures that the effect only runs when `count` changes. Without the dependency array, the effect would run after every render.

3. **useContext**

   - Accesses values stored in a React Context. Context provides a way to pass data through the component tree without needing to pass props down manually.

   Example:

   ```javascript
   import React, { useContext, createContext } from "react";

   const MyContext = createContext();

   function Component() {
     const value = useContext(MyContext);
     return <p>{value}</p>;
   }

   function App() {
     return (
       <MyContext.Provider value="Hello, World!">
         <Component />
       </MyContext.Provider>
     );
   }
   ```

4. **useRef**

   - Provides a way to persist values across renders without causing a re-render. It’s often used to reference DOM elements directly.

   Example:

   ```javascript
   import { useRef } from "react";

   function InputFocus() {
     const inputEl = useRef(null);

     const focusInput = () => {
       inputEl.current.focus();
     };

     return (
       <div>
         <input ref={inputEl} type="text" />
         <button onClick={focusInput}>Focus Input</button>
       </div>
     );
   }
   ```

5. **useReducer**

   - Manages complex state logic by dispatching actions to update state, similar to how you would with Redux.

   Example:

   ```javascript
   import { useReducer } from "react";

   const initialState = { count: 0 };

   function reducer(state, action) {
     switch (action.type) {
       case "increment":
         return { count: state.count + 1 };
       case "decrement":
         return { count: state.count - 1 };
       default:
         throw new Error();
     }
   }

   function Counter() {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
       <div>
         <p>Count: {state.count}</p>
         <button onClick={() => dispatch({ type: "increment" })}>+</button>
         <button onClick={() => dispatch({ type: "decrement" })}>-</button>
       </div>
     );
   }
   ```

### Custom Hooks

You can create **custom hooks** to encapsulate reusable logic. A custom hook is simply a function that uses one or more of the built-in hooks and follows the naming convention of `useSomething`.

Example of a custom hook for managing form inputs:

```javascript
import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

// Usage in a component
function MyForm() {
  const [name, handleNameChange] = useInput("");

  return (
    <input value={name} onChange={handleNameChange} placeholder="Enter name" />
  );
}
```

### Summary

- **Hooks** allow functional components to have state, side effects, and other lifecycle features without needing to convert them to class components.
- The most common hooks are `useState`, `useEffect`, `useContext`, `useRef`, and `useReducer`.
- **Custom Hooks** allow you to reuse stateful logic across multiple components.
