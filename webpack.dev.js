const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              api: 'modern',
              sassOptions: {
                silenceDeprecations: ['legacy-js-api'],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    open: true,
    port: 3000,
  },
});
