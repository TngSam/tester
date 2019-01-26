import { takeLatest } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import request from 'store/sagaRequestHandler';
import { LOGIN } from 'store/actions/actionTypes';
import { loginSuccess, loginError } from 'store/actions';
import authSaga from 'store/sagas/auth';

describe('Auth saga', () => {
  const it = sagaHelper(authSaga());

  it('Should wait for a user to login', received => {
    const expected = JSON.stringify(takeLatest(LOGIN.REQUEST, request({
      url: 'login',
      dispatcher: {
        success: loginSuccess,
        error: loginError
      }
    })));

    expect(JSON.stringify(received)).toEqual(expected);
  });
});
