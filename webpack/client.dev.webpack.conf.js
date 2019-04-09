const path = require('path')
const merge = require('webpack-merge')
const client = require('./common/client.webpack.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(client, {
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'tslint-loader',
        options: {
          typeCheck: true,
          tsConfigFile: path.resolve(__dirname, '..', 'tsconfig.json')
        }
      }
    ]
  },
  entry: path.resolve(__dirname, '..', './src/client/app'),
  output: {
    path: path.resolve(__dirname, '..', './public'),
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
})