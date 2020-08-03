// make sure sw are suported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../sw_cached_pages.js')
            .then(reg => console.log('service wreoker : regisrtest'))
            .catch(err => console.log(`service worker : error : ${err}`))
    })
}