/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const withOffline = require('next-offline');

module.exports = withPlugins([[withBundleAnalyzer({})]], {
    images: {
        deviceSizes: [320, 640, 768, 1024, 1200],
        domains: ['kamazvietnam.com.vn', 'cloud.newatlantic.vn', 'kamazdongnai.com'],
    },
});

const nextConfig = {
    experimental: {
        optimizeFonts: true,
        optimizeCss: true,
        workerThreads: true,
        modern: true,
        serverless: true,
    },
    transformManifest: (manifest) => ['/'].concat(manifest),
    generateInDevMode: false,
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'https-calls',
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    },
};

module.exports = withOffline(nextConfig);
