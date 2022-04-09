import React from 'react';
import {FlatList} from 'react-native';
import {Menu} from '../../components/Menu';
import {CardControl} from '../../components/CardControl';
import {ModalPin} from '../../components/Modal/ModalPin';
import {randomToString} from '../../helpers/RandomNumber';
import {ModalAdd} from '../../components/Modal/ModalAdd';
import {useExemple} from '../../hook/useExemple';
import {useProvider} from '../../provider/provider';
import {useDataManipulation} from '../../hook/new/useAsyncStorage';
import {Container, Content, ButtonAdd, TextButton} from './styles';

export function Exemple() {
  const {
    listInput,
    isPinModel,
    pinControl,
    controlModalAdd,
    handleOpen,
    refValue,
    editObj,
    editDataPin,
    handleClose,
    addObj,
    handleCloseModalAdd,
    setControlModalAdd,
  } = useExemple();

  const {dataList} = useProvider();
  const {setDataStorage} = useDataManipulation();
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
              pin={item?.porta}
              onPress={() => handleOpen(index)}
              value={refValue(index)}
              onValueChange={val => {
                editObj(index, val);
              }}
            />
          )}
        />
      </Content>

      <ModalPin
        funEdit={(pin, desligado, ligado) => {
          editDataPin(pin, desligado, ligado);
        }}
        isVisible={isPinModel}
        exitModal={handleClose}
        pin={pinControl}
        valueOriginal={listInput}
      />

      <ModalAdd
        isVisible={controlModalAdd}
        exitModal={handleCloseModalAdd}
        pin={pinControl}
        saveForm={values => {
          console.log('Retorno do modal: ', values);
        }}
      />

      <ButtonAdd onPress={() => setControlModalAdd(true)}>
        <TextButton>ADICIONAR</TextButton>
      </ButtonAdd>
    </Container>
  );
}
