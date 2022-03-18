import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../global/styles/theme';

interface PropsNav {
  marginPlatform?: 'ios' | 'android' | 'windows' | 'macos' | 'web';
}

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

export const IconsGrid = styled(Icon).attrs({
  name: 'grid-outline',
  size: 30,
  color: theme.colors.background,
})``;

export const IconChevron = styled(Icon).attrs({
  name: 'chevron-back-sharp',
  size: 30,
  color: theme.colors.background,
})``;

export const NavPlataforma = styled.View<PropsNav>`
  width: 100%;
  margin-top: ${({marginPlatform}) =>
    marginPlatform === 'ios' ? normalizePx(1) : normalizePx(30)};
`;
