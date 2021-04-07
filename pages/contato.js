import React from 'react';
import styled, { css } from 'styled-components';

import breakpointsMedia from '../src/theme/utils/breakpointsMedia';
import TextStyleVariantsMap from '../src/theme/textStyleVariantsMap';

import Box from '../src/components/foundation/layout/Box';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Grid from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text';

const TextWrapper = styled.div`
  ${breakpointsMedia({
    md: css`
      h1 {
        ${TextStyleVariantsMap.logo}
      }
    `,
  })}
`;

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
            <TextWrapper>
              <Text
                variant="logoXS"
                tag="h1"
                color="primary.main"
                textAlign="center"
              >
                Contato
              </Text>
            </TextWrapper>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
