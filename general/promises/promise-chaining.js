// callback(err, result)

function makeAjaxCall(cb) {
    const xhr = new XMLHttpRequest();
    console.log(xhr.readyState);
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                cb(null, JSON.parse(xhr.responseText));
            } else {
                cb(xhr, null);
            }
        }
    });
    xhr.open('get', 'https://raw.githubusercontent.com/bindhyeswari/interview-prep/master/fixtures/sliced-wine-reviews.json?token=ABAZB7PSD74MGN3S2ZI2FSK6EYII4');
    xhr.send();
}

// Code below makes an ajax call and prints the reviews data ...
// makeAjaxCall((err, reviews) => resolve(reviews));

// Change the above code so that fetchReviews returns a promise and use the resolve function
//   with the returned promise to view it
function fetchReviewsUsingXMLHTTPReq() {
    return new Promise((resolve, reject) => {
        makeAjaxCall((err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    });
}

function fetchReviewsUsingFetchAPI() {
    return new Promise((resolve, reject) => {
        const promise = fetch('https://raw.githubusercontent.com/bindhyeswari/interview-prep/master/fixtures/sliced-wine-reviews.json?token=ABAZB7PSD74MGN3S2ZI2FSK6EYII4')
        promise.then(res => {
            if (res.ok) {
                res.json().then(reviews => {
                    resolve(reviews);
                }, err => reject(err))
            } else {
                reject(res);
            }
        }, err => reject(err));
    });
}

async function fetchReviewsUsingFetchAPIAsync() {
    const res = await fetch('https://raw.githubusercontent.com/bindhyeswari/interview-prep/master/fixtures/sliced-wine-reviews.json?token=ABAZB7PSD74MGN3S2ZI2FSK6EYII4')
    return await res.json();
}

fetchReviewsUsingXMLHTTPReq().then(reviews => console.log(reviews), err => console.log(err)).catch();
fetchReviewsUsingFetchAPI().then(reviews => console.log(reviews), err => console.log(err)).catch();
fetchReviewsUsingFetchAPIAsync().then(reviews => console.log(reviews), err => console.log(err)).catch();


