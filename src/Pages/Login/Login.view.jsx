import React from 'react';
import LoginFormView from '../../Forms/LoginFormView';
import { loginImagePath, legalText } from '../../config';
import styles from './login.module.scss';

function LoginView({ onSubmit, errorMsg }) {
  console.log('LoginView rendu');

  return (
    <div className={styles.loginWrapper} style={{ backgroundImage: `url(${loginImagePath})` }}>
      {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
      <LoginFormView onSubmit={onSubmit} />
      <div className={styles.copyrightText}>{legalText}</div>
    </div>
  );
}

export default LoginView;
