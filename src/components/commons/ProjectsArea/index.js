import React from 'react';

import ProjectsAreaWrapper from './styles/ProjectsAreaWrapper';
import SectionTitle from '../SectionTitle';
import Card from '../Card';
import HighlightCard from '../HighlightCard';

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
    </ProjectsAreaWrapper>
  );
}
