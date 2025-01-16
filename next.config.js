const baseUrl = process.env.BASE_URL;
const proxyPrefix = process.env.PROXY_PREFIX;

const withPWA = require("next-pwa")({
    dest: "public", // PWA assets will be placed in the public folder
    register: true, // Registers service worker
    skipWaiting: true, // Updates service worker immediately
    // disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
    disable: false,
    cacheOnFrontEndNav: true, // Caches pages navigated on frontend
    runtimeCaching: [
        {
            urlPattern: /.*\.(?:js|css|html|json|svg)$/,
            handler: 'CacheFirst',
            options: {
                cacheName: 'static-resources',
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
                },
            },
        },
        {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/, // Cache Google Fonts
            handler: "CacheFirst",
            options: {
                cacheName: "google-fonts",
                expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
        },
        {
            urlPattern: /^https:\/\/your-api-url\.com\//, // Cache API responses
            handler: "NetworkFirst",
            options: {
                cacheName: "api-cache",
                expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
            },
        },
        {
            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif|webp)/, // Cache images
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "image-cache",
                expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
        },
        {
            urlPattern: /^https:\/\/cdn.jsdelivr.net/, // Cache external scripts
            handler: "CacheFirst",
            options: {
                cacheName: "jsdelivr-cache",
                expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
        },
    ],
});

module.exports = withPWA({
    poweredByHeader: false,
    generateEtags: false,
    reactStrictMode: true,
    env: {
        BASE_URL: baseUrl,
        PROXY_PREFIX: proxyPrefix,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "developers.google.com",
            },
            {
                protocol: "https",
                hostname: "learn.microsoft.com",
            },
            {
                protocol: "https",
                hostname: "lavinephotography.com.au",
            },
        ],
    },
    trailingSlash: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    }
                ],
            },
        ]
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: `${proxyPrefix}/:path(.*)`,
                    destination: `${baseUrl}/:path`,
                },
            ],
        }
    }
})
