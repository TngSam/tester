import { connect } from 'react-redux';
import { loginRequest, registerRequest } from 'store/actions';

import Auth from 'views/Auth/Auth';

const mapStateToProps = ({ auth }) => {
  return {
    isFetching: auth.isFetching,
    error: auth.error,
    success: auth.success
  };
}

const mapDispatchToProps = dispatch => ({
  signIn: data => dispatch(loginRequest(data)),
  signUp: data => dispatch(registerRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
