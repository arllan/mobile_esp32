import Toast from 'react-native-toast-message';

/**
 * Parametrizacao de mensagens geradas do aplicativo ao usuario
 * @Parametros fixos mas no futuro pode adicionar passagem de parametros pelo aplicativo
 ***/

export function ToastMessage() {
  return Toast.show({
    type: 'error',
    text1: 'Erro',
    text2: 'Erro, verifique os dados digitados e tente novamente',
    visibilityTime: 3000,
  });
}

export function ToastMessageDescription(
  title: string,
  subtitle: string,
  time?: number,
) {
  return Toast.show({
    type: 'error',
    text1: title,
    text2: subtitle,
    visibilityTime: time ? time : 3000,
  });
}
