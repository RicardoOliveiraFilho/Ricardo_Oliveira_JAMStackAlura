import React from 'react';

import Box from '../src/components/foundation/layout/Box';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Grid from '../src/components/foundation/layout/Grid';
import Button from '../src/components/commons/Button';
import ContactCard from '../src/components/commons/ContactCard';

import contactInfos from '../src/data/contact-infos';

export default function Contato() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Menu />

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '60px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{
              xs: 12,
              md: 12,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            {contactInfos.map(contactInfo => {
              return (
                <ContactCard contactInfo={contactInfo} key={contactInfo.key} />
              );
            })}

            <Button ghost variant="primary.main" marginTop="64px">
              Contacte-me!
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
