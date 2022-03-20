import React, {useState} from 'react';
import {Switch} from 'react-native';
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
  Line,
  TextToogle,
} from './styles';

export function Exemple() {
  const [toggleSwitch, setToggleSwitch] = useState(false);
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

      <Line>
        <TextToogle>PORTA DIGITAL 01</TextToogle>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={toggleSwitch ? '#1E90FF' : '#f4f3f4'}
          value={toggleSwitch}
          onValueChange={val => {
            setToggleSwitch(val);
          }}
        />
      </Line>

      <Button>
        <Text>TESTAR</Text>
      </Button>
    </Container>
  );
}
