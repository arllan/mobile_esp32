import React, {useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

type AsyncProps = {
  setDataStorage(key: string, value: any): void;
  ipConnect: any;
  setIpConnect: (value: string) => void;
  setDataAllStorage(key: string, value: any): void;
  deleteDataStorage(key: string): void;
  getDataStorage(key: string): void;
};

export function useAsyncStorage(): AsyncProps {
  const [ipConnect, setIpConnect] = useState<string | null | undefined>('');

  useFocusEffect(
    useCallback(() => {
      async function getValues() {
        const value = await getDataStorage('IP');
        setIpConnect(value);
      }
      getValues();
    }, []),
  );

  async function setDataStorage(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('Erro setDataStorage: ', error);
    }
  }

  async function setDataAllStorage(key: string, value: any) {
    try {
      const searchData = await AsyncStorage.getItem(key);
      const currentData = searchData ? JSON.parse(searchData!) : [];
      const dataFormatted = [...currentData, value];

      await AsyncStorage.setItem(key, JSON.stringify(dataFormatted));
    } catch (error) {
      console.log(' Erro setDataAllStorage: ', error);
    }
  }

  async function getDataStorage(key: string) {
    try {
      const searchData = await AsyncStorage.getItem(key);
      return searchData;
    } catch (error) {
      console.log('Erro getDataStorage: ', error);
    }
  }

  async function deleteDataStorage(key: string) {
    return await AsyncStorage.removeItem(key);
  }

  return {
    setDataStorage,
    getDataStorage,
    setDataAllStorage,
    deleteDataStorage,
    setIpConnect,
    ipConnect,
  };
}
