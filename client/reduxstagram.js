// let's go!
import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// import css
import css from './styles/style.styl'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './MyStore'

import Raven from 'raven-js'
import { sentry_url, logException } from './data/config'

Raven.config(sentry_url, {
  tags: {
    app: 'reduxagram',
    userLevel: 'editor',
  },
}).install()

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'))
