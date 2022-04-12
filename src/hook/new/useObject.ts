import {IAddDataBase, IUpdateDataBase} from '../../dtos/StateBase';
import {useProvider} from '../../provider/provider';

interface IUseObject {
  updateObjectIndex: (value: IUpdateDataBase) => void;
  addObject: (value: IAddDataBase) => void;
  deleteObject: () => void;
  createObject: () => void;
}

export function useObject(): IUseObject {
  const {setData, data} = useProvider();

  function updateObjectIndex(value: IUpdateDataBase) {
    if (data[value.index] !== null || undefined) {
      const newData = data;

      newData[value.index].desligado = value.desligado;
      newData[value.index].ligado = value.ligado;
      newData[value.index].porta = value.porta;
      newData[value.index].statePin = value.statePin;
      setData(newData);
      console.log('EXISTE POSIÇÃO');
      console.log('Posição:', data[value.index]);
    } else {
      console.log('NÃO EXISTE POSIÇÃO');
    }
  }

  function addObject(value: IAddDataBase) {
    setData([...data, value]);
  }

  function deleteObject() {}

  function createObject() {}

  return {
    updateObjectIndex,
    addObject,
    deleteObject,
    createObject,
  };
}
