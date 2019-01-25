// TODO: Elaborate an authentication page
// TODO: Elaborate a page 404
// TODO: Finish writing the user state

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

import 'typeface-roboto';

import App from './views/App';

import authSaga from 'store/sagas/auth';
import reducers from 'store/reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
