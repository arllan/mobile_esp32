import {useRequest} from './useRequest';
import {ToastMessageDescription} from '../helpers/ToastMessage';
import {useProvider} from '../provider/provider';
import {ISetDataBase} from '../dtos/DataBaseDTO';

/**
 * @param data que vai o objeto a ser enviado do banco local
 * Para ser enviado e preciso receber o objeto local, por ao verificar que teve
 * mudança de estado ele vai enviar tudo que estiver no objeto.
 */

export function useRequestExemple() {
  const {error, useRequestGet, status} = useRequest();
  const {ipValue} = useProvider();

  async function sendRequest(data: ISetDataBase) {
    if (ipValue?.length >= 1) {
      const signal = data.statePin ? data.ligado : data.desligado; // logica para enviar o sinal certo
      const request = ipValue + '/' + data.porta + '-' + signal;
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
