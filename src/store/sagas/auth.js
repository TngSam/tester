import { call, take, put } from 'redux-saga/effects';
import api from 'api';

import { loginRequest, loginError, loginSuccess } from 'store/actions';
import { LOGIN, LOGOUT } from 'store/actions/actionTypes';

function* login (action) {
  const payload = action.payload;

  try {
    yield put(loginRequest(payload));
    const data = yield call(api.post, 'login', payload);
    yield put(loginSuccess(data));
  } catch (e) {
    yield put(loginError(e));
  }
};

function* logout (action) {
  const payload = action.payload;
}

function* authSaga () {
  yield take(LOGIN.REQUEST, login);
  yield take(LOGOUT, logout);
}

export default authSaga;
