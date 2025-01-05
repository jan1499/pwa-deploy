const baseUrl = process.env.BASE_URL ;
const proxyPrefix = process.env.PROXY_PREFIX ;

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
