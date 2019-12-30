# Interview Prep

## Working with yarn

 - To initialize a yarn project (supports npm modules) use `yarn init -y`
 - Notice the version for the project: <major>.<minor>.<patch>
 - // todo: Add reference here

## Core Javascript

### Definitions
 - Closure [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
```
Closure is the function object and the variables in scope when the function was defined.
```
 - Context
```
The `this` keyword
 - Only functions have access to the this keyword. One exception is the global context.
 - IIFE, Global Functions, Constructors, Methods
 - Arrow Functions (Do not have a binding to this or arguments)
```
 - Prototypal inheritance (provide example and not the definition)
```
 - Every object in Javascript has a prototype attribute that points to an object from which it inherits functions and methods.
 - If one queries a javascript object for a property or method, that does not exist on the object
  it will go up the prototypal chain till it finds it or hits null.
 - For objects instantiated by a constructor, the parent is the prototype property of the constructor.
```

## Examples for Closure / Inheritance / Context(this)

```js
function outerFunction() {
  const outerFunctionVariable = 10;
  return function innerFunction() {
    return outerFunctionVariable;
  }
}

const closure = outerFunction();
console.log(closure()); // Returns the outerFunctionVariable even though it is not declared in the inner function.
```

```js
const x = { type: 'person' };
const y = Object.create(x);
console.log(x.type); // person - own property
console.log(y.type); // person - inherited
y.type = 'candidate';
console.log(y.type); // candidate - own property
delete y.type;
console.log(y.type); // person - inherited
```

```js
// Showcase all 4 scenarios for this keyword
/*
* IIFE
* Global Function
* Method
* Constructors (new keyword)
*
* Arrow Function
* */
```

## Common questions

 - Functions (call, apply, bind)
    - How can you invoke a function with an unknown number of params at runtime?


