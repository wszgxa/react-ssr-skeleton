/**
 * Created by gxzhao on 30/12/2017.
 */
try {
  require('babel-register')
  require('./src/server/app')
} catch (error) {
  console.log('error', error)
}
