import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, InputElement, CardInput, Text, Row} from './styles';

interface IPropsInputCode extends TextInputProps {
  type: 'attention' | 'success';
  text: 'DESLIGADO' | 'LIGADO';
}

export function InputCode({type, text, ...rest}: IPropsInputCode) {
  return (
    <Container>
      <Row>
        <CardInput>
          <Text type={type}>{text}</Text>
        </CardInput>
        <InputElement {...rest} />
      </Row>
    </Container>
  );
}
