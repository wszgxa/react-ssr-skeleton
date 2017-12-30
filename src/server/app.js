/**
 * Created by gxzhao on 30/12/2017.
 */


import express from 'express'
import path from 'path'
import logger from 'morgan'
import nunjucks from 'nunjucks'
import bodyParser from 'body-parser'
import routes from './routes/index.js'
import { PORT } from '../../config/env/index.js'

const app = express()
app.set('port', PORT)

nunjucks.configure(path.resolve(__dirname, './views'), {
  autoescape: true,
  express: app
});
app.set('view engine', 'nunj')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '..', '..', 'public')))

app.use('/', routes)
app.listen(app.get('port'), '0.0.0.0', () => {
  console.log('server is on 0.0.0.0:' + app.get('port'))
})