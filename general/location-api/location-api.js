document.addEventListener('readystatechange', function () {
   if (document.readyState === 'interactive') {
       const promise = fetch('http://ip-api.com/json?fbclid=IwAR1zIQwO7SRwl2i9joGZ2UExx3v6UGXr-H9heBXhUlbNCoLdiPcDkEggxV0');
       promise.then((res) => {
           if (res.statusText === 'OK') {
               res.json().then((data) => {

                   const root = document.querySelector('.container');
                   render(root, data)
               })
           }
       }, (err) => {
           console.log(err);
       });

       const containers = document.querySelectorAll('.container');
       console.log(`containers are: ${containers}`);
   }
});

function render(root, data) {
    for (const key in data) {
        let name = createDivElement(key, 'repo');
        let value = createDivElement(data[key], 'name');

        name.appendChild(value);
        root.appendChild(name);
    }
}

function createDivElement(str, className) {
    let div = document.createElement('div');
    div.setAttribute('class', className);
    div.innerHTML = str;
    return div;
}