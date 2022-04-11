import React, {useState} from 'react';
import {
  Container,
  ContainerText,
  Label,
  LineVertical,
  SwitchControl,
  TextOff,
  TextOn,
} from './styles';

interface IPropsSwitch {
  changeValue: (val: any) => void;
}

export function SwitchRow({changeValue}: IPropsSwitch) {
  const [value, setValue] = useState(false);

  function change(value: boolean) {
    changeValue(value);
    setValue(value);
  }

  return (
    <Container>
      <Label>Estado inicial do pino</Label>
      <LineVertical />
      <ContainerText>
        {value ? <TextOn>LIGADO</TextOn> : <TextOff>DESLIGADO</TextOff>}
      </ContainerText>
      <SwitchControl value={value} onValueChange={val => change(val)} />
    </Container>
  );
}
