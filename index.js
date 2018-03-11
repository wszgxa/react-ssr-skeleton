try {
  require('babel-register')
  require('./src/server/app')
} catch (error) {
  console.log('error', error)
}
