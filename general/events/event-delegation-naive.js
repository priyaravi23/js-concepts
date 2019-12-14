// document.readyState
// IIFE pattern here instead of littering the global namespace .. etc

// Multiple event handlers increase the space complexity (hog memory) and
//  cause issues with code refactoring.

function init() {
    const th = Array.from(document.querySelectorAll('th'));
    th.forEach(th => {
        th.addEventListener('click', function (e) {
            console.log('this: ', this);
            console.log('currentTarget: ', e.currentTarget);
            console.log('target: ', e.target);
            console.log(e, th);
        })
    });
}

init();
