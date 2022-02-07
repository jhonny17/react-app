import React, { FC, FormEvent, useEffect, useRef, useState, MouseEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import loginFormStyle from '../styles/components/LoginForm.module.scss';
import { useAuthContext } from '../contexts/AuthContext';

import { ROOT_PAGE, LOG_IN_PAGE, SIGN_UP_PAGE } from '../navigation/app/navigation-link';
import GoogleIcon from '../icons/GoogleIcon';

const {
  google: googleClassName,
  'login-form': loginFormClassName,
  'reduced-bottom': reducedBottomClassName,
} = loginFormStyle;

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
  const navigate = useNavigate();
  const {
    currentUser,
    signUpWithEmailAndPassword,
    logInWithEmailAndPassword,
    logInWithGoogle,
  } = useAuthContext();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!passwordRef.current || !passwordConfirmationRef.current) return;

    const message =
      password !== passwordConfirmation
        ? 'Your Password and Confirmation password do not match'
        : '';

    passwordRef.current.setCustomValidity(message);
  }, [password, passwordConfirmation]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (isUserSigningUp) {
      signUpWithEmailAndPassword?.(email, password);
      return;
    }

    logInWithEmailAndPassword?.(email, password);
  };

  const handleLoginWithGoogle = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    await logInWithGoogle?.();
  };

  const navigateTo = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(isUserSigningUp ? LOG_IN_PAGE : SIGN_UP_PAGE);
  };

  if (currentUser) return <Navigate to={ROOT_PAGE} />;

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
      <button className={googleClassName} onClick={handleLoginWithGoogle}>
        {'Log in with Google'}
        <GoogleIcon size={18} />
      </button>
      <button onClick={navigateTo}>{!isUserSigningUp ? 'Sign up' : 'Log in'}</button>
    </form>
  );
};

export default LoginForm;
