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