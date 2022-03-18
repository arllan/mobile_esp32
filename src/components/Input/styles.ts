import styled from 'styled-components/native';
import {normalizePx} from '../../global/styles/mixins';
import {TextInputProps, TextInput} from 'react-native';
interface IPropsInput extends TextInputProps {
  placeholder?: string;
}
export const Container = styled.View`
  width: 88%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${normalizePx(-25)};
  margin-right: 6%;
  margin-left: 6%;
  border-radius: ${normalizePx(25)};
  background-color: ${({theme}) => theme.colors.backgroundThird};
`;

export const InputElement = styled(TextInput)<TextInputProps>`
  width: 85%;
  height: ${normalizePx(50)};
  background-color: ${({theme}) => theme.colors.backgroundThird};
  font-size: ${normalizePx(15)};
  border-top-left-radius: ${normalizePx(25)};
  border-bottom-left-radius: ${normalizePx(25)};
  padding-left: 20px;
`;

export const SearchButton = styled.TouchableOpacity`
  margin-right: ${normalizePx(10)};
`;
