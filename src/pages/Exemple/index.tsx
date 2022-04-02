import React, {useEffect, useState} from 'react';
import {Menu} from '../../components/Menu';
import {CardControl} from '../../components/CardControl';
import {ModalPin} from '../../components/Modal/ModalPin';
import {Container, Content, ButtonAdd, TextButton} from './styles';
import {listInputs} from '../../service/data/inputsList';
import {randomNumber} from '../../helpers/RandomNumber';
import {useAsyncData} from '../../hook/useAsyncData';
import {FlatList} from 'react-native';
import {randomToString} from '../../helpers/RandomNumber';
import {ModalAdd} from '../../components/Modal/ModalAdd';

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
  const [controlModalAdd, setControlModalAdd] = useState(false);

  const {} = useAsyncData();

  function handleOpen(pin: number) {
    setPinControl(pin);
    setIsPinModel(true);
  }

  function handleClose() {
    setIsPinModel(false);
  }

  function handleCloseModalAdd() {
    setControlModalAdd(false);
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
    console.log('---------------Atualizado');
    console.log(listInput);
    console.log(listInput.length);
  }, [listInput]);

  return (
    <Container>
      <Menu navigationRow="exemple" labelmenu="CONTROLE DE PORTAS" />
      <Content>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          data={listInput}
          keyExtractor={() => randomToString(0, 1000)}
          renderItem={({item, index}) => (
            <CardControl
              pin={String(index)}
              onPress={() => handleOpen(index)}
              value={refValue(index)}
              onValueChange={val => {
                editObj(index, val);
              }}
            />
          )}
        />
      </Content>

      <ModalPin
        funEdit={(pin, desligado, ligado) => {
          editDataPin(pin, desligado, ligado);
        }}
        isVisible={isPinModel}
        exitModal={handleClose}
        pin={pinControl}
        valueOriginal={listInput}
      />
      <ModalAdd
        isVisible={controlModalAdd}
        exitModal={handleCloseModalAdd}
        pin={pinControl}
      />
      <ButtonAdd onPress={() => setControlModalAdd(true)}>
        <TextButton>ADICIONAR</TextButton>
      </ButtonAdd>
    </Container>
  );
}
