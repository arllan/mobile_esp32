import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../global/styles/theme';
import {TouchableOpacityProps, Platform} from 'react-native';

export const TextToogle = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${normalizePx(13)};
  font-weight: 500;
`;

export const TextOff = styled.Text`
  color: ${({theme}) => theme.colors.backgroundPrimary};
  font-size: ${normalizePx(13)};
  font-weight: 500;
`;

export const TextOn = styled.Text`
  color: ${({theme}) => theme.colors.successSecundary};
  font-size: ${normalizePx(13)};
  font-weight: 500;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Line = styled.View`
  width: ${Platform.OS == 'ios' ? 90 : 85}%;
  padding-left: ${normalizePx(5)};
  padding-right: ${normalizePx(10)};
  height: ${normalizePx(50)};
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: ${normalizePx(8)};
`;

export const LineVertical = styled.View`
  height: ${normalizePx(25)};
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
  size: 28,
  color: theme.colors.black,
})``;

export const Button = styled.TouchableOpacity<TouchableOpacityProps>``;

export const ContainerText = styled.View`
  width: ${normalizePx(80)};
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: ${normalizePx(3)};
`;
