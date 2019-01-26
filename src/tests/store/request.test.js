import { runSaga } from 'redux-saga';
import api from 'api';
import request from 'store/sagaRequestHandler';

import { loginSuccess, loginError } from 'store/actions';

jest.mock('api');

test('It calls API on the login request and stores token successfully', async () => {
  const response = {
    data: {
      text: 'OK',
      token: '123'
    }
  };

  api.post.mockResolvedValue(response);

  const dispatched = [];
  const result = await runSaga({
    dispatch: action => dispatched.push(action),
    getState: () => ({ success: false, isFetching: false, isError: false })
  }, request({
    url: '/login',
    dispatcher: {
      success: loginSuccess,
      error: loginError
    }
  }), {}).done;

  expect(api.post).toBeCalled();
  expect(dispatched).toEqual([ loginSuccess(response.data) ]);
});
