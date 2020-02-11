const multiply = (function () {
    const cache = {};
// todo: fib series
// fibCache[2] = fib(x)
// fibCache[3] = fibCache[1] + fibCache[2]
    // cache size ? get rid of older items
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


// big set of data
// can uniquely identify using MD5 hash
// LRU algorithm: element to remove from the cache is the one that is not recently used
// closures for private vars