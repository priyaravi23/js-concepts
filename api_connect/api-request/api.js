document.addEventListener('readystatechange', function () {
    // 1. loading state
    // 2. interactive state
    // 3. complete state
    console.log(document.readyState);
    if (document.readyState === 'interactive') {
        // make an api call to get some data
        const promise = fetch('https://api.github.com/repos/bindhyeswari/advanced-angularjs');
        promise.then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    console.log(data);

                    const root = document.querySelector('.container');
                    render(root, data);
                });
            }
        }, (err) => {
            console.log(err);
        });
        // load that data into the page

        const containers = document.querySelectorAll('.container');
        console.log('containers are ', containers);
    }
});

function render(root, data) {
    let result = data.owner;
    console.log(result);

    Object.entries(result).forEach(([key, val]) => {
        let name = createDivElement(key, 'repo');
        let value = createDivElement(val, 'name');

        name.appendChild(value);
        root.appendChild(name);
    })

}


const createDivElement = (str, className) => {
    const div = document.createElement('div');
    div.setAttribute('class', className);
    div.innerHTML = str;
    return div;
};
