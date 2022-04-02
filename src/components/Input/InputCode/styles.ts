import {Theme} from '@react-navigation/native';
import {TextInputProps, TextInput} from 'react-native';
import styled from 'styled-components/native';
import {normalizePx} from '../../../global/styles/mixins';

interface Text {
  type: 'attention' | 'success' | 'normal';
}

export const Container = styled.View`
  width: 100%;
  margin-top: ${normalizePx(10)};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: ${normalizePx(10)};
  border-width: ${normalizePx(1)};
  border-color: ${({theme}) => theme.colors.backgroundPrimary};
  background-color: ${({theme}) => theme.colors.background};
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const InputElement = styled(TextInput)<TextInputProps>`
  width: 60%;
  height: ${normalizePx(50)};
  background-color: ${({theme}) => theme.colors.background};
  font-size: ${normalizePx(15)};
  border-radius: ${normalizePx(10)};
  padding-left: 20px;
`;

export const CardInput = styled.View`
  width: 40%;
  height: ${normalizePx(50)};
  background-color: ${({theme}) => theme.colors.background};
  border-top-left-radius: ${normalizePx(10)};
  border-bottom-left-radius: ${normalizePx(10)};
  justify-content: center;
  align-items: center;
  border-right-color: ${({theme}) => theme.colors.backgroundPrimary};
  border-right-width: ${normalizePx(1)};
`;

export const Text = styled.Text<Text>`
  font-size: ${normalizePx(14)};
  font-weight: 600;
  color: ${({theme, type}) =>
    type === 'attention'
      ? theme.colors.attention
      : type === 'success'
      ? theme.colors.success
      : theme.colors.text};
`;
