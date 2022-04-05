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
  const [listInput, setListInput] = useState<InputsCard[]>([]);
  const [controlModalAdd, setControlModalAdd] = useState(false);

  const {setDataStorage, getDataStorage} = useAsyncData();

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

  function addObj(pinNumber: string, inputOff: any, inputOn: string) {
    console.log(
      ' | inputOff: ',
      inputOff,
      ' | inputOn: ',
      inputOn,
      ' | pinNumber:',
      pinNumber,
    );
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
    console.log('Inicio---------------Atualizado');
    console.log(listInput);
    console.log('Numero:', listInput?.length);

    async function fun() {
      if (listInput.length !== 0 && listInput.length !== undefined) {
        console.log('bubu');
        await setDataStorage('data', listInput);
      }
    }
    fun();

    async function fun2() {
      const values: any = await getDataStorage('data');
      console.log('values: ', values);
    }

    fun2();
    console.log('Fim---------------Atualizado');
  }, [listInput]);

  useEffect(() => {
    async function initialVelues() {
      const values: any = await getDataStorage('data');
      if (values?.length !== 0 && values?.length !== undefined) {
        console.log('aqui', values);
        setListInput(values);
      } else {
        await setDataStorage('data', listInputs);
        const values: any = await getDataStorage('data');
        setListInput(values);
      }
    }

    initialVelues();
  }, []);

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
              pin={item?.porta}
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
        funSave={(pin, inputOff, inputOn, pinNumber) => {
          console.log(
            'retorno-pin: ',
            pin,
            'retorno-inputOff',
            inputOff,
            'retorno-inputOn',
            inputOn,
            'retorno-pinNumber',
            pinNumber,
          );

          addObj(pinNumber, inputOff, inputOn);
        }}
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
