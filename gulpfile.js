const gulp = require('gulp')
const shell = require('gulp-shell')

const NODE_ENV = {
  prod: 'NODE_ENV=production',
  dev: 'NODE_ENV=development'
}
const WEBPACK_CONFIG = {
  dev_client: './webpack/client.dev.webpack.conf.js',
  prod_client: './webpack/client.prod.webpack.conf.js',
  dev_server: './webpack/server.dev.webpack.conf.js',
  prod_server: './webpack/server.prod.webpack.conf.js'
}

const CLIENT_DEV = `${NODE_ENV.dev} webpack --debug --env=dev --config ${WEBPACK_CONFIG.dev_client} --progress --colors --watch`
const CLIENT_BUILD = `${NODE_ENV.prod} webpack --env=production --config ${WEBPACK_CONFIG.prod_client} --progress --colors`
const SERVER_DEV = `${NODE_ENV.dev} webpack --env=production --config ${WEBPACK_CONFIG.dev_server} --progress --colors`
const SERVER_BUILD = `${NODE_ENV.prod} webpack --env=production --config ${WEBPACK_CONFIG.prod_server} --progress --colors`

// dev
gulp.task('dev:client', shell.task(CLIENT_DEV))
gulp.task('dev:server', shell.task(SERVER_DEV))

// prod
gulp.task('build:client', shell.task(CLIENT_BUILD))
gulp.task('build:server', ['build:client'], shell.task(SERVER_BUILD))

gulp.task('start:dev', ['dev:client', 'dev:server'])
gulp.task('start:prod', ['build:server'], shell.task(`${NODE_ENV.prod} node ./target/App.js`))
