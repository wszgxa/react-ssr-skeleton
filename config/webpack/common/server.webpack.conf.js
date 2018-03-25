const path = require('path')
const webpack = require('webpack')
const fs = require('fs')

const nodeModules = fs.readdirSync('node_modules')
  .filter(function(filename) {
    return ['.bin'].indexOf(filename) === -1
  })
  .reduce(function(acc, cur) {
    acc[cur] = 'commonjs ' + cur
    return acc
  }, {})

module.exports = {
  name: 'server side',
  entry: {
    App: path.join(__dirname, '..', '..', '..', 'src', 'server', 'app')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../../target')
  },
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.s?css$/, path.join(__dirname, './processCssInServer.js'))
  ],
  externals: nodeModules
}
