const path = require('path')
const merge = require('webpack-merge')
const common = require('./common/common.webpack.conf')
const server = require('./common/server.webpack.conf')
const ReloadServerPlugin = require('reload-server-webpack-plugin')

module.exports = merge(common, server, {
  devtool: 'eval',
  watch: true,
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
  plugins: [
    new ReloadServerPlugin({
      script: path.resolve(__dirname, '../target/App')
    })
  ]
})
