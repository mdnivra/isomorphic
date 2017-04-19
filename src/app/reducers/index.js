import { combineReducers } from 'redux'
import app from './app';


const isomorphic = combineReducers({
  app,
})

export default isomorphic;
