import React from 'react';
import styled, { css } from 'styled-components';

import Box from '../src/components/foundation/layout/Box';
import Grid from '../src/components/foundation/layout/Grid';
import Header from '../src/components/commons/Header';
import Text from '../src/components/foundation/Text';
import Image from '../src/components/commons/Image';
import Footer from '../src/components/commons/Footer';

import breakpointsMedia from '../src/theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../src/theme/utils/textStyleVariantsMap';

const AreaText404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: center;
  border: 1px solid ${({ theme }) => theme.colors.background.primary.color};
  background-color: ${({ theme }) => theme.colors.primary.main.contrastColor};
  width: 282px;
  height: 222px;

  ${breakpointsMedia({
    md: css`
      width: 415px;
      height: 254px;

      h1 {
        ${textStyleVariantsMap.titlePage404MD}
      }

      h3 {
        ${textStyleVariantsMap.textPage404MD}
      }
    `,
  })}
`;

export default function Page404() {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      padding="0px"
      overflowX="hidden"
    >
      <Header />
      <Grid.Container
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="0px"
      >
        <Box
          backgroundImage="url(/images/mandala.png)"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          padding="20px"
          width={{
            md: '100%',
          }}
          height={{
            md: '100%',
          }}
          marginTop="25px"
        >
          <Grid.Row
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid.Col
              flex="1"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              offset={{
                xs: 0,
                md: 0,
              }}
              value={{
                xs: 1,
                md: 5,
              }}
            >
              <Image
                src="/images/planta.png"
                alt="Planta"
                width={{
                  xs: 381,
                  md: 381,
                }}
                height={{
                  xs: 571,
                  md: 571,
                }}
                zIndex="-10"
                opacity=".5"
                transform="scaleX(-1)"
                marginTop={{
                  xs: '90px',
                  md: '65px',
                }}
                marginLeft={{
                  xs: '0px',
                  md: '40px',
                }}
              />
            </Grid.Col>
            <Grid.Col
              flex="1"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              value={{
                md: 2,
              }}
            >
              <AreaText404>
                <Text
                  tag="h1"
                  variant="titlePage404XS"
                  margin="0px"
                >
                  404
                </Text>
                <Text
                  tag="h3"
                  variant="textPage404XS"
                  margin="0px"
                >
                  Página não encontrada
                </Text>
              </AreaText404>
            </Grid.Col>
            <Grid.Col
              flex="1"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              value={{
                xs: 1,
                md: 5,
              }}
            >
              <Image
                src="/images/planta.png"
                alt="Planta"
                width={{
                  xs: 381,
                  md: 381,
                }}
                height={{
                  xs: 571,
                  md: 571,
                }}
                zIndex="-10"
                opacity=".5"
                transform="scaleX(1)"
                marginTop={{
                  xs: '90px',
                  md: '65px',
                }}
                marginRight={{
                  md: '40px',
                }}
              />
            </Grid.Col>
          </Grid.Row>
        </Box>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
