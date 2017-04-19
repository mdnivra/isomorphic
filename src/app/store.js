import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';

//Middlewares
import thunk from 'redux-thunk';
import {
  batch,
} from './middlewares/reduxBatchDispatch';

import {
  routerMiddleware,
} from 'react-router-redux';

import reducers from './reducers';
const middleware  = function (history) {
  return  compose(
    applyMiddleware(batch, thunk, routerMiddleware(history))
  );;
}

const configureStore = function(enhancer, initialState = {}) {
  const store = enhancer(createStore)(reducers, initialState);
  store.asyncReducers = {};
  return store;
}


export {
  middleware as getMiddleware ,
  configureStore as configureStore,
};
