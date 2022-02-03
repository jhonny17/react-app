import React, { FormEvent, useState } from 'react';

import loginFormStyle from '../styles/components/LoginForm.module.scss';

const { 'login-form': loginFormClassName } = loginFormStyle;

type LoginForm = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [formValues, setFormValues] = useState<LoginForm>({ email: '', password: '' });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const field = event.currentTarget.name;
    const value = event.currentTarget.value;
    setFormValues((state) => ({ ...state, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <form className={loginFormClassName} onSubmit={handleSubmit}>
      <input
        id={'email'}
        type={'email'}
        name={'email'}
        autoFocus={true}
        placeholder={'Email'}
        onChange={handleChange}
        value={formValues.email}
        required={true}
      />
      <input
        id={'password'}
        type={'password'}
        name={'password'}
        onChange={handleChange}
        placeholder={'Password'}
        value={formValues.password}
        minLength={3}
        required={true}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
