const withPWA = require('next-pwa')({
    dest: 'public', // Location for the service worker file
    // disable: process.env.NODE_ENV === 'development', // Disable PWA in development/
    disable: false,
});

module.exports = withPWA({
    reactStrictMode: true,
});
