import React, {useState} from 'react';
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
  pin?: string;
  onPress: () => void;
  onChange: (val: boolean) => void;
}

export function CardControl({pin, onPress, onChange}: ICardControlProps) {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <Line>
      <Row>
        <Button>
          <Icons />
        </Button>
        <TextToogle>PORTA DIGITAL {pin} </TextToogle>
      </Row>
      <LineVertical />
      <Row>
        <ContainerText>
          {switchValue ? <TextOn>LIGADO</TextOn> : <TextOff>DESLIGADO</TextOff>}
        </ContainerText>
        <Switch
          value={switchValue}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={true ? '#1E90FF' : '#f4f3f4'}
          onValueChange={val => {
            setSwitchValue(val);
            onChange(val);
          }}
        />
      </Row>
    </Line>
  );
}
