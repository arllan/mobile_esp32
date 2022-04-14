import AsyncStorage from '@react-native-async-storage/async-storage';
import {useProvider} from '../../provider/provider';
import {keyAsyncStorage} from '../../config/keyAsyncStorage';
import {
  ISetDataBase,
  IGetDataBase,
  IDeleteDataBase,
  IUpdateDataBase,
  IDeletePositionBase,
} from '../../dtos/DataBaseDTO';

interface IUseDataManipulation {
  setDataAllStorage: (key: string, values: ISetDataBase) => Promise<any>;
  getDataStorage: (key: IGetDataBase) => Promise<any>;
  deleteDataStorage: (key: IDeleteDataBase) => Promise<any>;
  updateDataStorage: (data: IUpdateDataBase) => Promise<any>;
  deletePositionStorage: (data: IDeletePositionBase) => Promise<any>;
}

export function useDataManipulation(): IUseDataManipulation {
  const {setDataList, dataList} = useProvider(); // estado global da aplicação

  async function setDataAllStorage(key: string, values: ISetDataBase) {
    try {
      console.log('SET_DATA_ALL_STORAGE:', values);
      const searchData = await AsyncStorage.getItem(key);
      const currentData = searchData ? JSON.parse(searchData!) : [];
      const dataFormatted = [...currentData, values];
      await AsyncStorage.setItem(key, JSON.stringify(dataFormatted));
      await getDataStorage(key);
    } catch (error) {
      console.log(' Erro setDataAllStorage: ', error);
    }
  }

  async function getDataStorage(key: IGetDataBase) {
    try {
      const searchData = await AsyncStorage.getItem(key);
      const currentData = searchData ? JSON.parse(searchData!) : [];
      setDataList(currentData);
      return currentData;
    } catch (error) {
      console.log('Erro getDataStorage: ', error);
    }
  }

  async function deleteDataStorage(key: IDeleteDataBase) {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('Problema ao deletar', error);
    }
  }

  async function updateDataStorage(data: IUpdateDataBase) {
    try {
      const {desligado, index, key, ligado, porta, statePin} = data;
      const val = await AsyncStorage.getItem(key);
      const search = JSON.parse(val!);
      if (search[index] !== undefined || null) {
        search[data.index] = {
          desligado: desligado,
          key: key,
          ligado: ligado,
          porta: porta,
          statePin: statePin,
        };
        await deleteDataStorage(data.key);
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(search));
        await getDataStorage(keyAsyncStorage);
      } else {
        console.log('Não existe nenhum dado ainda');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePositionStorage(data: IDeletePositionBase) {
    try {
      const search = await getDataStorage(data.key);
      if (search[data.index] !== undefined || null) {
        const valuesFormatted = search.filter((value: any, index: number) => {
          if (index !== data.index) {
            return value;
          }
        });
        if (valuesFormatted !== undefined || null) {
          await deleteDataStorage(data.key);
          await AsyncStorage.setItem(
            keyAsyncStorage,
            JSON.stringify(valuesFormatted),
          );
        }
      } else {
        console.log('Não existe posicao para busca del');
      }
    } catch (error) {
      console.log('deletePositionStorage: ', error);
    }
  }

  return {
    setDataAllStorage,
    getDataStorage,
    deleteDataStorage,
    updateDataStorage,
    deletePositionStorage,
  };
}
