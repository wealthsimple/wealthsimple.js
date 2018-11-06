const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => ({
  // This is where we start to crawl the tree looking for imports to
  // tell us what the output bundle should include.
  entry: './index.browser.js',

  // This is where we're putting the output.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: argv.mode === 'production' ? 'wealthsimple.min.js' : 'wealthsimple.js',
    library: 'Wealthsimple',
    libraryTarget: 'umd',
  },

  plugins: [
    // Don't output broken code; die instead.
    new webpack.NoEmitOnErrorsPlugin(),

    // Creates a bundle contents report at dist/report.html
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],

  // Output sourcemaps too, so people can debug their usage of this lib.
  devtool: 'sourcemap',

  // Transformations on various types of source files. When you import
  // something, it goes through these loaders prior to landing in the
  // bundle.
  module: {
    rules: [
      // Allow ES6 in .js files.
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
});
