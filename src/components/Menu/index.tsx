import React, {useState} from 'react';
import {Container, ButtonMenu} from './styles';
import {ModalConnect} from '../Modal';
import Icon from 'react-native-vector-icons/Ionicons';

export function Menu() {
  const [modalControl, setModalControl] = useState(false);

  function toggleModal() {
    setModalControl(!modalControl);
  }
  return (
    <>
      <ModalConnect isVisible={modalControl} exitModal={toggleModal} />
      <Container>
        <ButtonMenu>
          <Icon
            name="chevron-back-sharp"
            size={30}
            color="#000"
            style={{marginRight: 10}}
          />
        </ButtonMenu>

        <ButtonMenu
          onPress={() => {
            setModalControl(!modalControl);
          }}>
          <Icon
            name="flower"
            size={30}
            color="#000"
            style={{marginRight: 10}}
          />
        </ButtonMenu>
      </Container>
    </>
  );
}
