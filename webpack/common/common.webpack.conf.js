const path = require('path')
const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        "HOST": JSON.stringify(process.env.HOST),
        "PORT": JSON.stringify(process.env.PORT)
      }
    })
  ]
}
