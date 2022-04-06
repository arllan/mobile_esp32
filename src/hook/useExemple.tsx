import React, {useEffect, useState} from 'react';
import {listInputs} from '../service/data/inputsList';
import {useAsyncData} from './useAsyncData';

interface InputsCard {
  porta: string;
  ligado: string;
  desligado: string;
  statePin: boolean;
}

export function useExemple() {
  const [isPinModel, setIsPinModel] = useState(false);
  const [pinControl, setPinControl] = useState<number>(0);
  const [listInput, setListInput] = useState<InputsCard[]>([]);
  const [controlModalAdd, setControlModalAdd] = useState(false);

  const {setDataStorage, getDataStorage} = useAsyncData();

  function handleOpen(pin: number) {
    setPinControl(pin);
    setIsPinModel(!isPinModel);
  }

  function handleClose() {
    setIsPinModel(!isPinModel);
    console.log('clicado');
  }

  function handleCloseModalAdd() {
    setControlModalAdd(false);
  }

  function addObj(pinNumber: string, inputOff: any, inputOn: string) {
    // console.log(
    //   ' | inputOff: ',
    //   inputOff,
    //   ' | inputOn: ',
    //   inputOn,
    //   ' | pinNumber:',
    //   pinNumber,
    // );
    const newInput = [];
    newInput.push({
      porta: pinNumber ? pinNumber : '#',
      ligado: inputOn ? inputOn : '#',
      desligado: inputOff ? inputOff : '#',
      statePin: false,
    });
    setListInput([...listInput, ...newInput]);
  }

  function editObj(
    index: number,
    statePin: boolean,
    desligado?: string,
    ligado?: string,
  ) {
    if (listInput[index] !== undefined) {
      const newInput = [...listInput];
      newInput[index].desligado = desligado
        ? desligado
        : newInput[index].desligado;
      newInput[index].ligado = ligado ? ligado : newInput[index].ligado;
      newInput[index].statePin = statePin;
      setListInput(newInput);
    }
  }

  function editDataPin(index: number, desligado: string, ligado: string) {
    if (listInput[index] !== undefined) {
      const newInput = [...listInput];
      newInput[index].desligado = desligado
        ? desligado
        : newInput[index].desligado;
      newInput[index].ligado = ligado ? ligado : newInput[index].ligado;
      setListInput(newInput);
    }
  }

  function refValue(index: number) {
    const newInput = [...listInput];
    return newInput[index].statePin;
  }

  useEffect(() => {
    // console.log('Inicio---------------Atualizado');
    // console.log(listInput);
    // console.log('Numero:', listInput?.length);

    async function fun() {
      if (listInput.length !== 0 && listInput.length !== undefined) {
        // console.log('bubu');
        await setDataStorage('data', listInput);
      }
    }
    fun();

    async function fun2() {
      const values: any = await getDataStorage('data');
      // console.log('values: ', values);
    }

    fun2();
    // console.log('Fim---------------Atualizado');
  }, [listInput]);

  useEffect(() => {
    async function initialVelues() {
      const values: any = await getDataStorage('data');
      if (values?.length !== 0 && values?.length !== undefined) {
        // console.log('aqui', values);
        setListInput(values);
      } else {
        await setDataStorage('data', listInputs);
        const values: any = await getDataStorage('data');
        setListInput(values);
      }
    }

    initialVelues();
  }, []);

  useEffect(() => {
    listInput.map(item => {
      const valueFormatted =
        'porta: ' +
        item.porta +
        ' pino: ' +
        (item.statePin === true ? item.ligado : item.desligado);
      console.log('ENVIADO:', valueFormatted);
    });
  }, [listInput]);

  return {
    listInput,
    handleOpen,
    refValue,
    editObj,
    editDataPin,
    isPinModel,
    handleClose,
    pinControl,
    addObj,
    controlModalAdd,
    handleCloseModalAdd,
    setControlModalAdd,
  };
}
