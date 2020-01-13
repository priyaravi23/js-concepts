function RandomNumber() {
    const random = Math.random() * 100;

    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(random);
        }, 1000)
    })
}

async function addSeries() {
    const num1 = await RandomNumber();
    const num2 = await RandomNumber();
    const result = num1 + num2;

    console.log('Series:', result);
}

async function addParallel() {
    const [num1, num2] = Promise.all([RandomNumber(), RandomNumber()]);
    const result = num1 + num2;

    console.log('Parallel:', result);
}

console.log(addSeries());
console.log(addParallel());