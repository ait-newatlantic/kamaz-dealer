/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([[withBundleAnalyzer({})]], {
    images: {
        deviceSizes: [320, 640, 768, 1024, 1200],
        domains: ['kamazvietnam.com.vn', 'cloud.newatlantic.vn'],
    },
});
