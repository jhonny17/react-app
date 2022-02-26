import React from 'react';

import loginStyle from '../styles/components/Login.module.scss';
import LogoIcon from '../icons/LogoIcon';

import LoginForm from './LoginForm';

const { login: loginClassName, 'login-card': loginCardClassName } = loginStyle;

type LoginProps = {
  isUserSigningUp?: boolean;
};

const Login = ({ isUserSigningUp }: LoginProps) => (
  <div className={loginClassName}>
    <div className={loginCardClassName}>
      <LogoIcon size={150} />
      <LoginForm isUserSigningUp={isUserSigningUp ?? false} />
    </div>
  </div>
);

export default Login;
