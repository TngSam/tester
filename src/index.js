import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'store';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

import 'typeface-roboto';

import App from './views/App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
