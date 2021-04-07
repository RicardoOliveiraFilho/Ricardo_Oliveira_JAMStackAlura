import React from 'react';

import MenuWrapper from './styles/MenuWrapper';
import Text from '../../foundation/Text';

export default function Menu() {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Projetos',
      url: '/projetos',
    },
    {
      texto: 'Contato',
      url: '/contato',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Text variant="logoXS" tag="h1">
          Ricardo Oliveira
        </Text>
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide>
        {links.map(link => {
          return (
            <li key={link.url}>
              <Text variant="paragraph3" tag="a" href={link.url}>
                {link.texto}
              </Text>
            </li>
          );
        })}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
