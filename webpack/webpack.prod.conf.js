const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = () => {
  return webpackMerge(baseConfig(), {
    entry: path.resolve(__dirname, '..', './src/client/app.jsx'),
    output: {
      path: path.resolve(__dirname, '..', './public/js/'),
      filename: 'app-[hash].js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false,
          comparisons: false
        },
        output: {
          comments: false
        }
      }),
      new ManifestPlugin({
        fileName: 'manifest.json',
        basePath: '/public/js/'
      })
    ]
  })
}