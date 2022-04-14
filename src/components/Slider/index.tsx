import React from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import theme from '../../global/styles/theme';
import {Card} from '../Card';
import {useSlider} from '../../hook/useSlider';
import {PlatformNumber} from '../../helpers/PlatformPixel';
import {Content, ButtonNext, Text, ButtonDone} from './styles';

export function Slider() {
  const {
    dataSlider,
    getCurrentIndex,
    nextPosition,
    scrollRef,
    index,
    setIntro,
  } = useSlider();

  return (
    <>
      <SwiperFlatList
        index={0}
        disableGesture={false}
        style={{backgroundColor: theme.colors.orange}}
        showPagination={true}
        paginationStyle={{marginBottom: PlatformNumber(42, 30)}}
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
