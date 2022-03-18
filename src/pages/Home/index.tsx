import React from 'react';
import {Menu} from '../../components/Menu';
import {Container} from './styles';
import {Input} from '../../components/Input';
import {List} from '../../components/List';
import {dataListObj} from '../../service/data/dataList';

export function Home() {
  return (
    <Container>
      <Menu navigationRow="home" />
      <Input placeholder="Pesquisar exemplo" />
      <List data={dataListObj} />
    </Container>
  );
}
