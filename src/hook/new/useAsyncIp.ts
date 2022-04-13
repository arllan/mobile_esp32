import AsyncStorage from '@react-native-async-storage/async-storage';
import {keyAsyncIpStorage} from '../../config/keyAsyncStorage';
import {useProvider} from '../../provider/provider';

interface IUseAsyncIp {
  setIpStore: (value: string) => Promise<void>;
  getIpStore: () => Promise<void>;
  deleteIpStore: () => Promise<void>;
  ipValue: string;
}

export function useAsyncIp(): IUseAsyncIp {
  const {ipValue, setIpValue} = useProvider();

  async function setIpStore(value: string) {
    try {
      await AsyncStorage.setItem(keyAsyncIpStorage, JSON.stringify(value));
      setIpValue(value);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async function getIpStore() {
    try {
      const searchData = await AsyncStorage.getItem(keyAsyncIpStorage);
      const currentData = searchData ? JSON.parse(searchData!) : '';
      setIpValue(currentData);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async function deleteIpStore() {
    try {
      AsyncStorage.removeItem(keyAsyncIpStorage);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  return {
    setIpStore,
    getIpStore,
    deleteIpStore,
    ipValue,
  };
}
