import express from "express"

import React from "react"
import { renderToString } from "react-dom/server"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducers from "../../client/models"
import { StaticRouter } from "react-router-dom"
import { matchRoutes, renderRoutes } from "react-router-config"
import getDefaultVariables from "../rendering/getDefaultVariables"

import { StaticRouterContext } from "react-router"

const store = createStore(reducers, applyMiddleware(thunk))

import routes from "../../client/routes"
const router = express.Router()

router.get("*", (req, res) => {
  const branch = matchRoutes(routes, req.url)
  const promises = branch.map(({ route, match }) => {
    const fetchData = route.fetchData
    return fetchData instanceof Function ? store.dispatch(fetchData(match)) : Promise.resolve(null)
  })
  return Promise.all(promises).then(() => {
    const context: StaticRouterContext = {}
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )
    const defaultVariables = getDefaultVariables()
    res.render("index",
      Object.assign({}, { data: store.getState(), content }, defaultVariables )
    )
  }).catch(console.log)
})

export default router
