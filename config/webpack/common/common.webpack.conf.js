const path = require('path')
const { common } = require('./defineEnvironment')


module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@client': path.join(__dirname, '..', '..', '..', 'src/client'),
      '@server': path.join(__dirname, '..', '..', '..', 'src/server')
    }
  },
  plugins: [
    common
  ]
}
