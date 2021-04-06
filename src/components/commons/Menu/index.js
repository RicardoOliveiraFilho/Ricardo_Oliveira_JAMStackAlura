import React from 'react';

import MenuWrapper from './styles/MenuWrapper';

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
      <MenuWrapper.LeftSide>Ricardo Oliveira</MenuWrapper.LeftSide>
      <MenuWrapper.RightSide>
        {links.map(link => {
          return (
            <li key={link.url}>
              <a href={link.url}>{link.texto}</a>
            </li>
          );
        })}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
