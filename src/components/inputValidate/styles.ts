import {normalizePx} from '../../global/styles/mixins';
import {TextInput, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type PropsInput = {
  error: boolean;
};

type PropsType = {
  mode: 'Pin' | 'Des' | 'Lig';
};

export const Container = styled.View<PropsInput>`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  margin-top: ${normalizePx(3)};
  border-width: ${RFValue(1)}px;
  border-style: solid;
  border-color: ${({theme, error}) =>
    error ? theme.colors.attention : theme.colors.blue600};
`;

export const Error = styled.Text`
  font-size: ${normalizePx(13)};
  color: ${({theme}) => theme.colors.attention};
`;

export const RowErro = styled.View`
  width: 100%;
  height: ${normalizePx(20)};
  /* background-color: red; */
`;

export const Input = styled(TextInput)`
  width: 60%;
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text_dark};
  border-radius: 5px;
  font-size: ${normalizePx(16)};
  height: ${normalizePx(47)};
  padding: ${Platform.OS == 'ios'
    ? (normalizePx(5), normalizePx(12))
    : (normalizePx(3), normalizePx(5))};
`;

export const LabelInput = styled.View<PropsInput>`
  width: 40%;
  height: ${normalizePx(47)};
  align-items: center;
  justify-content: center;
  padding: ${Platform.OS == 'ios'
    ? (normalizePx(5), normalizePx(12))
    : (normalizePx(3), normalizePx(5))};
  border-right-width: ${normalizePx(1)};
  border-right-color: ${({theme}) => theme.colors.blue600};
  border-color: ${({theme, error}) =>
    error ? theme.colors.attention : theme.colors.blue600};
`;

export const TextLabel = styled.Text<PropsType>`
  font-size: ${normalizePx(16)};
  font-weight: bold;
  color: ${({theme, mode}) =>
    mode == 'Pin'
      ? theme.colors.text
      : mode == 'Des'
      ? theme.colors.attention
      : theme.colors.successSecundary};
`;
