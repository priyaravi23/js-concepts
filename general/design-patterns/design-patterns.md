 ## UI Design Patterns
 
 - MVC (model -> view & controller -> model)
 - Module Pattern (ES6 modules) 
    - common JS (using modules.exports({})
    - require JS (using imports and exports)
  - Encapsulating all the data
    - No extraneous variables in the global context
    - Limited access to methods and properties that are exported
    - Singleton: A module is a singleton
  - Factory Pattern
   - Configuration
   - Batch creation
  - Observer
  - Publisher / Subscribe
    - components to listen into events 
    - ex: if component is making an API call to get the data, the other component needs to know what changes have been made to data
    - dom (`addEventListener`)
    - nodejs (`EventEmitter`)
    - browsers (custom events in browsers)
  
  ## Javascript Design Patterns
     
 - Private Variables using closures
     ```text
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
    (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function
    ```
 - Memoization
     ```text
    is an optimization technique that speeds up applications by storing the results of expensive function calls and 
    returning the cached result when the same inputs occur again
    ```
 - Singleton
    ```text
    states that one and only one instance of a class would persist in the memory during the application's life cycle. 
    In other words, this design pattern restricts instantiation of a class to just one object.
    ```
 - Partial Application or Currying
     
 ```js     
 function fn(...args) {
     if (fn.length === args.length) {
       return fn(...args);
     } else {
       return fn.bind(null, ...args)
     }
     } 
     
     console.log(sum(2)(3));
     console.log(sum(2, 3));
```
