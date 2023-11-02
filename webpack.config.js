

// webpack.config.js

module.exports = {
  // Your other Webpack configuration options...
  // externals: {
  //   'node-osc': 'commonjs node-osc',
  //   dgram: 'commonjs dgram'
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

