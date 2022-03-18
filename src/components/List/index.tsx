import React from 'react';
import {FlatList} from 'react-native';
import {Container, Card, Text, ContainerButton} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export function List({data}: any) {
  return (
    <Container>
      <FlatList
        style={{width: '100%'}}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <ContainerButton color={item.type}>
            <Icon name="add" size={30} color="#FFF" />
            <Text>{item.text}</Text>
          </ContainerButton>
        )}
      />
    </Container>
  );
}
