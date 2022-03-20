import React, {useState} from 'react';
import {Menu} from '../../components/Menu';
import {CardControl} from '../../components/CardControl';
import {Container, Content, ContentScroll} from './styles';

export function Exemple() {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  return (
    <Container>
      <Menu navigationRow="exemple" labelmenu="CONTROLE DE PORTAS" />
      <ContentScroll>
        <Content>
          <CardControl
            pin="01"
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />
          <CardControl
            pin="02"
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />
          <CardControl
            pin="03"
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="04"
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="05"
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="06"
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="07"
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="08"
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />
          <CardControl
            pin="09"
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />
        </Content>
      </ContentScroll>
    </Container>
  );
}
