import React from 'react';

import CardWrapper from './styles/CardWrapper';
import Text from '../../foundation/Text';

export default function Card() {
  return (
    <CardWrapper>
      <CardWrapper.CardImage>
        <img src="https://placehold.it/289x177" alt="Imagem do Projeto" />
      </CardWrapper.CardImage>
      <CardWrapper.CardTitle>
        <Text
          tag="h6"
          variant="cardTitleXS"
          margin="0px"
          padding="0px"
        >
          Título Projeto
        </Text>
      </CardWrapper.CardTitle>
    </CardWrapper>
  );
}
