function test(...args) {
    // args is an array
    console.log(Array.isArray(args));
    console.log(args);
}

function data() {
    const keys = Object.keys(arguments);
    console.log('keys: ', keys);
    console.log('looping using in ... ');
    for (let prop in arguments) { // in for objects
        console.log(prop);
    }
    // will this code run?
    for (let val of arguments) {
        console.log(val);
    }
}

data(100,20,30);

test(10, 20, 30, 40);


function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(111, 1000, -887, 34, 0, 1755));

function findMin() {
    var i;
    var min = Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(findMin(111, 1000, -887, 34, 0, 1755));
