import React from 'react';
import {Cards, Container, CardButton, TextCard} from './styles';

export function Card() {
  return (
    <Container>
      <CardButton colors="card_svg">
        <TextCard>oii</TextCard>
      </CardButton>
      <CardButton colors="card_modal">
        <TextCard>oii</TextCard>
      </CardButton>
      <CardButton colors="card_tabs">
        <TextCard>oii</TextCard>
      </CardButton>
      <CardButton colors="card_flat">
        <TextCard>oii</TextCard>
      </CardButton>
    </Container>
  );
}
