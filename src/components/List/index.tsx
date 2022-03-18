import React from 'react';
import {FlatList} from 'react-native';
import {Container, Card, Text} from './styles';

export function List() {
  const data = [
    {
      id: 1,
      text: 'Controle de portas digitais com passagem de parâmetros',
      type: '',
    },
    {
      id: 2,
      text: 'Captando dados de portas digitais e análogicas via http',
      type: '',
    },
    {
      id: 3,
      text: 'Controlando atuadores via http com controle de passos',
      type: '',
    },
    {
      id: 4,
      text: 'Acionando relés com controle de tempo',
      type: '',
    },
    {
      id: 5,
      text: 'Integração de gráficos com sinais análogicos e digitais ',
      type: '',
    },
    {
      id: 6,
      text: 'Integração de dados com firebase e datalog',
      type: '',
    },
  ];
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Card>
            <Text>{item.text}</Text>
          </Card>
        )}
      />
    </Container>
  );
}
