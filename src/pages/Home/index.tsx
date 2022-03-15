import React from 'react';
import {Menu} from '../../components/Menu';
import {Card} from '../../components/Card';
import {Container} from './styles';

export function Home() {
  return (
    <Container>
      <Menu />
      <Card />
    </Container>
  );
}
