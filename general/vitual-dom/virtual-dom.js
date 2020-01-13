const fruitsModel = [
    {
        id: '68691f42-ef53-41e9-accb-31d370af3784',
        name: 'apple',
        price: '610'
    },
    {
        id: '6d1334cb-faba-48fe-848f-d92989735304',
        name: 'orange',
        price: '820'
    }
];

// MVC Design Pattern: Model View Controller
// Rendering data on DOM (View)

const generateALargeDataSet = () => {
    const arr = [];
    const randomName = () => {
        return (new Array(8)).fill().map(generateARandomLetter).join('');
    };
    const generateARandomLetter = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    };
    const generatePrice = () => {
        return ~~(Math.random() * 1000);
    };
    const generateRandomFruit = (element, index) => ({
        id: index,
        name: randomName(),
        price: generatePrice()
    });
    console.log(generateRandomFruit(undefined, 1));
    return (new Array(100)).fill().map(generateRandomFruit);
};

const renderData = (data, root, clickHandler) => {
    // console.log(data, root);
    root.innerHTML = '';
    data.forEach((fruit, index) => createElement('div', 'fruit', `${fruit.name} - ${fruit.price}`,
        root, clickHandler, index));
};

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {
        console.log('HTML is parsed ... ready to begin ... ');

        const fruitsContainer = createElement('div', 'flex-container');
        document.body.appendChild(fruitsContainer);

        // received data from the backend
        const setHandler = {
            set: function (obj, prop, newValue) {
                if (prop === 'price') {
                    if (obj.price !== newValue) {
                        // set the object and fire the re-render
                        console.log(`You are trying to change the fruit ${obj.name}'s price to ${obj.price}`);
                        obj[prop] = newValue;
                        /**
                         * The fast way, but not diffing - at all
                         *
                         * console.log(obj.id);
                         const element = document.querySelector(`[data-key="${obj.id}"]`);
                         element.innerHTML = `${obj.name} (${obj.price})`;
                         * */
                        // The slow way - how Angular 1.x versions used to work
                        render();
                    }
                } else {
                    obj[prop] = newValue;
                }

                return true;
            }
        };
        const dataFromBackend = generateALargeDataSet();
        const model = dataFromBackend.map(fruit => new Proxy(fruit, setHandler));

        const clickHandler = (event) => {
            const index = event.target.dataset.key;
            const proxyFruit = model[index];
            // console.log('event data: ', proxyFruit);
            // change the value of that object to 100
            proxyFruit.price = 1500;
        };
        function render() {
            console.time('fruitrender');
            renderData(model, fruitsContainer, clickHandler);
            console.timeEnd('fruitrender');
        }

        render();
        // console.log(generateALargeDataSet());

        // User modified a fruit price
        // fruits[1].price = 310;

    }
});



const createElement = (tag, className, innerHTML, parent, clickHandler, customAttributeValue) => {
    const element = document.createElement(tag);
    className && element.classList.add(className);
    innerHTML && (element.innerHTML = innerHTML);
    parent && (parent.appendChild(element));
    (typeof clickHandler === 'function') && element.addEventListener('click', clickHandler);
    element.setAttribute('data-key', customAttributeValue);
    return element;
};
