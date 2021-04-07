import React from 'react';

import FooterWrapper from './styles/FooterWrapper';
import Text from '../../foundation/Text';

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <Text tag="a" variant="paragraph3" href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </Text>
      <Text tag="p" variant="paragraph3">
        Orgulhosamente criado durante o{' '}
        <Text tag="a" variant="paragraph3" href="https://www.alura.com.br/">
          Bootcamp Alura JAM Stack
        </Text>
      </Text>
    </FooterWrapper>
  );
}
