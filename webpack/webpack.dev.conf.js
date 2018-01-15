const path = require('path');
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = () => {
  return webpackMerge(baseConfig(), {
    devtool: 'eval',
    entry: path.resolve(__dirname, '..', './src/client/app.jsx'),
    output: {
      path: path.resolve(__dirname, '..', './public/js/'),
      filename: 'app.js'
    }
  })
}