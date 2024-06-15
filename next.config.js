const path = require('path');

module.exports = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};
