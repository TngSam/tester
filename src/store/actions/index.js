import { LOGIN, REGISTER } from './actionTypes';

export const loginRequest = payload => ({
  type: LOGIN.REQUEST,
  payload
});
export const loginError = payload => ({
  type: LOGIN.ERROR,
  payload,
  error: true
});
export const loginSuccess = payload => ({
  type: LOGIN.SUCCESS,
  payload
});

export const registerRequest = payload => ({
  type: REGISTER.REQUEST,
  payload
});
export const registerError = payload => ({
  type: REGISTER.ERROR,
  payload,
  error: true
});
export const registerSuccess = payload => ({
  type: REGISTER.SUCCESS,
  payload
});
