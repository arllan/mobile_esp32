declare module '*.svg' {
    import React from 'react';
    import {SvgProps} from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}

// Nesse trecho de código foi criado para fazer tipagem de arquivos .svg para assim o vc code nao acusar erro
