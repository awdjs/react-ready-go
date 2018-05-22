
import 'babel-polyfill';

/* Import Third Party Dependencies */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware as rMiddleware  } from 'react-router-redux';

/* Import Store Initializer */
import initStore from './lib/store';

/* Import Entry Point */
import Main from './containers/main';

const history = createHistory();
const routerMiddleware = rMiddleware(history);
const store = initStore([ routerMiddleware ]);


ReactDom.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app-root')
);


