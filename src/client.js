import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import { ReduxAsyncConnect } from 'redux-async-connect';
import useScroll from 'react-router-scroll';

import getRoutes from './app/appRoutes';
import {
  getMiddleware,
  configureStore,
} from './app/store';

const dest = document.getElementById('appContainer');
// const _browserHistory = useScroll(() => browserHistory)();
// const history = syncHistoryWithStore(_browserHistory, store);
const middleware = getMiddleware(browserHistory);
const store = configureStore(middleware);

const component = (
  <Router
    render={applyRouterMiddleware(useScroll())}
    history={browserHistory}>
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);
