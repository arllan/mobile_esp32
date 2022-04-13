import React, {useEffect} from 'react';
import {InputForm} from '../../inputForm';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAsyncIp} from '../../../hook/new/useAsyncIp';
import {
  schema,
  schemaValidate,
} from '../../../helpers/Validations/ModalConnect/modalConnect';
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
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {setIpStore, getIpStore, ipValue} = useAsyncIp();

  useEffect(() => {
    setValue('input', ipValue);
    clearErrors('input');
    const request = async () => {
      await getIpStore();
    };
    request();
  }, [isVisible, ipValue]);

  function save(form: schemaValidate) {
    setIpStore(form.input);
    exitModal();
  }

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
            <Button onPress={handleSubmit(save)}>
              <TextButton>Salvar</TextButton>
            </Button>
          </Row>
        </BodyModal>
      </ModalConatiner>
    </Container>
  );
}

// const {
//   // setDataStorage,
//   ipConnect,
//   control,
//   handleSubmit,
//   errors,
//   setValue,
//   reset,
//   clearErrors,
// } = useAsyncStorage();

// function saveValue(value: any) {
//   setDataStorage('IP', value?.input);
//   exitModal();
// }

// function resetModal() {
//   setValue('input', ipConnect);
//   exitModal();
// }

// useEffect(() => {
//   setValue('input', ipConnect);
//   clearErrors('input');
//   console.log('Passou pelo modal!', isVisible);
// }, [isVisible]);
