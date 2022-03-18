import React from 'react';
import {
  ModalConatiner,
  Container,
  BodyModal,
  Button,
  TextButton,
  Input,
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
  exitModal: () => void;
}

export function ModalConnect({isVisible, exitModal, ...rest}: IPropsModal) {
  return (
    <Container>
      <ModalConatiner {...rest} isVisible={isVisible}>
        <BodyModal>
          <Title>Adicionar IP do ESP32</Title>
          <SubTitle>
            Informe o ip da placa esp32 para o app enviar as requisiçoes.
          </SubTitle>
          <TitleInput>IP DA PLACA</TitleInput>
          <Input placeholder=" Exemplo: 192.168.15.1" keyboardType="numeric" />
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
