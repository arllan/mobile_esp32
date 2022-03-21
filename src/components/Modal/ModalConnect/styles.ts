import {normalizePx} from '../../../global/styles/mixins';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../../global/styles/theme';

type PropsButton = {
  type: 'connect' | 'close';
};

export const ModalConatiner = styled(Modal)``;

export const Container = styled.View`
  flex: 1;
`;

export const BodyModal = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  min-height: ${normalizePx(50)};
  padding: 29px 24px;
  border-radius: ${normalizePx(10)};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 48%;
  height: ${normalizePx(45)};
  align-items: center;
  justify-content: center;
  border-radius: ${normalizePx(10)};
  background-color: ${({theme}) => theme.colors.successSecundary};
`;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${normalizePx(18)};
  font-weight: bold;
`;

export const TextButtonReturn = styled.Text`
  color: ${({theme}) => theme.colors.backgroundPrimary};
  font-size: ${normalizePx(18)};
  font-weight: bold;
`;

export const Input = styled.TextInput`
  width: 100%;
  min-height: 50px;
  font-size: ${normalizePx(17)};
  padding-left: ${normalizePx(5)};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.backgroundPrimary};
  margin-bottom: ${normalizePx(10)};
  margin-top: ${normalizePx(10)};
  border-radius: ${normalizePx(10)};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${normalizePx(19)};
  font-weight: bold;
  text-align: justify;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.backgroundPrimary};
  font-size: ${normalizePx(14)};
  font-weight: normal;
  margin-top: ${normalizePx(3)};
`;

export const TitleInput = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${normalizePx(14)};
  margin-top: ${normalizePx(15)};
  font-weight: 500;
`;

export const AreaButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  width: 48%;
  height: ${normalizePx(45)};
`;

export const Icons = styled(Icon).attrs({
  name: 'chevron-back-sharp',
  size: 30,
  color: theme.colors.backgroundPrimary,
})``;
