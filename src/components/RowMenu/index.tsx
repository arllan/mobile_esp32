import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Row, Text, Button, RowHome} from './styled';

interface IPropsMenu {
  navigationRow: 'home' | 'exemple' | 'intro';
  labelmenu?: string;
}

export function RowMenu({navigationRow, labelmenu}: IPropsMenu) {
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
          <Button>
            <Icon name="grid-outline" size={30} color="#FFF" />
          </Button>
        </RowHome>
      )}
    </>
  );
}
