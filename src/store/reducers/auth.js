import { assign } from 'helpers';
import { LOGIN, REGISTER, STORE_TOKEN } from 'store/actions/actionTypes';

const initialState = {
  isFetching: false,
  success: false,
  error: null,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return assign(state, {
        isFetching: true
      });
    case LOGIN.SUCCESS:
      return assign(state, {
        isFetching: false,
        success: true,
        token: action.payload.token
      });
    case LOGIN.ERROR:
      return assign(state, {
        isFetching: false,
        success: false,
        error: action.payload
      });

    case REGISTER.REQUEST:
      return assign(state, {
        isFetching: true
      });
    case REGISTER.SUCCESS:
      return assign(state, {
        isFetching: false,
        success: true,
        token: action.payload.token
      });
    case REGISTER.ERROR:
      return assign(state, {
        isFetching: false,
        success: false,
        error: action.payload
      });

    case STORE_TOKEN:
      return assign(state, {
        token: action.payload
      });

    default:
      return state;
  }
};

export default authReducer;
