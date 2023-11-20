const path = require('path')
const withNextIntl = require('next-intl/plugin')();
module.exports = withNextIntl({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components')],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr/home',
        permanent: true,
      },
      {
        source: '/fr',
        destination: '/fr/home',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en/home',
        permanent: true,
      },
    ]
  }, 
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    })

    return config
  },
});
