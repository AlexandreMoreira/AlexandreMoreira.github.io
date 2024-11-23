const CACHE_NAME = 'pwa-static-cache-v1';
const urlsToCache = [
    '/hotel/pwa.html',
    '/hotel/offline.html',
    '/hotel/manifest.json',
    '/hotel/favicon.ico',
    '/hotel/icon-192x192.png',
    '/hotel/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match('/hotel/offline.html');
        })
    );
});
