import React, {useEffect, useState, useCallback} from 'react';
import {Menu} from '../../components/Menu';
import {CardControl} from '../../components/CardControl';
import {ModalPin} from '../../components/Modal/ModalPin';
import {Container, Content, ContentScroll} from './styles';
import {listInputs} from '../../service/data/inputsList';
import {randomNumber} from '../../helpers/RandomNumber';

interface InputsCard {
  porta: string;
  ligado: string;
  desligado: string;
  statePin: boolean;
}

export function Exemple() {
  const [isPinModel, setIsPinModel] = useState(false);
  const [pinControl, setPinControl] = useState<number>(0);
  const [listInput, setListInput] = useState<InputsCard[]>(listInputs);

  function handleOpen(pin: number) {
    setPinControl(pin);
    setIsPinModel(true);
  }

  function handleClose() {
    setIsPinModel(false);
  }

  function addObj() {
    const newInput = [];
    newInput.push({
      porta: randomNumber(),
      ligado: 'teste',
      desligado: 'teste',
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

  function refValue(index: number) {
    const newInput = [...listInput];
    return newInput[index].statePin;
  }

  useEffect(() => {
    console.log(listInput);
    console.log(listInput.length);
  }, [listInput]);

  return (
    <Container>
      <Menu navigationRow="exemple" labelmenu="CONTROLE DE PORTAS" />
      <ContentScroll>
        <Content>
          <CardControl
            pin="0"
            onPress={() => handleOpen(0)}
            value={refValue(0)}
            onValueChange={val => {
              editObj(0, val);
            }}
          />
          <CardControl
            pin="01"
            onPress={() => handleOpen(1)}
            value={refValue(1)}
            onValueChange={val => {
              editObj(1, val);
            }}
          />
          <CardControl
            pin="02"
            onPress={() => handleOpen(1)}
            value={refValue(2)}
            onValueChange={val => {
              editObj(2, val);
            }}
          />
          <CardControl
            pin="03"
            onPress={() => handleOpen(1)}
            value={refValue(3)}
            onValueChange={val => {
              editObj(3, val);
            }}
          />
        </Content>
      </ContentScroll>
      <ModalPin
        isVisible={isPinModel}
        exitModal={handleClose}
        pin={pinControl}
      />
    </Container>
  );
}
