import React from 'react';

import SectionTitleWrapper from './styles/SectionTitleWrapper';
import Text from '../../foundation/Text';

export default function SectionTitle() {
  return (
    <SectionTitleWrapper>
      <Text
        tag="h3"
        variant="sectionTitleXS"
        margin="0px"
        padding="0px"
      >
        Meus Projetos
      </Text>
    </SectionTitleWrapper>
  );
}
