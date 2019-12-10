function test() {
    // Array.from
    // Dynamically ascertain what are the inputs to a function
    console.log(Array.isArray(arguments)); // false
    console.log('arguments: ', arguments[0], arguments[1]);
    // Arguments is an array like object
    console.log(Array.from(arguments).join(', '));
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    console.log(arguments.callee.caller);
    switch (arguments.callee.caller.name) {
        case 'invoker':
            return 100;
        case 'oneMoreInvoker':
            return 200;
        default:
            return 300;
    }
}

function invoker() {
    return test('bree', 50);
}

function oneMoreInvoker() {
    return test('sarpa');
}

console.log(invoker());
console.log(oneMoreInvoker());

// invoker > test
