import React from 'react';

import FooterIconsWrapper from './styles/FooterIconsWrapper';

export default function FooterIcons() {
  return (
    <FooterIconsWrapper>
      <FooterIconsWrapper.IconArea>
        <img src="/images/icons/linkedin.svg" width="50" height="50" alt="LinkedIn" />
      </FooterIconsWrapper.IconArea>
      <FooterIconsWrapper.IconArea>
        <img src="/images/icons/github.svg" width="50" height="50" alt="LinkedIn" />
      </FooterIconsWrapper.IconArea>
    </FooterIconsWrapper>
  );
}
