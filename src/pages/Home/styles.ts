import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${normalizePx(18)};
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: ${normalizePx(50)};
  border-radius: ${normalizePx(20)};
  background-color: ${({theme}) => theme.colors.attention};
  align-items: center;
  justify-content: center;
  margin-bottom: ${normalizePx(15)};
`;
