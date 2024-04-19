const cacheName = 'v1';
const resourcesToPrecache = [
    '/',
    './index.html', 
    './css/style.css', 
    './JS/script.js',
    './img/calculo.png',
    './manifest.json'
  ];
  
self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    event.waitUntil(
      caches.open(cacheName)
      .then(cache => cache.addAll(resourcesToPrecache))  
    )
  });

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
    .then(cachesResponse => {
        return cachesResponse || fetch(event.request);
    })
  ); 
});
