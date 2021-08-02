const withCSS = require('@zeit/next-css')
module.exports = {
  // Target must be serverless
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },withCSS
};
