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
  TitleInput,
  AreaButton,
  TextButtonReturn,
  Icons,
} from './styles';

interface InputsCard {
  porta: string;
  ligado: string;
  desligado: string;
  statePin: boolean;
}

interface IPropsModal {
  isVisible: boolean;
  pin: number;
  valueOriginal?: any;
  exitModal: () => void;
  funEdit?: (index: number, desligado: string, ligado: string) => void;
}

export function ModalAdd({
  isVisible,
  exitModal,
  pin,
  funEdit,
  valueOriginal,
  ...rest
}: IPropsModal) {
  const [inputOn, setInputOn] = useState('');
  const [inputOff, setInputOff] = useState('');

  function saveValue() {
    // funEdit(pin, inputOff, inputOn);
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
            text="PINO"
            placeholder="Pino"
            onChangeText={val => setInputOn(val)}
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
