import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Switch, TouchableOpacityProps} from 'react-native';
import {IUpdateDataBase} from '../../dtos/DataBaseDTO';
import {keyAsyncStorage} from '../../config/keyAsyncStorage';
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
  object?: any;
  position: number;
  onChange: (data: IUpdateDataBase) => void;
  onPress: () => void;
}

export function CardControl({
  object,
  onPress,
  position,
  onChange,
}: ICardControlProps) {
  const [switchValue, setSwitchValue] = useState(object?.statePin);

  async function handleSwitch(value: boolean) {
    setSwitchValue(value);
    const data: IUpdateDataBase = {
      key: keyAsyncStorage,
      index: position,
      porta: object.porta,
      ligado: object.ligado,
      desligado: object.desligado,
      statePin: value,
    };
    onChange(data);
  }

  return (
    <Line>
      <Row>
        <Button onPress={onPress}>
          <Icons />
        </Button>
        <TextToogle>PORTA DIGITAL {object?.porta} </TextToogle>
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
            handleSwitch(val);
          }}
        />
      </Row>
    </Line>
  );
}
