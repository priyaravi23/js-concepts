// Object.keys() Vs Object.getOwnPropertyNames()

const a = {};

Object.defineProperties(a, {
    one: {enumerable: true, value: 'one'},
    two: {enumerable: false, value: 'two'},
});

console.log(Object.keys(a)); // ["one"]
console.log(Object.getOwnPropertyNames(a)); // ["one", "two"]


// Object.defineProperty() Vs Object.defineProperties()

const obj = {};

Object.defineProperties(obj, {
    property1: {
        value: 3,
        writable: true
    },
    property2: {
        value: 7,
        writable: false
    }
});

console.log('prev', obj.property1);
obj.property1 = 17;
console.log('after', obj.property1);

console.log('prev', obj.property2);
obj.property2 = 26;
console.log('after', obj.property2);


// Object.defineProperty()

const person = {};

Object.defineProperty(person, 'property1', {
    value: 28,
    writable: false
});

console.log('prev', person.property1);
person.property1 = 30;
console.log('after', person.property1);

// Object.entries()

const student = {
    name: 'Priya',
    age: 25
};

for (let [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}

// Object.keys()

const object1 = {
    a: 'welcome',
    b: 42,
    c: false
};

console.log(Object.keys(object1));