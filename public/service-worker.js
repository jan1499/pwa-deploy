// const CACHE_NAME = "app-cache-v1";
// const urlsToCache = [
//     "/",
//     "/signup",
//     "/taskflow/your-work",
//     "/icon.ico",
//     "/manifest.json",
//     "/layout.tsx",
//     "/page.tsx",
// ];

// self.addEventListener("install", (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then(async (cache) => {
//             console.log("Attempting to cache files:", urlsToCache);

//             // Fetch each URL separately and add it to cache
//             for (let url of urlsToCache) {
//                 try {
//                     const response = await fetch(url);
//                     if (response.ok) {
//                         await cache.put(url, response.clone());
//                     } else {
//                         console.error(`Failed to fetch ${url}: ${response.statusText}`);
//                     }
//                 } catch (error) {
//                     console.error(`Failed to fetch ${url}:`, error);
//                 }
//             }
//         })
//     );
// });

// self.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.match(event.request).then((response) => {
//             return response || fetch(event.request);
//         })
//     );
// });
