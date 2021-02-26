import React from 'react';

import HighlightCardWrapper from './styles/HighlightCardWrapper';
import Text from '../../foundation/Text';

export default function HighlightCard() {
  return (
    <HighlightCardWrapper>
      <HighlightCardWrapper.CardImage>
        <HighlightCardWrapper.Highlight>
          <Text
            tag="h5"
            variant="destaqueXS"
            margin="0px"
            padding="0px"
          >
            Destaque
          </Text>
        </HighlightCardWrapper.Highlight>
        <img src="https://placehold.it/289x177" alt="Imagem do Projeto" />
      </HighlightCardWrapper.CardImage>
      <HighlightCardWrapper.CardTitle>
        <Text
          tag="h6"
          variant="cardTitleXS"
          margin="0px"
          padding="0px"
        >
          Título Projeto
        </Text>
        <Text
          tag="p"
          variant="cardText"
          margin="0px"
          padding="0px"
          display={{
            xs: 'none',
            md: 'block',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec molestie rhoncus vestibulum. Aenean blandit velit.
        </Text>
      </HighlightCardWrapper.CardTitle>
    </HighlightCardWrapper>
  );
}
