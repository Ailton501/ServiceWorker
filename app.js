if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {scope: './'})
        .then(function(registration){
            console.log('Service Worker registered successfully', registration);
        })
        .catch(function(err) {
            console.log('Error registering the service worker', err);
        });
}
