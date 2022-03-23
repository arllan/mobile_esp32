import {Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

/**
 * @param ios valor que vai ser apenas aplicado no device quando for um IOS
 * @param android valor que vai ser aplicado apenas no device quando for Android
 */

export function PlatformNumber(ios: number, android: number) {
  if (Platform.OS === 'ios') {
    return RFPercentage(ios);
  } else if (Platform.OS === 'android') {
    return RFPercentage(android);
  }
}

export function PlatformPixel(ios: number, android: number) {
  if (Platform.OS === 'ios') {
    return RFPercentage(ios) + 'px';
  } else if (Platform.OS === 'android') {
    return RFPercentage(android) + 'px';
  }
}
