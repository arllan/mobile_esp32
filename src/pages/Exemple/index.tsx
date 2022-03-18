import React from 'react';
import {Menu} from '../../components/Menu';

import {
  Container,
  Text,
  Button,
  CardText,
  TextCard,
  Input,
  Title,
  Row,
} from './styles';

export function Exemple() {
  return (
    <Container>
      <Row>
        <Menu navigationRow="exemple" labelmenu="CONTROLE DE PORTAS" />
        <CardText>
          <Title>Descrição</Title>
          <TextCard>
            Para realizar o experimento e preciso verificar se a placa está
            conectada na mesma rede que o device está conectado atualmente.
          </TextCard>
        </CardText>
      </Row>

      <Row></Row>

      <Button>
        <Text>TESTAR</Text>
      </Button>
    </Container>
  );
}
