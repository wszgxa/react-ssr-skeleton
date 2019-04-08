const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const client = require('./common/client.webpack.conf')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(client, {
  entry: path.resolve(__dirname, '../..', './src/client/app'),
  output: {
    path: path.resolve(__dirname, '../..', './public'),
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
      basePath: '/'
    }),
    new ExtractTextPlugin('app-[contenthash].css'),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ]
})