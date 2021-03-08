import React from 'react';

import ProjectsAreaWrapper from './styles/ProjectsAreaWrapper';
import SectionTitle from '../SectionTitle';
import Card from '../Card';
import HighlightCard from '../HighlightCard';
import Text from '../../foundation/Text';
import Button from '../Button';

export default function ProjectsArea() {
  return (
    <ProjectsAreaWrapper>
      <SectionTitle />
      <ProjectsAreaWrapper.Projects>
        <Card />
        <Card />
        <Card />
        <HighlightCard />
      </ProjectsAreaWrapper.Projects>

      <Text
        tag="h3"
        variant="textInvokeModalXS"
        margin="0px"
        padding="0px"
      >
        Entre em Contato
      </Text>
      <Button circle>
        +
      </Button>
    </ProjectsAreaWrapper>
  );
}
