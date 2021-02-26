import React from 'react';

import NavbarWrapper from './styles/NavbarWrapper';
import Text from '../../foundation/Text';

export default function Navbar() {
  return (
    <NavbarWrapper>
      <li>
        <Text
          tag="a"
          variant="navbarXS"
          margin="0px"
          padding="0px"
        >
          Sobre Mim
        </Text>
      </li>
      <li>
        <Text
          tag="a"
          variant="navbarXS"
          margin="0px"
          padding="0px"
        >
          Contato
        </Text>
      </li>
    </NavbarWrapper>
  );
}
