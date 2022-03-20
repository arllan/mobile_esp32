import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../global/styles/theme';

export const TextToogle = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${normalizePx(16)};
  font-weight: 500;
`;

export const TextOff = styled.Text`
  color: ${({theme}) => theme.colors.backgroundPrimary};
  margin-right: ${normalizePx(15)};
  font-size: ${normalizePx(16)};
  font-weight: 500;
`;

export const TextOn = styled.Text`
  color: ${({theme}) => theme.colors.successSecundary};
  margin-right: ${normalizePx(15)};
  font-size: ${normalizePx(16)};
  font-weight: 500;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Line = styled.View`
  width: 90%;
  height: ${normalizePx(50)};
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const LineVertical = styled.View`
  height: ${normalizePx(25)};
  margin-right: ${normalizePx(10)};
  border-left-width: ${normalizePx(2)};
  border-left-color: ${({theme}) => theme.colors.backgroundPrimary};
`;

export const Card = styled.View`
  width: 90%;
  height: ${normalizePx(140)};
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.success};
`;

export const LineCard = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 2px;
  padding-left: 2px;
`;

export const TextArea = styled.TextInput`
  width: 90%;
  min-height: ${normalizePx(50)};
  border-width: 2px;
  border-radius: ${normalizePx(10)};
  border-color: ${({theme}) => theme.colors.attention};
`;

export const Icons = styled(Icon).attrs({
  name: 'add',
  size: 35,
  color: theme.colors.black,
})``;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
