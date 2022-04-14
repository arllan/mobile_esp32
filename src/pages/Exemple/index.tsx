import React from 'react';
import {FlatList} from 'react-native';
import {Menu} from '../../components/Menu';
import {CardControl} from '../../components/CardControl';
import {ModalUpdatePin} from '../../components/Modal/ModalPin';
import {randomToString} from '../../helpers/RandomNumber';
import {ModalAdd} from '../../components/Modal/ModalAdd';
import {Container, Content, ButtonAdd, TextButton} from './styles';
import {keyAsyncStorage} from '../../config/keyAsyncStorage';
import {useExemple} from './hook/useExemple';

export function Exemple() {
  const {
    handleOpen,
    updateDataStorage,
    handleClose,
    handleCloseModalAdd,
    setDataAllStorage,
    setControlModalAdd,
    dataList,
    isPinModel,
    pinControl,
    controlModalAdd,
  } = useExemple();

  return (
    <Container>
      <Menu navigationRow="exemple" labelmenu="CONTROLE DE PORTAS" />
      <Content>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          data={dataList}
          keyExtractor={() => randomToString(0, 1000)}
          renderItem={({item, index}) => (
            <CardControl
              object={item}
              position={index}
              onPress={() => handleOpen(index)}
              onChange={async val => {
                await updateDataStorage(val);
              }}
            />
          )}
        />
      </Content>

      <ModalUpdatePin
        isVisible={isPinModel}
        exitModal={handleClose}
        indexObject={pinControl}
        funEdit={async data => {
          await updateDataStorage(data);
        }}
      />

      <ModalAdd
        isVisible={controlModalAdd}
        exitModal={handleCloseModalAdd}
        saveForm={async values => {
          await setDataAllStorage(keyAsyncStorage, values);
        }}
      />

      <ButtonAdd onPress={() => setControlModalAdd(true)}>
        <TextButton>ADICIONAR</TextButton>
      </ButtonAdd>
    </Container>
  );
}
