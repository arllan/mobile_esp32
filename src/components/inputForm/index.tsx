import React from 'react';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {Container, Error, Input, RowErro} from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: boolean;
  list?: any;
  activityErro?: boolean;
}

export function InputForm({
  control,
  name,
  error,
  list,
  activityErro = true,
  ...rest
}: Props) {
  return (
    <>
      <Container error={name in list}>
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
