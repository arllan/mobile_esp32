import React, {useEffect, useState} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {InputValidate} from '../../inputValidate';
import {keyAsyncStorage} from '../../../config/keyAsyncStorage';
import {ISetDataBase} from '../../../dtos/DataBaseDTO';
import {SwitchRow} from '../../SwitchRow';
import {
  schema,
  schemaValidate,
} from '../../../helpers/Validations/ModalAdd/ModalAdd';
import {
  ModalConatiner,
  Container,
  BodyModal,
  Button,
  TextButton,
  Row,
  SubTitle,
  Title,
  AreaButton,
  TextButtonReturn,
  Icons,
} from './styles';
interface IPropsModal {
  isVisible: boolean;
  exitModal: () => void;
  saveForm: (values: ISetDataBase) => void;
}

export function ModalAdd({
  isVisible,
  exitModal,
  saveForm,
  ...rest
}: IPropsModal) {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [switchControl, setSwitchControl] = useState<boolean>(false);

  useEffect(() => {
    console.log('toggle funcionando!', switchControl);
  }, [switchControl]);

  function save(form: schemaValidate) {
    const data: ISetDataBase = {
      desligado: form.inputDesligado,
      key: keyAsyncStorage,
      ligado: form.inputLigado,
      porta: form.inputPino,
      statePin: switchControl,
    };
    saveForm(data);
    exitModal();
  }

  useEffect(() => {
    // define o valor para false toda vez quando abre o modal
    setSwitchControl(false);

    // defined values initial
    setValue('inputPino', '');
    setValue('inputDesligado', '');
    setValue('inputLigado', '');

    // reset list erros
    clearErrors('inputPino');
    clearErrors('inputDesligado');
    clearErrors('inputLigado');
  }, [isVisible]);

  return (
    <Container>
      <ModalConatiner {...rest} isVisible={isVisible}>
        <BodyModal>
          <Title>Selecionar comando</Title>
          <SubTitle>
            Escolha o pino que vai ser controlado com o comando informado
            abaixo.
          </SubTitle>
          <InputValidate
            label="Pino"
            type="Pin"
            name="inputPino"
            keyboardType="numeric"
            maxLength={2}
            control={control}
            list={errors}
            error={errors.inputPino && errors.inputPino.message}
          />

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
          <SwitchRow changeValue={val => setSwitchControl(val)} />
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
