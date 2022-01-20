import React, {
  Dispatch,
  SetStateAction,
  createContext,
  ReactChild,
  useState,
  useContext,
} from 'react';

/*** Types ***/

type PublicGlobalState = {};

type PublicGlobalContextType = {
  publicGlobalState?: PublicGlobalState;
  setPublicGlobalState?: Dispatch<SetStateAction<PublicGlobalState>>;
};

type PublicGlobalProviderProps = {
  children: ReactChild;
};

/*** Context ***/

const PublicGlobalContext = createContext<PublicGlobalContextType>({
  publicGlobalState: undefined,
  setPublicGlobalState: undefined,
});

export const usePublicGlobalContext = () => useContext(PublicGlobalContext);

const PublicGlobalProvider = ({ children }: PublicGlobalProviderProps) => {
  const [publicGlobalState, setPublicGlobalState] = useState<PublicGlobalState>({});

  const providerValue = { publicGlobalState, setPublicGlobalState };
  return (
    <PublicGlobalContext.Provider value={providerValue}>
      {children}
    </PublicGlobalContext.Provider>
  );
};

export default PublicGlobalProvider;
