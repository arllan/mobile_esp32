import React from 'react';
import {Container, Row, Title, SubTitle, Image} from './styles';

interface IPropsSlider {
  image: any;
  title: string;
  subTitle: string;
}

export function Slider({image, title, subTitle}: IPropsSlider) {
  return (
    <Container>
      <Row>
        <Image source={image} />
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Row>
    </Container>
  );
}
