
/* Import Third Party Dependencies */
import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux';

/* Reduces List */
import mainReducer from '../containers/main/reducer';


export default combineReducers({
  main: mainReducer,
  router: routerReducer,
});