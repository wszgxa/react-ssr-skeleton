/* @flow */
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import routes from './routes'

import reducers from './models'

const store = createStore(reducers, window.__INITIAL_STATE__, applyMiddleware(thunk))
delete window.__INITIAL_STATE__

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}
// flow-disable can't change document
hydrate(<AppRouter />, document.querySelector('#root'))
