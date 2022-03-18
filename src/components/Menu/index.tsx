import React from 'react';
import {Container, Row} from './styles';
import {Bar} from '../StatusBar';
import {RowMenu} from '../RowMenu';

interface IPropsMenu {
  navigationRow: 'home' | 'exemple' | 'intro';
}

export function Menu({navigationRow}: IPropsMenu) {
  return (
    <Container>
      <RowMenu navigationRow={navigationRow} />
      <Bar />
    </Container>
  );
}
