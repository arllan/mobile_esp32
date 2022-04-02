import styled from 'styled-components/native';
import {Switch} from 'react-native';
import {normalizePx} from '../../global/styles/mixins';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${normalizePx(20)};
  margin-bottom: ${normalizePx(10)};
`;

export const SwitchControl = styled(Switch)`
  margin-left: ${normalizePx(3)};
`;

export const Label = styled.Text`
  font-size: ${normalizePx(13)};
  color: ${({theme}) => theme.colors.backgroundPrimary};
`;

export const ContainerText = styled.View`
  width: ${normalizePx(80)};
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: ${normalizePx(1)};
`;

export const TextOff = styled.Text`
  color: ${({theme}) => theme.colors.backgroundPrimary};
  font-size: ${normalizePx(12)};
  font-weight: 500;
`;

export const TextOn = styled.Text`
  color: ${({theme}) => theme.colors.successSecundary};
  font-size: ${normalizePx(12)};
  font-weight: 500;
`;

export const LineVertical = styled.View`
  height: ${normalizePx(25)};
  margin-left: ${normalizePx(5)};
  border-left-width: ${normalizePx(2)};
  border-left-color: ${({theme}) => theme.colors.backgroundPrimary};
`;
