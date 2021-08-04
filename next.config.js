
module.exports = {
  // Target must be serverless
  target: "serverless",
   webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
       use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ],
       type: 'javascript/auto',

    

})
    return config
  }
 };
