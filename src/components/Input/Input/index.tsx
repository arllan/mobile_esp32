import React from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, InputElement, SearchButton} from './styles';
import theme from '../../../global/styles/theme';

interface IPropsInput extends TextInputProps {
  // onPre: () => void;
  change: (val?: string) => void;
}

export function Input({change, ...rest}: IPropsInput) {
  return (
    <Container>
      <InputElement
        {...rest}
        onChangeText={val => {
          change(val);
        }}
      />
      <SearchButton onPress={() => change}>
        <Icon
          name="search-sharp"
          size={30}
          color={theme.colors.backgroundPrimary}
        />
      </SearchButton>
    </Container>
  );
}
