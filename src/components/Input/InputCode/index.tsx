import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, InputElement, CardInput, Text, Row} from './styles';

interface IPropsInputCode extends TextInputProps {
  type: 'attention' | 'success';
}

export function InputCode({type, ...rest}: IPropsInputCode) {
  return (
    <Container>
      <Row>
        <CardInput>
          {type === 'attention' ? (
            <Text type={type}>DESLIGADO</Text>
          ) : (
            <Text type={type}>LIGADO</Text>
          )}
        </CardInput>
        <InputElement {...rest} />
      </Row>
    </Container>
  );
}
