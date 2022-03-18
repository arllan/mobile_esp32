import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${normalizePx(5)};
  padding-right: ${normalizePx(10)};
`;

export const RowHome = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-left: ${normalizePx(5)};
  padding-right: ${normalizePx(10)};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-weight: bold;
  font-size: ${normalizePx(15)};
`;

export const Button = styled.TouchableOpacity``;
