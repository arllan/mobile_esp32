import React from 'react';
import {useSlider} from '../../hook/useSlider';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {RFValue} from 'react-native-responsive-fontsize';
import {Card} from '../Card';
import {Content, ButtonNext, Text, ButtonDone} from './styles';

export function Slider() {
  const {
    dataSlider,
    getCurrentIndex,
    nextPosition,
    scrollRef,
    setShowRealApp,
    showRealApp,
    index,
    setIntro,
    intro,
  } = useSlider();

  return (
    <>
      <SwiperFlatList
        index={0}
        disableGesture={false}
        showPagination={true}
        paginationStyle={{marginBottom: RFValue(270)}}
        paginationDefaultColor="#C4C4C4"
        ref={scrollRef}
        data={dataSlider}
        onChangeIndex={() => {
          getCurrentIndex();
        }}
        renderItem={({item}) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      />
      <Content>
        {index !== 2 && (
          <ButtonNext onPress={nextPosition}>
            <Text>Próximo</Text>
          </ButtonNext>
        )}
        <ButtonDone onPress={() => setIntro(true)}>
          <Text>Pular</Text>
        </ButtonDone>
      </Content>
    </>
  );
}
