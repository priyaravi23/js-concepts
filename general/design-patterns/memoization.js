const multiply = (function () {
    const cache = {};
    return function multiply(...args) {
        const key = args.join('|');
        if (typeof cache[key] === 'undefined') {
            console.log('Calculating key: ', key);
            cache[key] = args.reduce((prev, curr) => prev * curr, 1);
        }
        return cache[key];
    };
}());


console.log('multiply(10, 20)', multiply(10, 20));
console.log('multiply(20, 40)', multiply(100, 200));
console.log('multiply(10, 20)', multiply(10, 20));

// LRU algorithm: element to remove from the cache is the one that is not recently used
// closures for private vars

// memoization

const fib = N => {
    const memo = {};
    for (let i = 0; i <= N; i++) {
        if (i < 2)   memo[i] = i;
        else memo[i] = memo[i-2] + memo[i-1];
    }
    return memo[N];
};

const add = (function () {
    const cache = {};

    return function add(a, b) {
        const key =[...arguments].join('|');

        if (key in cache) {
            console.log('returning cached value for key', key);
            return cache[key];
        } else {
            console.log('calculating the value for key', key);
            cache[key] = a + b;
        }
        return cache[key];
    }
}());


function multiply(a, b) {
    if (typeof b === 'undefined') {
        return multiply.bind(null, a);
    }
    return a * b;
}

/*
   Iterables (maps, sets, arrays, NodeList (document.querySelectorAll), arguments (keyword in functions))
   collections should always be sent as an Array
   spread operator only works on iterables
   Iterable collections allow access to methods: for .. of, .entries(), .keys(), .values()
   convert string to an object [Object Object]
   Object.getOwnPropertyNames and Object.keys will not print a symbol only Reflect.ownKeys()
*/


/*
    Iterable
        - Symbol.iterator ---> fn
        - fun() -----> iterator Object
        - iterator.next() ---> {
                                    value:
                                    done: true / false
                                }

 */

// an iterable operator allows to use for .. of loop

/*
     Generators
        - fun() -----> generator Object
        - generator.next() ---> {
                                    value:
                                    done: true / false
                                }
 */

// generators have the ability to play and pause. yield statement to pause the execution (returns done false)
// when using extends in a class, provide Super() and pass in ...args just like passing in props
