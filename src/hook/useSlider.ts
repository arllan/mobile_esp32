import React, {useEffect, useRef, useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useProvider} from '../provider/provider';
import {dataSlider} from '../service/data/dataSlider';

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
