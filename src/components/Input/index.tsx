import React from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, InputElement, SearchButton} from './styles';
import theme from '../../global/styles/theme';

interface IPropsInput extends TextInputProps {}

export function Input({...rest}: IPropsInput) {
  return (
    <Container>
      <InputElement {...rest} />
      <SearchButton>
        <Icon
          name="search-sharp"
          size={30}
          color={theme.colors.backgroundPrimary}
        />
      </SearchButton>
    </Container>
  );
}
