import React, { useState } from 'react';

import ProjectsAreaWrapper from './styles/ProjectsAreaWrapper';
import SectionTitle from '../SectionTitle';
import Card from '../Card';
import HighlightCard from '../HighlightCard';
import Text from '../../foundation/Text';
import Button from '../Button';
import Modal from '../Modal';
import FormMensagem from '../../patterns/FormMensagem';

export default function ProjectsArea() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Button
        circle
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        +
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {(propsDoModal) => (
          <FormMensagem propsDoModal={propsDoModal} />
        )}
      </Modal>
    </ProjectsAreaWrapper>
  );
}
