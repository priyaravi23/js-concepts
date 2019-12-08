// IIFE context is global object

// Context for methods is the object they are invoked on
// y.sayHello()

const x = {
    name: 'Priya',
    sayHello: function() {
        const x = 10;
        console.log(`Welcome ${this.name} to the first session on React!`);
        const getName = () => {
            // this is not defined for the arrow functions. So it takes whatever this is in the next higher function
            console.log(this);
            console.log(x);
        };
    }
};

const y = {
    name: 'Rohit'
};

console.log(x.sayHello());
console.log(x.sayHello.call(y));


// Global function has the context set to the global object
function test() {
    console.log(this);
}
test();


// new Keyword
function Person() {
    console.log(this);
    this.__myTestVar = 'fc4f9b07-ecaa-46de-b69e-22d8617821e3';
}
Person(); // this will point to global object as the context

const priya = new Person; // context is the newly created object : priya
console.log(priya);


// fat arrow
const getGlobalObject = function () {
    // IIFE function to return the global context / global object
    let global;
    (function () {
        global = this;
    }());
    return global;
};

const x = {
    name: 'Jane Doe',
    sayHello: () => { // This will give you undefined
        console.log(this.name);
        console.log(this === getGlobalObject());
    }
};

x.sayHello();

// new keyword with function constructor

function Person(first, last) {
    this.first = first; // context is the newly created object
    this.last = last;
}

let name = new Person('Priya', 'Rohit');
console.log(`Legal name as per passport is: ${name.first} ${name.last}`);

// JavaScript strict mode does not allow default binding.
// So, when used in a function, in strict mode, this is undefined.

"use strict";
function myFunction() {
    console.log(this);
}

// In an event, this refers to the element that received the event.

// <button onclick="this.style.display='none'">
//     Click to Remove Me!
// </button>
