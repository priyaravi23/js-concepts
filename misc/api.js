document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {
        initFn().then(() => {}, () => {}).catch(ex => {});
    }
});

function init() {
    console.log('Making an fetch API call ... ');
    const promise = fetch('https://api.github.com/users/krithikaswaminathan/repos');
    promise.then((response) => {
        console.log(response);
        if (response.status.toString()[0] === '2') {
            console.log('Success .. ');
            response.json().then(data => console.log(data));
        } else {
            console.log('Error', response.status);
        }
    }, (err) => {
        console.log(err);
    });
}

async function initFn() {
    try {
        const response = await fetch('https://api.github.com/users/krithikaswaminathan/repos');
        if (response.status.toString()[0] === '2') {
            const data = await response.json();
            console.log(data);
        } else {
            console.log('Error making the API call ... ');
        }
    } catch (ex) {
        console.log('Error getting the data: ', ex);
    }
}



