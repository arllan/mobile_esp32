import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: ${normalizePx(114)};
  background-color: ${({theme}) => theme.colors.orange};
`;

export const Row = styled.View`
  width: 100%;
`;
