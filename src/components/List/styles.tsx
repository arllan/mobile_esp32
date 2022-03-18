import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Card = styled.View`
  /* width: 100%; */
  height: ${normalizePx(70)};
  background-color: red;
  border-radius: ${normalizePx(20)};
  margin-top: ${normalizePx(20)};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-size: ${normalizePx(19)};
`;
