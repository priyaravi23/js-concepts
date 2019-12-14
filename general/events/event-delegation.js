// document.readyState
// IIFE pattern here instead of littering the global namespace .. etc

function init() {
    // Event Delegation
    const tr = document.querySelector('thead > tr');
    const trClickHandler = e => {
        const elem = e.target;
        // const val = elem.getAttribute('data-prop');
        console.log(elem.dataset.prop);
    };
    tr.addEventListener('click', trClickHandler);

}

function init_th_handlers() {
    // Using function reference to avoid creating multiple function handlers
    const th = Array.from(document.querySelectorAll('th'));

    const thClickHandler = e => {
        const elem = e.target;
        // const val = elem.getAttribute('data-prop');
        console.log(elem.dataset.prop);
    };

    th.forEach(th => {
        th.addEventListener('click', thClickHandler);
    });
}



init();
