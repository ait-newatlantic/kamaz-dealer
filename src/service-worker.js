// Import the Workbox library
importScripts('/_next/static/workbox/v6.1.0/workbox-sw.js');

// Instantiate the Workbox service worker
const workbox = new self.Workbox();

// Set up runtime caching for requests
workbox.routing.registerRoute(
    /^https?.*/,
    new workbox.strategies.NetworkFirst({
        cacheName: 'https-calls',
        networkTimeoutSeconds: 15,
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    }),
);

// Ensure the service worker is activated and controlling the page
workbox.core.skipWaiting();
workbox.core.clientsClaim();
