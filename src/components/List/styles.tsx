import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../global/styles/theme';

interface PropsColorsCard {
  color: 'blue' | 'yellow' | 'orange' | 'green' | 'brown' | 'purple';
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View<PropsColorsCard>`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${normalizePx(75)};
  background-color: ${({theme, color}) =>
    color ? theme.colorList[color] : theme.colorList.blue};
  border-radius: ${normalizePx(20)};
  margin-top: ${normalizePx(20)};
`;

export const Text = styled.Text`
  width: 80%;
  color: ${({theme}) => theme.colors.background};
  font-size: ${normalizePx(18)};
  margin-left: ${normalizePx(10)};
`;

export const ContainerButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<PropsColorsCard>`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${normalizePx(75)};
  background-color: ${({theme, color}) =>
    color ? theme.colorList[color] : theme.colorList.blue};
  border-radius: ${normalizePx(20)};
  margin-top: ${normalizePx(20)};
`;

export const Icons = styled(Icon).attrs({
  name: 'add',
  size: 30,
  color: theme.colors.background,
})``;
