import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${normalizePx(18)};
  font-weight: bold;
`;

export const TextToogle = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${normalizePx(16)};
  font-weight: 500;
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

export const TextCard = styled.Text`
  color: ${({theme}) => theme.colors.backgroundPrimary};
  font-size: ${normalizePx(18)};
  font-weight: normal;
  text-align: justify;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${normalizePx(18)};
  font-weight: bold;
  margin-bottom: 5px;
  text-align: justify;
`;

export const CardText = styled.View`
  width: 90%;
  /* min-height: ${normalizePx(250)}; */
  margin-top: 30px;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${normalizePx(10)};
  padding: 10px 10px;
  border-color: ${({theme}) => theme.colors.shape};
  /* box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2); */

  /* border: 1px solid ${({theme}) => theme.colors.backgroundPrimary}; */
  /* border-radius: 16px; */
`;

export const Row = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const Line = styled.View`
  width: 100%;
  height: ${normalizePx(50)};
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: ${normalizePx(50)};
  border-color: #000;
  border-width: 1px;
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
  size: 30,
  color: theme.colors.background,
})``;
