import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.colors.orange};
`;

export const Content = styled.View`
  bottom: ${normalizePx(50)};
  position: absolute;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const ButtonNext = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 70%;
  align-items: center;
  justify-content: center;
  height: ${normalizePx(50)};
  background-color: ${({theme}) => theme.colors.backgroundYellow};
  border-radius: ${normalizePx(15)};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-size: ${normalizePx(20)};
  font-weight: 600;
`;

export const ButtonDone = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-top: ${normalizePx(15)};
`;
