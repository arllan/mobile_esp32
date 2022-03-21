import React from 'react';
import {Switch, TouchableOpacityProps} from 'react-native';
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

interface ICardControlProps extends TouchableOpacityProps {
  pin: string;
  value: boolean;
  onPress: () => void;
  onValueChange: (val: boolean) => void;
}

export function CardControl({
  pin,
  value,
  onValueChange,
  onPress,
}: ICardControlProps) {
  return (
    <Line>
      <Row>
        <Button onPress={onPress}>
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
