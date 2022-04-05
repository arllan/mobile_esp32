import React, {useEffect, useState} from 'react';
import {InputCode} from '../../Input/InputCode';
import {SwitchRow} from '../../SwitchRow';
import {
  ModalConatiner,
  Container,
  BodyModal,
  Button,
  TextButton,
  Row,
  SubTitle,
  Title,
  AreaButton,
  TextButtonReturn,
  Icons,
} from './styles';
interface IPropsModal {
  isVisible: boolean;
  pin: number;
  exitModal: () => void;
  funSave: (
    index: number,
    desligado: string,
    ligado: string,
    pinNum: any,
  ) => void;
}

export function ModalAdd({
  isVisible,
  exitModal,
  pin,
  funSave,
  ...rest
}: IPropsModal) {
  const [inputOn, setInputOn] = useState('');
  const [inputOff, setInputOff] = useState('');
  const [pinNumber, setPinNumber] = useState('');

  function saveValue() {
    funSave(pin, inputOff, inputOn, pinNumber);
    exitModal();
  }

  return (
    <Container>
      <ModalConatiner {...rest} isVisible={isVisible}>
        <BodyModal>
          <Title>Selecionar comando</Title>
          <SubTitle>
            Escolha o pino que vai ser controlado com o comando informado
            abaixo.
          </SubTitle>
          <InputCode
            type="normal"
            keyboardType="decimal-pad"
            text="PINO"
            placeholder="Pino"
            onChangeText={val => setPinNumber(val)}
          />
          <InputCode
            type="attention"
            text="DESLIGADO"
            placeholder="Código"
            onChangeText={val => setInputOff(val)}
          />
          <InputCode
            type="success"
            text="LIGADO"
            placeholder="Código"
            onChangeText={val => setInputOn(val)}
          />
          <SwitchRow />
          <Row>
            <AreaButton onPress={exitModal}>
              <Icons />
              <TextButtonReturn>Fechar</TextButtonReturn>
            </AreaButton>
            <Button onPress={saveValue}>
              <TextButton>Salvar</TextButton>
            </Button>
          </Row>
        </BodyModal>
      </ModalConatiner>
    </Container>
  );
}
