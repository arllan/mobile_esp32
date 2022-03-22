import React, {
  useState,
  createContext,
  useContext,
  ReactChild,
  ReactChildren,
  ReactNode,
} from 'react';

export type ProviderProps = {
  intro: boolean;
  setIntro: (value: boolean) => void;
};

export type childrenProps = {
  children?: ReactNode;
};

export const GlobalContext = createContext<ProviderProps>({
  intro: false,
  setIntro: (value: boolean) => false,
});

function useProvider(): ProviderProps {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('Erro relacionado ao provider');
  }
  return context;
}

const Provide = ({children}: childrenProps) => {
  const [intro, setIntro] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{intro, setIntro}}>
      {children}
    </GlobalContext.Provider>
  );
};

export {Provide, useProvider};
