// next.config.js
const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: config => {
    config.resolve.alias.images = path.join(
      __dirname,
      'public',
      'static',
      'images'
    );
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],
  ],
  nextConfig
);
