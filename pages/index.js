import React from 'react';

import Box from '../src/components/foundation/layout/Box';
import Cover from '../src/components/commons/Cover';
import Header from '../src/components/commons/Header';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cover />
      <Header />
    </Box>
  );
}
