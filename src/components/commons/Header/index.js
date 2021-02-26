import React from 'react';

import HeaderWrapper from './styles/HeaderWrapper';
import Logo from '../Logo';
import Navbar from '../Navbar';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.Left>
        <Logo />
      </HeaderWrapper.Left>
      <HeaderWrapper.Right>
        <Navbar />
      </HeaderWrapper.Right>
    </HeaderWrapper>
  );
}
