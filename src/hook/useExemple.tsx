import React, {useEffect, useState} from 'react';
import {listInputs} from '../service/data/inputsList';
import {useAsyncData} from './useAsyncData';
import {useRequestExemple} from '../hook/useRequestExemple';

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
  const {sendRequest, error} = useRequestExemple();

  function handleOpen(pin: number) {
    setPinControl(pin);
    setIsPinModel(!isPinModel);
  }

  function handleClose() {
    setIsPinModel(!isPinModel);
    // console.log('clicado');
  }

  function handleCloseModalAdd() {
    setControlModalAdd(false);
  }

  function addObj(pinNumber: string, inputOff: any, inputOn: string) {
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
    async function fun() {
      if (listInput.length !== 0 && listInput.length !== undefined) {
        await setDataStorage('data', listInput);
      }
    }
    fun();

    async function fun2() {
      const values: any = await getDataStorage('data');
    }

    fun2();
  }, [listInput]);

  useEffect(() => {
    async function initialVelues() {
      const values: any = await getDataStorage('data');
      if (values?.length !== 0 && values?.length !== undefined) {
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
    listInput.map(async item => {
      const valueFormatted =
        'porta: ' +
        item.porta +
        ' pino: ' +
        (item.statePin === true ? item.ligado : item.desligado);
      await sendRequest(valueFormatted);
      // console.log('ENVIADO:', valueFormatted);
      // console.log('Problema: ', error);
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
