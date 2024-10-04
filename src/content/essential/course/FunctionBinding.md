---
title: "FunctionBinding"
description: "The bind() method of Function instances"
pubDate: "Jul 08 2022"
heroImage: "/bindingjs.jpg"
---

##### Function Binding

# Losing this

```
let user = {
    firstName:"Join",
    console.log(this) // 1: this
    sayHi() {
        // using this 1
        console.log("Hello", this.firstName);
    }
}
setTimeout(user.sayHi,1000); // Hello, undefined
// compiler

let fn = user.sayHi; // lose context this of Object user
setTimeout(fn,1000)
```

# Bind

- The bind() method of Function instances creates a new function that,when called,
  calls this function with its this keyword set to the provided value, and a given sequence
  of arguments preceding any provided when the new function is called.

  ```
  const module = {
    name: "Join",
    getX(){
        console.log("hi",this.name);
    }
  }

  const unboundGetX = module.getX;
  console.log(unboundGetX); // hi, undefined
  * solution

  const getUnboundGetX = unboundGetX.bind(module);
  console.log(getUnboundGetX());
  ```

# Call

- The call() method of Function instances calls this function with a given this value and arguments provided individually.
