const path = require('path')
const merge = require('webpack-merge')
const common = require('./common/common.webpack.conf')
const server = require('./common/server.webpack.conf')
const ReloadServerPlugin = require('reload-server-webpack-plugin')

module.exports = merge(common, server, {
  devtool: 'eval',
  watch: true,
  plugins: [
    new ReloadServerPlugin({
      script: path.resolve(__dirname, '../../target/App')
    })
  ]
})
