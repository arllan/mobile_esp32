import React, {useState, createContext, useContext, ReactNode} from 'react';

export type ProviderProps = {
  intro: boolean;
  setIntro: (value: boolean) => void;
  ipValue: string;
  setIpValue: (value: string) => void;
  dataList: any;
  setDataList: (value: any) => void;
  data: any;
  setData: (data: any) => void;
};

export type childrenProps = {
  children?: ReactNode;
};

export const GlobalContext = createContext<ProviderProps>({
  intro: false,
  setIntro: (value: boolean) => false,
  ipValue: '',
  setIpValue: (value: string) => false,
  dataList: false,
  setDataList: (value: any) => false,
  data: false,
  setData: (value: any) => false,
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
  const [data, setData] = useState<any>();
  return (
    <GlobalContext.Provider
      value={{
        intro,
        setIntro,
        ipValue,
        setIpValue,
        dataList,
        setDataList,
        data,
        setData,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {Provide, useProvider};
