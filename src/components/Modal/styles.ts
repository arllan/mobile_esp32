import {normalizePx} from './../../global/styles/mixins';
import styled from 'styled-components/native';
import Modal, {ModalProps} from 'react-native-modal';

type PropsButton = {
  type: 'connect' | 'close';
};

export const ModalConatiner = styled(Modal)``;

export const Container = styled.View`
  flex: 1;
`;

export const BodyModal = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  min-height: ${normalizePx(50)};
  padding: 15px 15px;
  border-radius: ${normalizePx(10)};
`;

export const Button = styled.TouchableOpacity<PropsButton>`
  width: 48%;
  height: ${normalizePx(50)};
  align-items: center;
  justify-content: center;
  border-radius: ${normalizePx(10)};
  background-color: ${({theme, type}) =>
    type === 'close' ? theme.colors.attention : theme.colors.success};
`;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${({theme}) => theme.fontsDimension.large}px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  width: 100%;
  min-height: 50px;
  font-size: ${normalizePx(17)};
  padding-left: ${normalizePx(5)};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.backgroundPrimary};
  margin-bottom: ${normalizePx(10)};
  margin-top: ${normalizePx(10)};
  border-radius: ${normalizePx(10)};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${normalizePx(15)};
  font-weight: normal;
  text-align: justify;
`;
