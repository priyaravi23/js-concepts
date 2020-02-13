/**
* @fileOverview A simple example of a pub sub pattern
* */
const axios = require('axios');

// Publisher
// Subscriber
// Event

class Publisher {
    constructor() {
        this.events = {
            'fetchWineReviewStart': {
                name: 'fetchWineReviewStart'
            },
            'fetchWineReviewSuccess': {
                name: 'fetchWineReviewSuccess'
            },
            'fetchWineReviewFailure': {
                name: 'fetchWineReviewFailure'
            }
        };

        this.callbacks = {};
    }

    publish(eventName, data) {
        console.log('Publishing the event ', eventName);
        // invoke all the callbacks
        this.callbacks[eventName].forEach(cb => cb(eventName, data));
    }

    subscribe(eventName, cb) {
        const cbs = this.callbacks[eventName] || [];
        cbs.push(cb);
        this.callbacks[eventName] = cbs;
    }
}

const store = new Publisher();
// Header component
const cb = () => {
    console.log('Fetching wine reviews. Display a spinner ... ');
};
store.addListener('fetchWineReviewStart', () => {
    console.log('Fetching wine reviews. Display a spinner ... ');
});
store.addListener('fetchWineReviewStart', () => {
    console.log('Fetching wine reviews. Display a spinner ... ');
});
store.subscribe('fetchWineReviewSuccess', (eventName, reviews) => {
    console.log('Total number of wine reviews (Header) ... ', reviews.length);
});

// Wine Reviews component
store.subscribe('fetchWineReviewStart', () => {
    console.log('Fetching wine reviews. Display a spinner (wine reviews) ... ');
});
store.subscribe('fetchWineReviewSuccess', (eventName, reviews) => {
    console.log('First 5 Wine Reviews (Wine Reviews Component) ... \n', reviews.slice(0, 5).map(r => r.title).join('\n'));
});

// Fetching the wine reviews
// Wine Reviews component
fetchWineReviewsAction();

function fetchWineReviewsAction () {
    store.publish(store.events.fetchWineReviewStart.name);

    axios({
        method: 'get',
        url: 'https://raw.githubusercontent.com/bindhyeswari/interview-prep/master/fixtures/sliced-wine-reviews.json?token=ABAZB7MTGA6N2OSJPOV3F5K6C6D2G'
        }).then((response) => {
            store.publish(store.events.fetchWineReviewSuccess.name, response.data);
        }, (err) => {
            store.publish(store.events.fetchWineReviewFailure.name, err);
        }).catch(err => {
            store.publish(store.events.fetchWineReviewFailure.name, err);
    });
}
