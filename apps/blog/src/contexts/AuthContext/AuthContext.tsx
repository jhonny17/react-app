/* eslint-disable max-statements */
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import {
  ReactChild,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { auth } from '@mono-repo/blog/firebase/FirebaseApp';

// Types

type AuthContextState = {
  loading: boolean;
  currentUser: User | null;
  isUserLoggedIn: boolean;
  logOut?: () => Promise<void>;
  logInWithGoogle?: () => Promise<void>;
  resetPassword?: (email: string) => Promise<void>;
  logInWithEmailAndPassword?: (
    email: string,
    password: string
  ) => Promise<void>;
  signUpWithEmailAndPassword?: (
    email: string,
    password: string
  ) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactChild;
};

// Context

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const useAuthContext = () => useContext(AuthContext);

// Provider

// eslint-disable-next-line max-lines-per-function
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(
    () =>
      auth.onAuthStateChanged((user: User | null) => {
        setCurrentUser(user);
        setLoading(false);
      }),
    []
  );

  const signUpWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
    },
    [setLoading]
  );

  const logInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    },
    [setLoading]
  );

  const logInWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }, []);

  const logOut = useCallback(async () => {
    setLoading(true);
    await signOut(auth);
  }, [setLoading]);

  const resetPassword = useCallback(async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  }, []);

  const isUserLoggedIn = useMemo(
    () => !loading && !currentUser,
    [loading, currentUser]
  );

  const authProviderValue = useMemo(
    () => ({
      currentUser,
      isUserLoggedIn,
      loading,
      logInWithEmailAndPassword,
      logInWithGoogle,
      logOut,
      resetPassword,
      signUpWithEmailAndPassword,
    }),
    [
      currentUser,
      isUserLoggedIn,
      loading,
      logInWithEmailAndPassword,
      logInWithGoogle,
      logOut,
      resetPassword,
      signUpWithEmailAndPassword,
    ]
  );

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
