import React, {useState, useRef, useEffect} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {RFValue} from 'react-native-responsive-fontsize';
import {Home} from '../Home';
import {Slider} from '../../components/Slider';
import {Container, Content, ButtonNext, Text, ButtonDone} from './styles';

export function Intro() {
  const [showRealApp, setShowRealApp] = useState(false);
  const scrollRef = React.useRef<SwiperFlatList>(null);

  const getCurrentIndex = () => {
    const currentIndex = scrollRef.current?.getCurrentIndex();
  };

  const goToSecondIndex = (value: number) => {
    scrollRef.current?.scrollToIndex({index: value});
  };

  const handleIntro = () => {
    setShowRealApp(true);
  };

  useEffect(() => {
    // inicia no index 0
    goToSecondIndex(0);
  }, []);

  return (
    <Container>
      {showRealApp ? (
        <Home />
      ) : (
        <>
          <SwiperFlatList
            index={2}
            disableGesture={false}
            showPagination={true}
            ref={scrollRef}
            paginationStyle={{marginBottom: RFValue(270)}}
            paginationDefaultColor="#C4C4C4"
            onChangeIndex={() => {
              getCurrentIndex();
            }}>
            <Slider
              image={require('../../assets/1.png')}
              title="Vamos lá"
              subTitle="Seja bem ao app, venha ajudar essa iniciativa opensource de integrar
          soluções IOT"
            />
            <Slider
              image={require('../../assets/2.png')}
              title="Vamos praticar"
              subTitle="Você vai encontrar no app exemplos praticos de como manipular dados com esp32"
            />
            <Slider
              image={require('../../assets/3.png')}
              title="Agora sim, ufa"
              subTitle="Agora vamos lá iniciar os experimentos bem praticos e simples de testar "
            />
          </SwiperFlatList>
          <Content>
            <ButtonNext>
              <Text>Próximo</Text>
            </ButtonNext>
            <ButtonDone>
              <Text>Pular</Text>
            </ButtonDone>
          </Content>
        </>
      )}
    </Container>
  );
}
