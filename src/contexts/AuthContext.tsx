import React, {
  ReactChild,
  createContext,
  useContext,
  FC,
  useState,
  useEffect,
} from 'react';

import {
  User,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from '../firebase/firebase.config';

// Types

type AuthContextState = {
  loading: boolean;
  currentUser?: User;
  logOut?: () => Promise<void>;
  logInWithGoogle?: () => Promise<void>;
  resetPassword?: (email: string) => Promise<void>;
  logInWithEmailAndPassword?: (email: string, password: string) => Promise<void>;
  signUpWithEmailAndPassword?: (email: string, password: string) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactChild;
};

// Context

const AuthContext = createContext<AuthContextState>({ loading: true });

export const useAuthContext = () => useContext(AuthContext);

// Provider

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

  const signUpWithEmailAndPassword = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithEmailAndPassword = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const authProviderValue = {
    currentUser,
    signUpWithEmailAndPassword,
    logInWithEmailAndPassword,
    logInWithGoogle,
    logOut,
    resetPassword,
    loading,
  };

  return (
    <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
