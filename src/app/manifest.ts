import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Elder PA',
        short_name: 'Elder PA',
        description: 'Elder PA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            // {
            //     "src": "favicon.ico",
            //     "sizes": "48x48",
            //     "type": "image/x-icon"
            // },
            // {
            //     "src": "/images/brand/maskable_icon.png",
            //     "type": "image/png",
            //     "sizes": "192x192",
            //     "purpose": "maskable"
            // },
            // {
            //     "src": "/images/brand/logo-192.png",
            //     "type": "image/png",
            //     "sizes": "192x192"
            // },
            // {
            //     "src": "/images/brand/logo-384.png",
            //     "type": "image/png",
            //     "sizes": "384x384"
            // },
            // {
            //     "src": "/images/brand/logo-256.png",
            //     "type": "image/png",
            //     "sizes": "256x256"
            // },
            // {
            //     "src": "/images/brand/logo-512.png",
            //     "type": "image/png",
            //     "sizes": "512x512"
            // }
        ],
    }
}