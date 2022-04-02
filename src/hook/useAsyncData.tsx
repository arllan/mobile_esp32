import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AsyncProps = {
  setData(key: string, value: any): void;
  setDataAll(key: string, value: any): void;
  Delete(key: string): void;
  getData(key: string): void;
};

export function useAsyncData() {
  async function setDataStorage(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
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
      return JSON.parse(searchData!);
    } catch (error) {
      console.log('Erro getDataStorage: ', error);
    }
  }

  async function DeleteStorage(key: string) {
    await AsyncStorage.removeItem(key);
  }

  return {
    setDataStorage,
    getDataStorage,
    setDataAllStorage,
    DeleteStorage,
  };
}
