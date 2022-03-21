import React from 'react';
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

interface IPropsModal {
  isVisible: boolean;
  pin: number;
  exitModal: () => void;
}

export function ModalPin({isVisible, exitModal, ...rest}: IPropsModal) {
  return (
    <Container>
      <ModalConatiner {...rest} isVisible={isVisible}>
        <BodyModal>
          <Title>Selecionar comando</Title>
          <SubTitle>
            E preciso selecionar o elemento de texto que vai ser enviado ao
            esp32. Geralmente combinações de até 5 letras.
          </SubTitle>
          <TitleInput>COMANDO A SER ENVIADO</TitleInput>
          <InputCode type="attention" placeholder="Código" />
          <InputCode type="success" placeholder="Código" />
          <Row>
            <AreaButton onPress={exitModal}>
              <Icons />
              <TextButtonReturn>Fechar</TextButtonReturn>
            </AreaButton>
            <Button onPress={exitModal}>
              <TextButton>Salvar</TextButton>
            </Button>
          </Row>
        </BodyModal>
      </ModalConatiner>
    </Container>
  );
}
