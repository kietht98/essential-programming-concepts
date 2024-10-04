---
title: "Why cannot stop foreach?"
description: "cannot stop foreach
  because there, foreach is not technically in a loop."
pubDate: "Jul 08 2022"
heroImage: "/break-from-foreach-in-javascript.png"
---

### Foreach

- compiler foreach:

```
const callback = function(element){
    console.log(element);
    if(element === 2){
        return; // would this make a difference? no.
    }
}
const array= [1,2,3,4,5,5];

for(let i = 0; i< array.length>:i++;){
    callback(array[i])
}
```

- **beak**, **continue**, **return** cannot stop foreach
  because there, foreach is not technically in a loop.
