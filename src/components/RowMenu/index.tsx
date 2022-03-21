import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ModalConnect} from '../Modal/ModalConnect';
import {
  Row,
  Text,
  Button,
  RowHome,
  IconsGrid,
  IconChevron,
  NavPlataforma,
} from './styled';

interface IPropsMenu {
  navigationRow: 'home' | 'exemple' | 'intro';
  labelmenu?: string;
}

export function RowMenu({navigationRow, labelmenu}: IPropsMenu) {
  const navigation = useNavigation();
  const [controlModal, setControlModal] = useState(false);

  function handleOpenModal() {
    setControlModal(true);
  }

  function handleExitModal() {
    setControlModal(false);
  }

  function handleReturnNavigation() {
    navigation.goBack();
  }

  return (
    <NavPlataforma marginPlatform={Platform.OS}>
      {navigationRow == 'exemple' && (
        <Row>
          <Button onPress={handleReturnNavigation}>
            <IconChevron />
          </Button>
          {labelmenu && <Text>{labelmenu}</Text>}
          <Button onPress={handleOpenModal}>
            <IconsGrid />
          </Button>
        </Row>
      )}

      {navigationRow == 'home' && (
        <RowHome>
          <Button onPress={handleOpenModal}>
            <IconsGrid />
          </Button>
        </RowHome>
      )}

      <ModalConnect isVisible={controlModal} exitModal={handleExitModal} />
    </NavPlataforma>
  );
}
