/**
 * @fileOverview Singleton Pattern
 *   Return a single instance of the constructor no matter how many
 *   times the constructor/create function is invoked.
 * */

function Person() {

}

const priya = new Person();
const bree = new Person();

console.log(priya === bree);

function PersonSingleton() {
    console.log('PersonSingleton.instance 1', PersonSingleton.instance);
    PersonSingleton.instance = PersonSingleton.instance || this;
    console.log('PersonSingleton.instance 2', PersonSingleton.instance);
    return PersonSingleton.instance;
}
const krithika = new PersonSingleton();
const jason = new PersonSingleton();

console.log(krithika === jason);
// Problem with the code above is that one can do PersonSingleton.instance = null and break the code.

// Using IIFE to encapsulate scope ('use strict')
const PersonSingletonWithPrivateVariable = (function () {
    // Private variables using closures
    let instance = null;
    return function PersonSingleton() {
        console.log('1: instance is ', instance);
        instance = instance || this;
        console.log('2: instance is ', instance);
        return instance;
    }
})();

const a = new PersonSingletonWithPrivateVariable();
const b = new PersonSingletonWithPrivateVariable();
console.log(a === b);
