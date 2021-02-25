import React from 'react';

import CoverWrapper from './styles/CoverWrapper';
import Text from '../../foundation/Text';

export default function Cover() {
  return (
    <CoverWrapper>
      <CoverWrapper.Sides
        alignSelf="flex-start"
        transform={{
          xs: 'rotate(375deg) matrix(0.64, 0.77, 0.77, -0.64, 0, 0)',
          md: 'rotate(360deg) matrix(0.64, 0.77, 0.77, -0.64, 0, 0)',
        }}
      >
        <img src="/images/planta.png" width="215" height="322" alt="" />
      </CoverWrapper.Sides>
      <CoverWrapper.Middle>
        <Text
          tag="h2"
          variant="titleXS"
          margin="0px"
          padding="0px"
        >
          Ricardo Oliveira
        </Text>
        <Text
          tag="h4"
          variant="subTitle"
          margin="0px"
          padding="0px"
        >
          Portfólio
        </Text>
      </CoverWrapper.Middle>
      <CoverWrapper.Sides
        alignSelf="flex-end"
      >
        <img src="/images/planta.png" width="215" height="322" alt="" />
      </CoverWrapper.Sides>
    </CoverWrapper>
  );
}
