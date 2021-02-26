import React from 'react';

import LogoWrapper from './styles/LogoWrapper';
import Text from '../../foundation/Text';

export default function Logo() {
  return (
    <LogoWrapper>
      <Text
        tag="h5"
        variant="logoXS"
        margin="0px"
        padding="0px"
      >
        {'<RO/>'}
      </Text>
    </LogoWrapper>
  );
}
