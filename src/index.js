
import 'babel-polyfill';

/* Import Third Party Dependencies */
import React from 'react';
import ReactDom from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { routerMiddleware as rMiddleware, ConnectedRouter } from 'react-router-redux';

/* Import Store Initializer */
import initStore from './lib/store';

/* Import Entry Point */
import Main from './containers/main';

const history = createHistory();
const routerMiddleware = rMiddleware(history);
const store = initStore([ routerMiddleware ]);


ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/hello-world" component={Main} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app-root')
);


