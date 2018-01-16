import express from 'express'
import path from 'path'
import logger from 'morgan'
import nunjucks from 'nunjucks'
import bodyParser from 'body-parser'
import routes from './routes/default.jsx'
import { PORT, HOST } from '../../config/env/index.js'

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
app.use(express.static(path.join(__dirname, '..', '..', 'public')))
app.use('/', routes)

app.listen(app.get('port'), app.get('host'), () => {
  console.log('server is on ' + app.get('host') + ':' + app.get('port'))
})