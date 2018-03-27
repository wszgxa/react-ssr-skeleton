import express from 'express'
import path from 'path'
import logger from 'morgan'
import nunjucks from 'nunjucks'
import bodyParser from 'body-parser'
import routes from './routes/default.js'
const baseDir = path.resolve(__dirname, '../../');
import { PORT, HOST , STATIC_ASSETS_CACHE_TIME_IN_SECONDS, IS_PRODUCTION } from '../../config/env/index.js'

const app = express()
app.set('port', PORT)
app.set('host', HOST)

nunjucks.configure(path.resolve(__dirname, './views'), {
  autoescape: true,
  express: app
});
app.set('view engine', 'nunj')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const staticAssetsFromFilesystem = express.static(baseDir + '/public', {
    maxAge: IS_PRODUCTION ? STATIC_ASSETS_CACHE_TIME_IN_SECONDS * 1000 : 0
});
app.use('/public', staticAssetsFromFilesystem)
app.use('/', routes)

app.listen(app.get('port'), app.get('host'), () => {
  console.log('server is on ' + app.get('host') + ':' + app.get('port'))
})