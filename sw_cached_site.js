const cacheName = "V2";



//call install event
self.addEventListener('install', e => {
    console.log("service Worker: installed")
});
//call activate event
self.addEventListener('activate', e => {
    console.log("services worker : actavated")


});


//call fetch event 
self.addEventListener('fetch', e => {
    console.log('servise worker : fetching');
    e.respondWith(fetch(e.request).then(res=>{
        //make copy/clone of respone
        const resClone=res.clone();
        //open cahce
        caches
        .open(cacheName)
        .then(cache=>{
            //add respone to cache
            cache.put(e.request,resClone);
        });
        return res;
    }).catch(err=>caches.match(e.request).then(res=>res))
    );
});