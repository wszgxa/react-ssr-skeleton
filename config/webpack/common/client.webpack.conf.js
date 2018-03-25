const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.webpack.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  name: 'client side',
  module: {
    rules: [
      {
        test: /\.(s)*css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          }]
        })
      }
    ]
  }
})
