import React, {useEffect, useRef, useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useProvider} from '../provider/provider';

export function useSlider() {
  const [index, setIndex] = useState(0);
  const [showRealApp, setShowRealApp] = useState(false);
  const scrollRef = useRef<SwiperFlatList>(null);

  const {setIntro, intro} = useProvider();

  const goToSecondIndex = (value: number) => {
    scrollRef.current?.scrollToIndex({index: value});
  };

  const getCurrentIndex = () => {
    const currentIndex = scrollRef.current?.getCurrentIndex();
    setIndex(Number(currentIndex));
  };

  function nextPosition() {
    if (index <= 2) {
      goToSecondIndex(index + 1);
    }
  }

  useEffect(() => {
    goToSecondIndex(0);
  }, []);

  const dataSlider = [
    {
      image: require('../assets/1.png'),
      title: 'Vamos lá',
      subTitle:
        'Seja bem ao app, venha ajudar essa iniciativa opensource de integrar soluções IOT',
    },
    {
      image: require('../assets/2.png'),
      title: 'Vamos praticar',
      subTitle:
        'Você vai encontrar no app exemplos praticos de como manipular dados com esp32',
    },
    {
      image: require('../assets/3.png'),
      title: 'Agora sim, ufa',
      subTitle:
        'Agora vamos lá iniciar os experimentos bem praticos e simples de testar',
    },
  ];

  return {
    scrollRef,
    dataSlider,
    getCurrentIndex,
    nextPosition,
    setShowRealApp,
    showRealApp,
    index,
    setIntro,
    intro,
  };
}
