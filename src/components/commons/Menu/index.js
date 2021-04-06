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
      texto: 'Sobre mim',
      url: '/sobre-mim',
    },
    {
      texto: 'Contato',
      url: '/contato',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Text variant="logo" tag="h1">
          Ricardo Oliveira
        </Text>
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide>
        {links.map(link => {
          return (
            <li key={link.url}>
              <Text variant="menuItem" tag="a" href={link.url}>
                {link.texto}
              </Text>
            </li>
          );
        })}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
