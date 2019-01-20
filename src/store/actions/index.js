import { LOGIN } from './actionTypes';

export const loginRequest = (payload) => ({
  type: LOGIN.REQUEST,
  payload
});
export const loginError = (payload) => ({
  type: LOGIN.ERROR,
  payload,
  error: true
});
export const loginSuccess = (payload) => ({
  type: LOGIN.SUCCESS,
  payload
});
