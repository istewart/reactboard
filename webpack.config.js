const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/client/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true, // this is required to make react router work as expected
  },
  // node: {
  //   console: 'empty',
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  // },
};
