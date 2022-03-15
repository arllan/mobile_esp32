import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
