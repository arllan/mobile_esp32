import React, {useEffect, useState} from 'react';
import {InputCode} from '../../Input/InputCode';
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
  valueOriginal: any;
  exitModal: () => void;
  funEdit: (index: number, desligado: string, ligado: string) => void;
}

export function ModalPin({
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
    funEdit(pin, inputOff, inputOn);
    exitModal();
  }

  useEffect(() => {
    setInputOn(valueOriginal[pin]?.ligado);
    setInputOff(valueOriginal[pin]?.desligado);
  }, [pin]);

  return (
    <Container>
      <ModalConatiner {...rest} isVisible={isVisible}>
        <BodyModal>
          <Title>Selecionar comando</Title>
          <SubTitle>
            E preciso selecionar o elemento de texto que vai ser enviado ao
            esp32. Geralmente combinações de até 5 letras.
          </SubTitle>
          <TitleInput>COMANDO A SER ENVIADO {pin}</TitleInput>
          <InputCode
            text="DESLIGADO"
            value={inputOff}
            type="attention"
            placeholder="Código"
            onChangeText={val => setInputOff(val)}
          />
          <InputCode
            text="LIGADO"
            value={inputOn}
            type="success"
            placeholder="Código"
            onChangeText={val => setInputOn(val)}
          />
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
