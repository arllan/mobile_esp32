import React from 'react';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {
  Container,
  Error,
  Input,
  RowErro,
  LabelInput,
  TextLabel,
} from './styles';

interface Props extends TextInputProps {
  type: 'Pin' | 'Des' | 'Lig';
  control: Control;
  name: string;
  error: boolean;
  list?: any;
  activityErro?: boolean;
  label?: string;
}

export function InputValidate({
  control,
  name,
  error,
  list,
  activityErro = true,
  label,
  type,
  ...rest
}: Props) {
  return (
    <>
      <Container error={name in list}>
        <LabelInput error={name in list}>
          <TextLabel mode={type}>{label}</TextLabel>
        </LabelInput>
        <Controller
          name={name}
          control={control}
          render={({field: {onChange, value}}) => (
            <Input onChangeText={onChange} value={value} {...rest} />
          )}
        />
      </Container>
      <RowErro>{error && activityErro && <Error>{error}</Error>}</RowErro>
    </>
  );
}
