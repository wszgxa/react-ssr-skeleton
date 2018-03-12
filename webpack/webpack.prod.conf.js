const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = () => {
  return webpackMerge(baseConfig(), {
    entry: path.resolve(__dirname, '..', './src/client/app.js'),
    output: {
      path: path.resolve(__dirname, '..', './public'),
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
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
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
}