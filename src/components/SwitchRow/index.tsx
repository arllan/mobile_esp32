import React from 'react';
import {
  Container,
  ContainerText,
  Label,
  LineVertical,
  SwitchControl,
  TextOff,
  TextOn,
} from './styles';

export function SwitchRow() {
  const value = false;
  return (
    <Container>
      <Label>Estado inicial do pino</Label>
      <LineVertical />
      <ContainerText>
        {value ? <TextOn>LIGADO</TextOn> : <TextOff>DESLIGADO</TextOff>}
      </ContainerText>
      <SwitchControl />
    </Container>
  );
}
