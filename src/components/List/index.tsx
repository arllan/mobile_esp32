import React from 'react';
import {FlatList} from 'react-native';
import {Container, Text, ContainerButton, Icons} from './styles';
import {useNavigation} from '@react-navigation/native';

export function List({data}: any) {
  const navigation = useNavigation();
  return (
    <Container>
      <FlatList
        style={{width: '100%'}}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <ContainerButton
            color={item.type}
            onPress={() => {
              navigation.navigate(item.router);
            }}>
            <Icons />
            <Text>{item.text}</Text>
          </ContainerButton>
        )}
      />
    </Container>
  );
}
