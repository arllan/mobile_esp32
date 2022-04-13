import {useRequest} from './useRequest';
import {ToastMessageDescription} from '../helpers/ToastMessage';
import {useProvider} from '../provider/provider';

export function useRequestExemple() {
  const {error, useRequestGet, status} = useRequest();
  const {ipValue} = useProvider();

  async function sendRequest(data: string) {
    if (ipValue?.length >= 1) {
      const request = ipValue + '/' + data;
      console.log('Formato enviado:', request);
      await useRequestGet(request);
      if (error !== null) {
        ToastMessageDescription(
          'Verifique se o dispositivo está conectado a rede.',
          'Não e possivel conectar ao dispositivo.',
          3000,
        );
      }
    } else {
      ToastMessageDescription(
        'Por favor adicione o IP valido.',
        'Verifique o IP de destino.',
        3000,
      );
    }
  }

  return {
    sendRequest,
    status,
    error,
  };
}
