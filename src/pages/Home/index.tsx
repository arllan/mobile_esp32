import React from 'react';
import {Menu} from '../../components/Menu';
import {Container} from './styles';
import {Input} from '../../components/Input/Input';
import {List} from '../../components/List';
import {useFilterHome} from './hook/useFilter';

export function Home() {
  const {data, filterData} = useFilterHome();

  return (
    <Container>
      <Menu navigationRow="home" />
      <Input placeholder="Pesquisar exemplo" change={val => filterData(val!)} />
      <List data={data} />
    </Container>
  );
}
