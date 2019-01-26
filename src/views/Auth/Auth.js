import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Button, Snackbar } from '@material-ui/core';

import { blue } from 'stylesheet/vars';
import styled from 'styled-components';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Logo from 'components/ui/Logo/Logo';

const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const StyledForm = styled(Form)`
  width: 325px;
`;
const Caption = styled.p`
  font-weight: normal;
  font-size: .75em;
  margin: .55em 0;
`;
const Switcher = styled.div`
  color: ${blue};
  cursor: pointer;
  font-size: .6em;
  font-weight: bold;
  margin: 1em 0;
`;

const styles = theme => ({
  textField: {
    width: '100%',
    margin: '.25em 0',
    fontSize: '.7em',
    fontFamily: 'Helvetica, sans-serif'
  }
});

const LoginSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(2, 'Nickname is too short.')
    .max(18, 'Nickname is too long.')
    .required('Nickname is required.'),
  password: Yup.string()
    .min(6, 'Password is too short.')
    .max(30, 'Password is too long.')
    .required('Password is required.')
});
const RegisterSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(2, 'Nickname is too short.')
    .max(18, 'Nickname is too long.')
    .required('Nickname is required.'),
  firstName: Yup.string().required('First name is required.'),
  password: Yup.string()
    .min(6, 'Password is too short.')
    .max(30, 'Password is too long.')
    .required('Password is required.')
});

class Auth extends Component {
  state = {
    formType: 'login',
    submitMethod: this.handleLogin
  }
  render () {
    const { classes } = this.props;

    if (this.props.success) {
      return (<Redirect to="/" />);
    }

    return (
      <StyledWrapper>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={this.props.error && !this.props.isFetching && !this.props.success}
          autoHideDuration={5000}
          ContentProps={{
            'aria-describedby': 'error-id'
          }}
          message={<span id="error-id">{ this.props.error }</span>}
        />
        <main className="main">
          <Logo/>
          <Caption>Create, pass and share tests <span role="img" aria-label="Woohoo">🎉</span></Caption>
          <Formik
            initialValues={{ nickname: '', password: '', repeatPassword: '', firstName: '' }}
            onSubmit={(values, actions) => this.state.submitMethod.bind(this)(values, actions)}
            validationSchema={this.state.formType === 'login' ? LoginSchema : RegisterSchema}
            validate={values => {
              const errors = {};

              if (values.repeatPassword && values.password !== values.repeatPassword) {
                errors.repeatPassword = 'Passwords do not match.'
              }

              return errors;
            }}
            render={({
              values, errors, touched, handleReset, isSubmitting
            }) => (
              <StyledForm>
                <Field
                  name="nickname"
                  render={({ field }) => (
                    <TextField
                      type="text"
                      className={classes.textField}
                      label={errors.nickname && touched.nickname ? errors.nickname : "Nickname"}
                      error={errors.nickname && touched.nickname}
                      {...field}
                    />
                  )}
                />
                {this.state.formType === 'register' && (
                  <Field
                    name="firstName"
                    render={({ field }) => (
                      <TextField
                        type="text"
                        className={classes.textField}
                        label={errors.firstName && touched.firstName ? errors.firstName : "First name"}
                        error={errors.firstName && touched.firstName}
                        {...field}
                      />
                    )}
                  />
                )}
                <Field
                  name="password"
                  render={({ field }) => (
                    <TextField
                      type="password"
                      className={classes.textField}
                      label={errors.password && touched.password ? errors.password : "Password"}
                      error={errors.password && touched.password}
                      {...field}
                    />
                  )}
                />
                {this.state.formType === 'register' && (
                  <Field
                    name="repeatPassword"
                    render={({ field }) => (
                      <TextField
                        type="password"
                        className={classes.textField}
                        label={errors.repeatPassword && touched.repeatPassword ? errors.repeatPassword : "Repeat password"}
                        error={errors.repeatPassword && touched.repeatPassword}
                        {...field}
                      />
                    )}
                  />
                )}

                <Switcher onClick={this.switchForm.bind(this, handleReset)}>
                  {this.state.formType === 'login' ? "Don't have an account?" : "Already have an account?"}
                </Switcher>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                  disabled={this.props.isFetching}
                  className={classes.submit}
                >
                  {this.state.formType === 'login' ? "Sign in" : "Sign up"}
                </Button>
              </StyledForm>
            )}
          />
        </main>
      </StyledWrapper>
    );
  }

  switchForm (resetForm = () => {}) {
    resetForm();

    const { formType } = this.state;
    if (formType === 'login') {
      this.setState({
        formType: 'register',
        submitMethod: this.handleRegister
      });
    } else {
      this.setState({
        formType: 'login',
        submitMethod: this.handleLogin
      });
    }
  }

  handleLogin (values, { setSubmitting }) {
    const data = {
      nickname: values.nickname,
      password: values.password
    };

    this.props.signIn(data);

    setSubmitting(false);
  }

  handleRegister (values, { setSubmitting }) {
    const data = {
      nickname: values.nickname,
      // firstName: values.firstName,
      password: values.password
    };

    this.props.signUp(data);

    setSubmitting(false);
  }
}
Auth.propTypes = {
  signIn: PropTypes.func.isRequired
};

export default withStyles(styles)(Auth);
