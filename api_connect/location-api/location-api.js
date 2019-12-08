document.addEventListener('readystatechange', function () {
   if (document.readyState === 'interactive') {
       const promise = fetch('http://ip-api.com/json?fbclid=IwAR1zIQwO7SRwl2i9joGZ2UExx3v6UGXr-H9heBXhUlbNCoLdiPcDkEggxV0');
       promise.then((res) => {
           if (res.statusText === 'OK') {
               res.json().then((data) => {
                   console.log(data);
               })
           }
       }, (err) => {
           console.log(err);
       });
   }
});
