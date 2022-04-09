import React, {useState, createContext, useContext, ReactNode} from 'react';

export type ProviderProps = {
  intro: boolean;
  setIntro: (value: boolean) => void;
  ipValue: string | any;
  setIpValue: (value: string) => void;
  dataList: any;
  setDataList: (value: any) => void;
};

export type childrenProps = {
  children?: ReactNode;
};

export const GlobalContext = createContext<ProviderProps>({
  intro: false,
  setIntro: (value: boolean) => false,
  ipValue: false,
  setIpValue: (value: string) => false,
  dataList: false,
  setDataList: (value: any) => false,
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
  const [ipValue, setIpValue] = useState<string>('');
  const [dataList, setDataList] = useState<any>();
  return (
    <GlobalContext.Provider
      value={{intro, setIntro, ipValue, setIpValue, dataList, setDataList}}>
      {children}
    </GlobalContext.Provider>
  );
};

export {Provide, useProvider};
