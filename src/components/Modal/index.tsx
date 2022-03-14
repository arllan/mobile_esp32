import React from 'react';
import {
  ModalConatiner,
  Container,
  BodyModal,
  Button,
  TextButton,
  Input,
  Row,
  Text,
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
          <Text>
            Adicione o IP da placa esp32 e certifique que o device e a placa
            estejam na mesma rede.
          </Text>
          <Input placeholder=" Exemplo: 192.168.15.1" />
          <Row>
            <Button type="close" onPress={exitModal}>
              <TextButton>Fechar</TextButton>
            </Button>
            <Button type="connect" onPress={exitModal}>
              <TextButton>Conectar</TextButton>
            </Button>
          </Row>
        </BodyModal>
      </ModalConatiner>
    </Container>
  );
}
