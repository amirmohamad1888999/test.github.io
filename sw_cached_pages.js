const cacheName = "V1";


const cacheAssets = [
    'index.html',
    'about.html',
    './css/style.css',
    './js/main.js'
];



//call install event
self.addEventListener('install', e => {
    console.log("service Worker: installed")

    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('sevrice worler:cahing');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});
//call activate event
self.addEventListener('activate', e => {
    console.log("services worker : actavated")


});


//call fetch event 
self.addEventListener('fetch', e => {
    console.log('servise worker : fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});