import { LOGIN, REGISTER } from 'store/actions/actionTypes';

const initialState = {
  isFetching: false,
  success: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOGIN.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        success: true
      });
    case LOGIN.ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.payload
      });

    case REGISTER.REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REGISTER.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        success: true
      });
    case REGISTER.ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.payload
      });

    default:
      return state;
  }
};

export default authReducer;
