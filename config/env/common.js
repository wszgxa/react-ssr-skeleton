const NODE_ENV = process.env.NODE_ENV || 'production'
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports =  {
  NODE_ENV,
  IS_PRODUCTION
}
