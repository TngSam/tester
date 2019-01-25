import { takeLatest, put } from 'redux-saga/effects';
import request from 'store/sagaRequestHandler';

import {
  loginError, loginSuccess,
  registerError, registerSuccess
} from 'store/actions';
import { LOGIN, LOGOUT, REGISTER } from 'store/actions/actionTypes';

function* onLogout (action) {
  yield put({ type: LOGOUT });
}

function* authSaga () {
  yield takeLatest(LOGIN.REQUEST, request({
    url: 'login',
    dispatcher: {
      error: loginError,
      success: loginSuccess
    }
  }));
  yield takeLatest(LOGOUT, onLogout);

  yield takeLatest(REGISTER.REQUEST, request({
    url: 'register',
    dispatcher: {
      error: registerError,
      success: registerSuccess
    }
  }));
}

export default authSaga;
