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
  ContainerText,
} from './styles';

interface ICardControlProps {
  pin: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
  onPressButton?: () => void;
}

export function CardControl({
  pin,
  value,
  onValueChange,
  onPressButton,
  ...rest
}: ICardControlProps) {
  return (
    <Line>
      <Row>
        <Button onPress={onPressButton}>
          <Icons />
        </Button>
        <TextToogle>PORTA DIGITAL {pin}</TextToogle>
      </Row>
      <LineVertical />
      <Row>
        <ContainerText>
          {value ? <TextOn>LIGADO</TextOn> : <TextOff>DESLIGADO</TextOff>}
        </ContainerText>
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
