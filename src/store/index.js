import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import authSaga from 'store/sagas/auth';
import reducers from 'store/reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authSaga);

export default store;
