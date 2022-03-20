import React from 'react';
import {Switch} from 'react-native';
import {
  Row,
  Line,
  TextToogle,
  Icons,
  LineVertical,
  TextOff,
  TextOn,
  Button,
} from './styles';

interface ICardControlProps {
  pin: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
}

export function CardControl({
  pin,
  value,
  onValueChange,
  ...rest
}: ICardControlProps) {
  return (
    <Line>
      <Row>
        <Button>
          <Icons />
        </Button>
        <TextToogle>PORTA DIGITAL {pin}</TextToogle>
      </Row>
      <LineVertical />
      <Row>
        {value ? <TextOn>LIGADO</TextOn> : <TextOff>DESLIGADO</TextOff>}
        <Switch
          {...rest}
          value={value}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={value ? '#1E90FF' : '#f4f3f4'}
          onValueChange={val => {
            onValueChange(val);
          }}
        />
      </Row>
    </Line>
  );
}
