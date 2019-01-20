import { LOGIN } from 'store/actions/actionTypes';

const initialState = {
  nickname: '',
  password: '',
  isFetching: false,
  isError: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOGIN.SUCCESS:
      return Object.assign({}, state, {
        ...action.payload,
        isFetching: false
      });
    case LOGIN.ERROR:
      return Object.assign({}, state, {
        isError: true
      });
    default:
      return state;
  }
};

export default authReducer;
