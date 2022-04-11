import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Menu} from '../../components/Menu';
import {CardControl} from '../../components/CardControl';
import {ModalPin} from '../../components/Modal/ModalPin';
import {randomToString} from '../../helpers/RandomNumber';
import {ModalAdd} from '../../components/Modal/ModalAdd';
import {useProvider} from '../../provider/provider';
import {useDataManipulation} from '../../hook/new/useAsyncStorage';
import {Container, Content, ButtonAdd, TextButton} from './styles';
import {useObject} from '../../hook/new/useObject';
import {keyAsyncStorage} from '../../config/keyAsyncStorage';
import {IAddDataBase} from '../../dtos/StateBase';

import {
  IDeletePositionBase,
  ISetDataBase,
  IUpdateDataBase,
} from '../../dtos/DataBaseDTO';

interface InputsCard {
  porta: string;
  ligado: string;
  desligado: string;
  statePin: boolean;
}

export function Exemple() {
  const [isPinModel, setIsPinModel] = useState(false);
  const [pinControl, setPinControl] = useState<number>(0);
  const [listInput, setListInput] = useState<InputsCard[]>([]);
  const [controlModalAdd, setControlModalAdd] = useState(false);

  function handleOpen(pin: number) {
    setPinControl(pin);
    setIsPinModel(!isPinModel);
  }

  function editDataPin(index: number, desligado: string, ligado: string) {
    if (listInput[index] !== undefined) {
      const newInput = [...listInput];
      newInput[index].desligado = desligado
        ? desligado
        : newInput[index].desligado;
      newInput[index].ligado = ligado ? ligado : newInput[index].ligado;
      setListInput(newInput);
    }
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

  const {data, dataList} = useProvider();
  const {addObject, updateObjectIndex} = useObject();

  useEffect(() => {
    console.log('REGISTROS NO STATE :dataList:', dataList);
  }, [dataList]);

  /*
    Ao adicionar um novo elemento
    ao modificar os estado 
  */

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
          await setDataAllStorage(keyAsyncStorage, values);
        }}
      />

      <ButtonAdd onPress={() => setControlModalAdd(true)}>
        <TextButton>ADICIONAR</TextButton>
      </ButtonAdd>
    </Container>
  );
}

// function add() {
//   const data = {
//     porta: 'porta',
//     ligado: 'ligado',
//     desligado: 'desligado',
//     statePin: false,
//   };

//   addObject(data);
// }

// function update(index: number) {
//   const value = {
//     index: index,
//     porta: 'porta',
//     ligado: 'ligado',
//     desligado: 'desligado',
//     statePin: false,
//   };
//   updateObjectIndex(value);
// }

// useEffect(() => {
//   const request = async () => {
//     // const data: ISetDataBase = {
//     //   key: 'chave',
//     //   porta: '01',
//     //   ligado: 'lig01',
//     //   desligado: 'arllan',
//     //   statePin: false,
//     // };

//     // await setDataAllStorage(data); // Adiciona um nova posicao ao elemento
//     const dataUpdate: IUpdateDataBase = {
//       key: 'chave',
//       index: 2,
//       desligado: 'arllan desligado',
//       ligado: 'arllan lisgado',
//       porta: 'arllan porta',
//       statePin: true,
//     };
//     await updateDataStorage(dataUpdate);
//     const value = await getDataStorage('chave'); // consulta todos os dados
//     console.log('____________________');
//     console.log('Type: ', typeof value);
//     console.log('QUANTIDADE: ', value?.length);
//     console.log('Value: ', value);
//     console.log('____________________');

//     // const del: IDeletePositionBase = {key: 'chave', index: 2};
//     // await deletePositionStorage(del);
//     // await deleteDataStorage('chave'); // deleta todos os dados do banco
//   };

//   request();
// }, []);
