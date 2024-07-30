import React from 'react';
import { Form, Field } from 'react-final-form';
import Grid from '@material-ui/core/Grid';
import RenderTextInput from '../Renderers/RenderTextInput';
import { PrimaryButton } from '../widgets/Buttons/Buttons';
import styles from './loginForm.module.scss';

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

const LoginFormView = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, submitting, pristine }) => (
      <form onSubmit={handleSubmit} className={styles.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              name="username"
              component={RenderTextInput}
              label="Username"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="password"
              component={RenderTextInput}
              label="Password"
              type="password"
              fullWidth
            />
          </Grid>
        </Grid>
        <div>
          <PrimaryButton type="submit" label="Login" disabled={submitting || pristine} />
        </div>
        <a href="/forgotPassword" className={styles.link}>
          Forgot password?
        </a>
      </form>
    )}
  />
);

export default LoginFormView;
