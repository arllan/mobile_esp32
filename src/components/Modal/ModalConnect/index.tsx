import React, {useEffect} from 'react';
import {useAsyncStorage} from '../../../hook/useAsyncStorage';
import {InputForm} from '../../inputForm';
import {useDataManipulation} from '../../../hook/new/useAsyncStorage';
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
  initialValue?: string;
  exitModal: () => void;
}

export function ModalConnect({isVisible, exitModal, ...rest}: IPropsModal) {
  const {
    // setDataStorage,
    ipConnect,
    control,
    handleSubmit,
    errors,
    setValue,
    reset,
    clearErrors,
  } = useAsyncStorage();

  // const {setDataStorage} = useDataManipulation();

  useEffect(() => {
    // setDataStorage('TEST', 'value');
  }, [isVisible]);

  // function saveValue(value: any) {
  //   setDataStorage('IP', value?.input);
  //   exitModal();
  // }

  // function resetModal() {
  //   setValue('input', ipConnect);
  //   exitModal();
  // }

  useEffect(() => {
    setValue('input', ipConnect);
    clearErrors('input');
    console.log('Passou pelo modal!', isVisible);
  }, [isVisible]);

  return (
    <Container>
      <ModalConatiner {...rest} isVisible={isVisible}>
        <BodyModal>
          <Title>Adicionar IP do ESP32</Title>
          <SubTitle>
            Informe o ip da placa esp32 para o app enviar as requisiçoes.
          </SubTitle>
          <TitleInput>IP DA PLACA</TitleInput>
          <InputForm
            name="input"
            autoCapitalize="none"
            keyboardType="numeric"
            control={control}
            placeholder="exemplo: 192.168.25.10"
            list={errors}
            error={errors.input && errors.input.message}
          />
          <Row>
            <AreaButton onPress={exitModal}>
              <Icons />
              <TextButtonReturn>Fechar</TextButtonReturn>
            </AreaButton>
            <Button>
              <TextButton>Salvar</TextButton>
            </Button>
          </Row>
        </BodyModal>
      </ModalConatiner>
    </Container>
  );
}
