const CACHE_NAME = 'fazenda-static-cache-v1';
const urlsToCache = [
    '/fazenda/index.html',
    '/fazenda/offline.html',
    '/fazenda/manifest.json',
    '/fazenda/favicon.ico',
    '/fazenda/icon-192x192.png',
    '/fazenda/icon-512x512.png'
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
            return caches.match('/fazenda/offline.html');
        })
    );
});
