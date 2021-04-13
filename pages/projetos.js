import React from 'react';
import styled, { css } from 'styled-components';

import breakpointsMedia from '../src/theme/utils/breakpointsMedia';
import TextStyleVariantsMap from '../src/theme/textStyleVariantsMap';

import Box from '../src/components/foundation/layout/Box';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Grid from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text';
import Slider from '../src/components/commons/Slider';

import sliderItens from '../src/data/slider-itens';

const TextWrapper = styled.div`
  margin: 0;
  padding: 0;

  ${breakpointsMedia({
    md: css`
      h1 {
        ${TextStyleVariantsMap.logo}
      }
    `,
  })}
`;

export default function Projetos() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Menu />

      <Grid.Container>
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
                margin="0px"
                padding="0px"
                marginLeft={{
                  sm: '-50px',
                  md: '60px',
                  lg: '10px',
                }}
              >
                Projetos
              </Text>
            </TextWrapper>

            <Slider itens={sliderItens} />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
