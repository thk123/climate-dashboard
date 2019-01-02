import { combineReducers } from 'redux';
import data from './data';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  data,
  router: routerReducer
});
