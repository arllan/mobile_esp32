import React, {useState} from 'react';
import {Switch} from 'react-native';
import {Menu} from '../../components/Menu';
import {CardControl} from '../../components/CardControl';

import {Container, Content} from './styles';

export function Exemple() {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  return (
    <Container>
      <Menu navigationRow="exemple" labelmenu="CONTROLE DE PORTAS" />
      <Content>
        <CardControl
          pin="01"
          value={toggleSwitch}
          onValueChange={val => {
            setToggleSwitch(val);
          }}
        />
      </Content>
    </Container>
  );
}
