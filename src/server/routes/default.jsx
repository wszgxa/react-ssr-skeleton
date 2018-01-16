import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from '../../client/models'
import StaticRouter from 'react-router-dom/StaticRouter'
import { matchRoutes, renderRoutes } from 'react-router-config'
import getDefaultVariables from '../rendering/getDefaultVariables'

const store = createStore(reducers, applyMiddleware(thunk));

import routes from '../../client/routes.jsx'
const router = express.Router()

router.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url)
  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  })

  return Promise.all(promises).then(() => {
    let context = {};
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
    if (context.status === 404) {
      res.status(404);
    }
    if (context.status === 302) {
      return res.redirect(302, context.url);
    }
    const defaultVariables = getDefaultVariables()
    res.render('index',
      Object.assign( defaultVariables, { data: store.getState(), content } )
    );
  })
})

export default router