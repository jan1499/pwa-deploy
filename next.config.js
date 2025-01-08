const baseUrl = process.env.BASE_URL;
const proxyPrefix = process.env.PROXY_PREFIX;

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: false,
    // runtimeCaching: [
    //     {
    //         urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,
    //         handler: 'CacheFirst',
    //         options: {
    //             cacheName: 'google-fonts',
    //             expiration: {
    //                 maxEntries: 10,
    //                 maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
    //             },
    //         },
    //     },
    // ],
});

module.exports = withPWA({
    reactStrictMode: true,
})

module.exports = {
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
}
