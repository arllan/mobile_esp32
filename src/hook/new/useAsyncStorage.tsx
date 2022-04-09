import AsyncStorage from '@react-native-async-storage/async-storage';
import {useProvider} from '../../provider/provider';

/*
  # ADICIONAR UM DADO NOVO 
    - Buscar todos os dados
    - Adicionar um novo elemento na ultima posição
    - deletar os registros antigos
    - Salvar os novos dados
    - Atualizar dados no state do context  (DEIXAR GLOBAL)

  # DELETAR UM DADO
    - Buscar todos os dados 
    - Retirar apenas o dado especifico
    - deletar os registros antigos
    - Salvar os novos dados
    - Atualizar dados no state do context  (DEIXAR GLOBAL)

  # ATUALIZAR UM DADO
    - Buscar todos os dados
    - Atualiza apenas o dado especifico  
    - deletar os registros antigos
    - Salvar os novos dados
    - Atualizar dados no state do context  (DEIXAR GLOBAL)
*/

export function useDataManipulation() {
  const {setDataList} = useProvider();

  async function setDataStorage(key: string, value: any) {
    AsyncStorage.setItem(key, value)
      .then(response => {
        console.log('setDataList', response);
      })
      .catch(error => {
        console.log('Deu ERROO!!', error);
      });
  }

  async function setData(key: string, value: any) {
    AsyncStorage.setItem(key, value)
      .then(response => {
        console.log('setDataList', response);
      })
      .catch(error => {
        console.log('Deu ERROO!!', error);
      });
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
    setDataAllStorage,
    getDataStorage,
    deleteDataStorage,
  };
}
