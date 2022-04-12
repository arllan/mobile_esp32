import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Menu} from '../../components/Menu';
import {CardControl} from '../../components/CardControl';
import {ModalUpdatePin} from '../../components/Modal/ModalPin';
import {randomToString} from '../../helpers/RandomNumber';
import {ModalAdd} from '../../components/Modal/ModalAdd';
import {useProvider} from '../../provider/provider';
import {useDataManipulation} from '../../hook/new/useAsyncStorage';
import {Container, Content, ButtonAdd, TextButton} from './styles';
import {keyAsyncStorage} from '../../config/keyAsyncStorage';

export function Exemple() {
  const [isPinModel, setIsPinModel] = useState(false);
  const [pinControl, setPinControl] = useState<number>(0);
  const [controlModalAdd, setControlModalAdd] = useState(false);

  function handleOpen(pin: number) {
    setPinControl(pin);
    setIsPinModel(!isPinModel);
  }

  function handleClose() {
    setIsPinModel(!isPinModel);
  }

  function handleCloseModalAdd() {
    setControlModalAdd(false);
  }

  const {
    setDataAllStorage,
    getDataStorage,
    deleteDataStorage,
    updateDataStorage,
    deletePositionStorage,
  } = useDataManipulation();

  const {dataList} = useProvider();

  useEffect(() => {
    if (dataList === undefined) {
      getDataStorage(keyAsyncStorage);
    }
  }, []);

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
