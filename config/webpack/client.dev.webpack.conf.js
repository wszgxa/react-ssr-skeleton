const path = require('path')
const merge = require('webpack-merge')
const client = require('./common/client.webpack.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(client, {
  devtool: 'eval',
  entry: path.resolve(__dirname, '../..', './src/client/app.js'),
  output: {
    path: path.resolve(__dirname, '../..', './public'),
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
})