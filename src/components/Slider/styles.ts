import {normalizePx} from './../../global/styles/mixins';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width + 'px'};
  align-items: center;
  background-color: ${({theme}) => theme.colors.orange};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.background};
  margin: ${normalizePx(15)};
  font-size: ${normalizePx(18)};
  font-weight: 600;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-size: ${normalizePx(15)};
  text-align: center;
  font-weight: 500;
`;

export const Content = styled.View`
  bottom: ${normalizePx(50)};
  position: absolute;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const ButtonNext = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 70%;
  align-items: center;
  justify-content: center;
  height: ${normalizePx(50)};
  background-color: ${({theme}) => theme.colors.backgroundYellow};
  border-radius: ${normalizePx(15)};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-size: ${normalizePx(20)};
  font-weight: 600;
`;

export const ButtonDone = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-top: ${normalizePx(15)};
`;

export const Row = styled.View`
  margin-top: ${normalizePx(80)};
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 70%;
  height: ${normalizePx(250)};
`;
