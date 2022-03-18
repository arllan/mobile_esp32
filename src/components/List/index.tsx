import React from 'react';
import {FlatList} from 'react-native';
import {Container, Text, ContainerButton, Icons} from './styles';

export function List({data}: any) {
  return (
    <Container>
      <FlatList
        style={{width: '100%'}}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <ContainerButton color={item.type} onPress={() => {}}>
            <Icons />
            <Text>{item.text}</Text>
          </ContainerButton>
        )}
      />
    </Container>
  );
}
