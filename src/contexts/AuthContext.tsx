import React, {
  ReactChild,
  createContext,
  useContext,
  FC,
  useState,
  useEffect,
} from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { auth } from '../firebase.config';

type AuthContextState = {
  loading: boolean;
  currentUser?: User;
  logInUser?: (email: string, password: string) => Promise<void>;
  signUpUser?: (email: string, password: string) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactChild;
};

const AuthContext = createContext<AuthContextState>({ loading: true });

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider: FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user ?? undefined);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUpUser = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const authProviderValue = { currentUser, signUpUser, logInUser, loading };

  return (
    <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
