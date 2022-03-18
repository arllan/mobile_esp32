import React from 'react';
import {Container} from './styles';
import {Bar} from '../StatusBar';
import {RowMenu} from '../RowMenu';

interface IPropsMenu {
  navigationRow: 'home' | 'exemple' | 'intro';
  labelmenu?: string;
}

export function Menu({navigationRow, labelmenu}: IPropsMenu) {
  return (
    <Container>
      <RowMenu navigationRow={navigationRow} labelmenu={labelmenu} />
      <Bar />
    </Container>
  );
}
