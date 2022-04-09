import React, {useEffect} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {InputValidate} from '../../inputValidate';
import {schema} from '../../../helpers/Validations/ModalAdd/ModalAdd';
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

interface InputsValues {
  inputDesligado: string;
  inputLigado: string;
  inputPino: string;
}
interface IPropsModal {
  isVisible: boolean;
  pin: number;
  exitModal: () => void;
  saveForm: (values: InputsValues) => void;
}

export function ModalAdd({
  isVisible,
  exitModal,
  pin,
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

  function save(form: InputsValues) {
    saveForm(form);
  }

  useEffect(() => {
    // defined values initial
    setValue('inputPino', '#valor');
    setValue('inputDesligado', '#valor');
    setValue('inputLigado', '#valor');
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
            autoCapitalize="none"
            keyboardType="numeric"
            control={control}
            list={errors}
            error={errors.inputPino && errors.inputPino.message}
          />

          <InputValidate
            label="DESLIGADO"
            type="Des"
            name="inputDesligado"
            autoCapitalize="none"
            keyboardType="numeric"
            control={control}
            list={errors}
            error={errors.inputDesligado && errors.inputDesligado.message}
          />

          <InputValidate
            label="LIGADO"
            type="Lig"
            name="inputLigado"
            autoCapitalize="none"
            keyboardType="numeric"
            control={control}
            list={errors}
            error={errors.inputDesligado && errors.inputDesligado.message}
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
