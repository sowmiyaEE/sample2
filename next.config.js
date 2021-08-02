
module.exports = {
  // Target must be serverless
  webpack5: false,
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
};
