import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Row, Text, Button, RowHome} from './styled';
import {ModalConnect} from '../../components/Modal';

interface IPropsMenu {
  navigationRow: 'home' | 'exemple' | 'intro';
  labelmenu?: string;
}

export function RowMenu({navigationRow, labelmenu}: IPropsMenu) {
  const [controlModal, setControlModal] = useState(false);
  return (
    <>
      {navigationRow == 'exemple' && (
        <Row>
          <Button>
            <Icon name="chevron-back-sharp" size={30} color="#FFF" />
          </Button>
          {labelmenu && <Text>{labelmenu}</Text>}
          <Button>
            <Icon name="grid-outline" size={30} color="#FFF" />
          </Button>
        </Row>
      )}

      {navigationRow == 'home' && (
        <RowHome>
          <Button
            onPress={() => {
              setControlModal(true);
            }}>
            <Icon name="grid-outline" size={30} color="#FFF" />
          </Button>
        </RowHome>
      )}

      <ModalConnect
        isVisible={controlModal}
        exitModal={() => {
          setControlModal(false);
        }}
      />
    </>
  );
}
