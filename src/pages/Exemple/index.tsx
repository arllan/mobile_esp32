import React, {useEffect, useState} from 'react';
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

import {
  IDeletePositionBase,
  ISetDataBase,
  IUpdateDataBase,
} from '../../dtos/DataBaseDTO';

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

  const {
    setDataAllStorage,
    getDataStorage,
    deleteDataStorage,
    updateDataStorage,
    deletePositionStorage,
  } = useDataManipulation();

  var {dataList} = useProvider();

  useEffect(() => {
    const request = async () => {
      // const data: ISetDataBase = {
      //   key: 'chave',
      //   porta: '01',
      //   ligado: 'lig01',
      //   desligado: 'arllan',
      //   statePin: false,
      // };

      // await setDataAllStorage(data); // Adiciona um nova posicao ao elemento
      const dataUpdate: IUpdateDataBase = {
        key: 'chave',
        index: 2,
        desligado: 'arllan desligado',
        ligado: 'arllan lisgado',
        porta: 'arllan porta',
        statePin: true,
      };
      await updateDataStorage(dataUpdate);
      const value = await getDataStorage('chave'); // consulta todos os dados
      console.log('____________________');
      console.log('Type: ', typeof value);
      console.log('QUANTIDADE: ', value?.length);
      console.log('Value: ', value);
      console.log('____________________');

      // const del: IDeletePositionBase = {key: 'chave', index: 2};
      // await deletePositionStorage(del);
      // await deleteDataStorage('chave'); // deleta todos os dados do banco
    };

    request();
  }, []);

  useEffect(() => {
    console.log('Retorno:', dataList);
    console.log(
      '_____________________________________________________________',
    );
    console.log('QUANTIDADE:', dataList?.length);
  }, [dataList]);

  return (
    <Container>
      <Menu navigationRow="exemple" labelmenu="CONTROLE DE PORTAS" />
      <Content>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
            // flex: 1,
          }}
          data={dataList}
          keyExtractor={() => randomToString(0, 1000)}
          renderItem={({item, index}) => (
            <CardControl
              pin={item?.porta}
              onPress={() => handleOpen(index)}
              // value={refValue(index)}
              onChange={val => {
                editObj(index, val);
              }}
            />
          )}
        />
      </Content>

      <ModalPin
        funEdit={(pin, desligado, ligado) => {
          editDataPin(Number(pin), desligado, ligado);
        }}
        isVisible={isPinModel}
        exitModal={handleClose}
        pin={String(pinControl)}
        valueOriginal={listInput}
      />

      <ModalAdd
        isVisible={controlModalAdd}
        exitModal={handleCloseModalAdd}
        saveForm={async values => {
          await setDataAllStorage(values);
        }}
      />

      <ButtonAdd onPress={() => setControlModalAdd(true)}>
        <TextButton>ADICIONAR</TextButton>
      </ButtonAdd>
    </Container>
  );
}
