const CACHE_NAME = "app-cache-v1";
const NEXT_STATIC_CACHE = "next-static-cache";
const urlsToCache = [
    "/",
    "/signup",
    "/taskflow/your-work",
    "/icon.ico",
    "/manifest.webmanifest",
    "/styles/globals.css",
    "/styles/bootstrap.css",
    "/styles/component.css",
    "/styles/style.css",
    "/styles/utility.css",
    "/pwaicons/apple-touch-icon.png",
    "/pwaicons/icon-192x192.png",
    "/pwaicons/icon-512x512.png",
    "/offline.html"
];

// Install event - Cache files
self.addEventListener("install", (event) => { // it listen service worker install
    self.skipWaiting();    //Forces the new service worker to activate immediately, without waiting for old service workers to finish.
    event.waitUntil(   // waiting the installation cache task are done 
        caches.open(CACHE_NAME).then((cache) => { //creates (or opens) a cache storage in the browser.
            console.log("Caching assets...");
            return Promise.all(  //Ensures all caching requests finish before installation is complete.
                urlsToCache.map((url) => {
                    return cache.add(url).catch((error) => { // all cache add in looping 
                        console.error(`Failed to cache ${url}:`, error);
                    });
                })
            );
        })
    );
});


// Activate event - Clean old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME && cache !== NEXT_STATIC_CACHE) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - Serve cached files if offline
self.addEventListener("fetch", (event) => {
    const request = event.request;
    const urlWithoutQuery = request.url.split("?")[0]; // Remove query string

    event.respondWith(
        caches.match(urlWithoutQuery).then((cachedResponse) => {
            return cachedResponse || fetch(request).then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(urlWithoutQuery, response.clone());
                    return response;
                });
            });
        }).catch(() => {
            if (request.destination === "document") {
                return caches.match("/offline.html");
            }
        })
    );
});

