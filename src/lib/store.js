
/* Import Third Party Dependencies */
import { createStore, applyMiddleware } from 'redux';

/* Import Reducers */
import reducers from '../reducers';


const initStore = (middleware) => {
  return applyMiddleware(...middleware)(createStore)(reducers);
};


export default initStore;
