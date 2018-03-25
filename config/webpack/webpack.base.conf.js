const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          enforce: "pre",
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
        },
        {
          test: /\.(s)*css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader', {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, "postcss.config.js"),
                }
              }
            }]
          })
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@client': '../src/client/'
      }
    }
  }
}