import React, {useEffect, useState} from 'react';
import {keyAsyncStorage} from '../../../config/keyAsyncStorage';
import {useDataManipulation} from '../../../hook/new/useAsyncStorage';
import {useProvider} from '../../../provider/provider';

export function useExemple() {
  const [isPinModel, setIsPinModel] = useState<boolean>(false);
  const [pinControl, setPinControl] = useState<number>(0);
  const [controlModalAdd, setControlModalAdd] = useState<boolean>(false);

  const {dataList} = useProvider();

  const {setDataAllStorage, getDataStorage, updateDataStorage} =
    useDataManipulation();

  function handleOpen(pin: number) {
    setPinControl(pin);
    setIsPinModel(!isPinModel);
  }

  function handleClose() {
    setIsPinModel(!isPinModel);
  }

  function handleCloseModalAdd() {
    setControlModalAdd(false);
  }

  useEffect(() => {
    if (dataList === undefined) {
      getDataStorage(keyAsyncStorage);
    }
  }, []);

  return {
    dataList,
    isPinModel,
    pinControl,
    controlModalAdd,
    handleOpen,
    updateDataStorage,
    handleClose,
    handleCloseModalAdd,
    setControlModalAdd,
    setDataAllStorage,
  };
}
