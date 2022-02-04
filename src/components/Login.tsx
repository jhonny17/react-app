import React from 'react';
import LogoIcon from '../icons/LogoIcon';

import loginStyle from '../styles/components/Login.module.scss';

import LoginForm from './LoginForm';

const { login: loginClassName, 'login-card': loginCardClassName } = loginStyle;

const Login = () => (
  <div className={loginClassName}>
    <div className={loginCardClassName}>
      <LogoIcon size={150} />
      <LoginForm isUserSigningUp={false} />
    </div>
  </div>
);

export default Login;
