export interface IDataList {
  image: any;
  title: string;
  subTitle: string;
}

export const dataSlider: IDataList[] = [
  {
    image: require('../../assets/1.png'),
    title: 'Vamos lá',
    subTitle:
      'Seja bem ao app, venha ajudar essa iniciativa opensource de integrar soluções IOT',
  },
  {
    image: require('../../assets/2.png'),
    title: 'Vamos praticar',
    subTitle:
      'Você vai encontrar no app exemplos praticos de como manipular dados com esp32',
  },
  {
    image: require('../../assets/3.png'),
    title: 'Agora sim, ufa',
    subTitle:
      'Agora vamos lá iniciar os experimentos bem praticos e simples de testar',
  },
];
