import {RFValue} from 'react-native-responsive-fontsize';

// funcionalidade de porcentagem que concatena o pixel
export const normalizePx = (px: number) => {
    return `${RFValue(px)}px`;
};
