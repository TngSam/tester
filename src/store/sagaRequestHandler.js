import { call, put } from 'redux-saga/effects';
import api from 'api';

/**
 * Template of request on the API for sagas
 * @param url
 * @param dispatcher
 * @returns {Function} - Function for 'call' saga effect
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
export default function request ({ url, dispatcher }) {
  return function* ({ payload }) {
    const { data: response } = yield call(api.post, url, payload);
    if (response.isError) {
      yield put(dispatcher.error(response.message));
    } else {
      yield put(dispatcher.success(response));
    }
  }
}
