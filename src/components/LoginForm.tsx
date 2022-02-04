import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';

import loginFormStyle from '../styles/components/LoginForm.module.scss';
import { useAuthContext } from '../contexts/AuthContext';

const { 'login-form': loginFormClassName, 'reduced-bottom': reducedBottomClassName } =
  loginFormStyle;

const MIN_PASSWORD_LENGTH = 6;

type LoginFormProps = {
  isUserSigningUp?: boolean;
};

type LoginForm = {
  email: string;
  password: string;
  passwordConfirmation?: string;
};

const LoginForm: FC<LoginFormProps> = ({ isUserSigningUp }: LoginFormProps) => {
  const { signUpUser, logInUser } = useAuthContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!passwordRef.current || !passwordConfirmationRef.current) return;
    if (password === passwordConfirmation) return;
    passwordRef.current.setCustomValidity(
      'Your Password and Confirmation password do not match'
    );
  });

  useEffect(() => {
    if (!passwordRef.current || !passwordConfirmationRef.current) return;
    if (password !== passwordConfirmation) return;
    passwordRef.current.setCustomValidity('');
  }, [password, passwordConfirmation]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (isUserSigningUp) {
      signUpUser?.(email, password);
      return;
    }

    logInUser?.(email, password);
  };

  return (
    <form className={loginFormClassName} onSubmit={handleSubmit}>
      <input
        id={'email'}
        type={'email'}
        name={'email'}
        autoFocus={true}
        placeholder={'Email'}
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
        required={true}
      />
      <input
        required={true}
        id={'password'}
        value={password}
        type={'password'}
        name={'password'}
        ref={passwordRef}
        placeholder={'Password'}
        minLength={MIN_PASSWORD_LENGTH}
        onChange={(e) => setPassword(e.currentTarget.value)}
        className={isUserSigningUp ? reducedBottomClassName : ''}
      />
      {isUserSigningUp ? (
        <input
          required={true}
          type={'password'}
          id={'passwordConfirmation'}
          value={passwordConfirmation}
          name={'passwordConfirmation'}
          ref={passwordConfirmationRef}
          placeholder={'Confirm Password'}
          onChange={(e) => setPasswordConfirmation(e.currentTarget.value)}
          minLength={
            password.length > MIN_PASSWORD_LENGTH ? password.length : MIN_PASSWORD_LENGTH
          }
        />
      ) : null}
      <button type="submit">{isUserSigningUp ? 'Sign up' : 'Log in'}</button>
      <button>{!isUserSigningUp ? 'Sign up' : 'Log in'}</button>
    </form>
  );
};

export default LoginForm;
