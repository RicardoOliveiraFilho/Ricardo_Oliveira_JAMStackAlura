import React from 'react';

import Box from '../src/components/foundation/layout/Box';
import Header from '../src/components/commons/Header';
import SectionTitle from '../src/components/commons/SectionTitle';
import Footer from '../src/components/commons/Footer';

export default function SobreMim() {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <SectionTitle
        alignSelf="center"
      >
        Sobre Mim
      </SectionTitle>
      <Footer />
    </Box>
  );
}
