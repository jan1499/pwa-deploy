import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Tasxflow",
        short_name: "Tasxflow",
        description: 'Tasxflow description here',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',     //Removes browser UI (like address bar & tabs). Makes it feel like a native app.
        // display: 'browser',       //Opens the app like a normal website in a browser.
        // display: 'minimal-ui	',  //Shows limited browser controls (e.g., back & refresh buttons).
        // display: 'fullscreen',  /Hides everything (no status bar, no navigation buttons).
        icons: [
            {
                "src": "icon.ico",
                "sizes": "48x48",
                "type": "image/x-icon"
            },
            {
                src: '/pwaicons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/pwaicons/apple-touch-icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/pwaicons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/pwaicons/icon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/pwaicons/icon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
        ],

    }
}