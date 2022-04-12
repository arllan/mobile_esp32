import {normalizePx} from './../../global/styles/mixins';
import {TextInput, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type PropsInput = {
  error: boolean;
};

export const Container = styled.View<PropsInput>`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.shape};
  width: 100%;
  margin-top: ${normalizePx(10)};
  border-width: ${RFValue(1)}px;
  border-style: solid;
  border-color: ${({theme, error}) =>
    error ? theme.colors.attention : theme.colors.blue600};
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.attention};
`;

export const RowErro = styled.View`
  width: 100%;
  height: ${normalizePx(20)};
  margin-bottom: ${normalizePx(7)};
  /* background-color: red; */
`;

export const Input = styled(TextInput)`
  width: 72%;
  padding: ${Platform.OS == 'ios'
    ? (normalizePx(5), normalizePx(12))
    : (normalizePx(3), normalizePx(5))};
  font-size: ${RFValue(14)}px;
  background-color: ${({theme}) => theme.colors.shape};
  color: ${({theme}) => theme.colors.text_dark};
  border-radius: 5px;
  font-size: ${normalizePx(16)};
  margin-top: 3px;
  margin-bottom: 3px;
`;
