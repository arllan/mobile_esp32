import React from 'react';
import {Menu} from '../../components/Menu';
import {Container} from './styles';

export function Home() {
  return (
    <Container>
      <Menu navigationRow="home" />
    </Container>
  );
}
