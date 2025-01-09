const CACHE_NAME = "my-task-app-cache-v1";
const urlsToCache = [
    "/",
    "/about",
    "/favicon.ico",
    "/pwaicons/icon-192x192.png",
    "/pwaicons/icon-512x512.png",
    "/pwaicons/icon-32x32.png",
    "/pwaicons/icon-16x16.png",
    "/pwaicons/apple - touch - icon.png",
    "/src/app/login",
    "/src/app/signup"
];

// Install the service worker and cache files
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Activate the service worker and clean up old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Intercept network requests and serve cached files if available
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
