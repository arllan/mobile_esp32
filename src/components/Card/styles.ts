import {normalizePx} from './../../global/styles/mixins';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

interface IButtons {
  colors: keyof typeof theme.cardColors;
}

export const Cards = styled.View`
  width: 50%;
  min-height: ${normalizePx(150)};
  background-color: ${({theme}) => theme.colors.attention};
`;

export const CardButton = styled.TouchableOpacity<IButtons>`
  align-items: center;
  justify-content: center;
  width: 50%;
  min-height: ${normalizePx(150)};
  background-color: ${({theme, colors}) =>
    colors ? theme.cardColors[colors] : theme.colors.attention};
`;

export const TextCard = styled.Text`
  font-weight: bold;
  font-size: ${normalizePx(18)};
  color: ${({theme}) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
`;
