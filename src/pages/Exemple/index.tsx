import React, {useState} from 'react';
import {Menu} from '../../components/Menu';
import {CardControl} from '../../components/CardControl';
import {ModalPin} from '../../components/Modal/ModalPin';
import {Container, Content, ContentScroll} from './styles';

export function Exemple() {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [isPinModel, setIsPinModel] = useState(false);
  const [pinControl, setPinControl] = useState<number>(0);

  function handleOpen(pin: number) {
    setPinControl(pin);
    setIsPinModel(true);
  }

  function handleClose() {
    setIsPinModel(false);
  }
  return (
    <Container>
      <Menu navigationRow="exemple" labelmenu="CONTROLE DE PORTAS" />
      <ContentScroll>
        <Content>
          <CardControl
            pin="01"
            onPress={() => handleOpen(1)}
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />
          <CardControl
            pin="02"
            onPress={() => handleOpen(2)}
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />
          <CardControl
            pin="03"
            onPress={() => handleOpen(3)}
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="04"
            onPress={() => handleOpen(4)}
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="05"
            onPress={() => handleOpen(5)}
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="06"
            onPress={() => handleOpen(6)}
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="07"
            onPress={() => handleOpen(7)}
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />

          <CardControl
            pin="08"
            onPress={() => handleOpen(8)}
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />
          <CardControl
            pin="09"
            onPress={() => handleOpen(9)}
            value={toggleSwitch}
            onValueChange={val => {
              setToggleSwitch(val);
            }}
          />
        </Content>
      </ContentScroll>
      <ModalPin
        isVisible={isPinModel}
        exitModal={handleClose}
        pin={pinControl}
      />
    </Container>
  );
}
