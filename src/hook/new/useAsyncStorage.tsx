import AsyncStorage from '@react-native-async-storage/async-storage';
import {useProvider} from '../../provider/provider';
import {
  ISetDataBase,
  IGetDataBase,
  IDeleteDataBase,
  IUpdateDataBase,
  IDeletePositionBase,
} from '../../dtos/DataBaseDTO';

interface IUseDataManipulation {
  setDataAllStorage: (key: string, values: ISetDataBase) => void;
  getDataStorage: (key: IGetDataBase) => void;
  deleteDataStorage: (key: IDeleteDataBase) => void;
  updateDataStorage: (data: IUpdateDataBase) => void;
  deletePositionStorage: (data: IDeletePositionBase) => void;
}

export function useDataManipulation(): IUseDataManipulation {
  const {setDataList, dataList} = useProvider(); // estado global da aplicação

  async function setDataAllStorage(key: string, values: ISetDataBase) {
    try {
      const searchData = await AsyncStorage.getItem(key);
      const currentData = searchData ? JSON.parse(searchData!) : [];
      const dataFormatted = [...currentData, values];
      await AsyncStorage.setItem(key, JSON.stringify(dataFormatted));
      const getValues = await getDataStorage(key);
      setDataList(getValues);
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
      const search = await getDataStorage(key);
      if (search[index] !== undefined || null) {
        search[data.index] = {
          desligado: desligado,
          key: key,
          ligado: ligado,
          porta: porta,
          statePin: statePin,
        };
        await deleteDataStorage(data.key);
        await AsyncStorage.setItem('chave', JSON.stringify(search));
        await getDataStorage('chave');
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
          await AsyncStorage.setItem('chave', JSON.stringify(valuesFormatted));
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

/*
  # ADICIONAR UM DADO NOVO 
    - Buscar todos os dados - 01
    - Adicionar um novo elemento na ultima posição
    - deletar os registros antigos - 02
    - Salvar os novos dados - 03
    - Atualizar dados no state do context  (DEIXAR GLOBAL) - 04

  # DELETAR UM DADO
    - Buscar todos os dados - 01
    - Retirar apenas o dado especifico
    - deletar os registros antigos - 02
    - Salvar os novos dados - 03
    - Atualizar dados no state do context  (DEIXAR GLOBAL) - 04

  # ATUALIZAR UM DADO
    - Buscar todos os dados - 01
    - Atualiza apenas o dado especifico  
    - deletar os registros antigos - 02
    - Salvar os novos dados - 03
    - Atualizar dados no state do context  (DEIXAR GLOBAL) - 04
*/

/*
key: string,
    porta: string,
    ligado: string,
    desligado: string,
    statePin: boolean = false,
*/

// async function setDataStorage(key: string, value: any) {
//   AsyncStorage.setItem(key, value)
//     .then(response => {
//       console.log('setDataList', response);
//     })
//     .catch(error => {
//       console.log('Deu ERROO!!', error);
//     });
// }

// async function setData(key: string, value: any) {
//   AsyncStorage.setItem(key, value)
//     .then(response => {
//       console.log('setDataList', response);
//     })
//     .catch(error => {
//       console.log('Deu ERROO!!', error);
//     });
// }

/*
// search[data.index].key = key;
        // search[data.index].desligado = desligado;
        // search[data.index].ligado = ligado;
        // search[data.index].porta = porta;
        // search[data.index].statePin = statePin;
*/
