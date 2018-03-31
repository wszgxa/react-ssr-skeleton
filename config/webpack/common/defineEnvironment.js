const webpack = require('webpack')
const common = require('../../env/common')

const stringifyValues = (values) => {
  return Object.keys(values).reduce((prev, next) => {
    return Object.assign(
      prev,
      { [`process.env.${next}`]: JSON.stringify(values[next]) }
    )
  }, {})
}

module.exports = {
  common: new webpack.DefinePlugin(stringifyValues(common))
}

