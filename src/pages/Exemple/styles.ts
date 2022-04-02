import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: ${normalizePx(25)};
  justify-content: flex-start;
  align-items: center;
`;

export const ContentScroll = styled.ScrollView`
  width: 100%;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 90%;
  height: ${normalizePx(45)};
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.orange};
  border-radius: ${normalizePx(10)};
  margin-bottom: ${normalizePx(22)};
`;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-weight: bold;
  font-size: ${normalizePx(15)};
`;
