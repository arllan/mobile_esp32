import React, {useEffect} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {keyAsyncStorage} from '../../../config/keyAsyncStorage';
import {useProvider} from '../../../provider/provider';
import {IUpdateDataBase} from '../../../dtos/DataBaseDTO';
import {InputValidate} from '../../inputValidate';
import {
  schema,
  schemaValidate,
} from '../../../helpers/Validations/ModalPin/ModalPin';

import {
  ModalConatiner,
  Container,
  BodyModal,
  Button,
  TextButton,
  Row,
  SubTitle,
  Title,
  TitleInput,
  AreaButton,
  TextButtonReturn,
  Icons,
} from './styles';
interface IPropsModal {
  isVisible: boolean;
  indexObject: number;
  exitModal: () => void;
  funEdit: (data: any) => void;
}

export function ModalUpdatePin({
  isVisible,
  exitModal,
  indexObject,
  funEdit,
  ...rest
}: IPropsModal) {
  const {dataList} = useProvider();

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function save(form: schemaValidate) {
    const data: IUpdateDataBase = {
      desligado: form.inputDesligado,
      ligado: form.inputLigado,
      key: keyAsyncStorage,
      index: indexObject,
      porta: dataList[indexObject].porta,
      statePin: dataList[indexObject].statePin,
    };
    funEdit(data);
    exitModal();
  }

  useEffect(() => {
    if (dataList !== undefined || null) {
      setValue('inputDesligado', dataList[indexObject]?.desligado);
      setValue('inputLigado', dataList[indexObject]?.ligado);
    }

    // reset list erros
    clearErrors('inputDesligado');
    clearErrors('inputLigado');
  }, [isVisible]);

  return (
    <Container>
      <ModalConatiner {...rest} isVisible={isVisible}>
        <BodyModal>
          <Title>Selecionar comando</Title>
          <SubTitle>
            E preciso selecionar o elemento de texto que vai ser enviado ao
            esp32. Geralmente combinações de até 5 letras.
          </SubTitle>
          <TitleInput>COMANDO A SER ENVIADO</TitleInput>

          <InputValidate
            label="DESLIGADO"
            type="Des"
            name="inputDesligado"
            keyboardType="name-phone-pad"
            control={control}
            list={errors}
            error={errors.inputDesligado && errors.inputDesligado.message}
          />

          <InputValidate
            label="LIGADO"
            type="Lig"
            name="inputLigado"
            keyboardType="name-phone-pad"
            control={control}
            list={errors}
            error={errors.inputLigado && errors.inputLigado.message}
          />
          <Row>
            <AreaButton onPress={exitModal}>
              <Icons />
              <TextButtonReturn>Fechar</TextButtonReturn>
            </AreaButton>
            <Button onPress={handleSubmit(save)}>
              <TextButton>Salvar</TextButton>
            </Button>
          </Row>
        </BodyModal>
      </ModalConatiner>
    </Container>
  );
}
