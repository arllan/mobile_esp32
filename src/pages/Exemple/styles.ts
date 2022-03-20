import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: ${normalizePx(25)};
  justify-content: flex-start;
  align-items: center;
`;
