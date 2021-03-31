import React from 'react';
import styled, { css } from 'styled-components';

import Box from '../src/components/foundation/layout/Box';
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
  margin-top: 217px;
  margin-bottom: 273px;
  width: 282px;
  height: 222px;

  ${breakpointsMedia({
    md: css`
      margin-top: 290px;
      margin-bottom: 314px;
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
    >
      <Header />
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
        position="absolute"
        zIndex="-10"
        opacity=".5"
        transform="rotate(490deg) matrix(0.64, 0.77, 0.77, -0.64, 0, 0)"
        marginTop={{
          xs: '125px',
          md: '230px',
        }}
        marginLeft={{
          xs: '-180px',
          md: '235px',
        }}
      />
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
        position="absolute"
        zIndex="-10"
        opacity=".5"
        transform="rotate(590deg) rotateY(180deg) matrix(0.64, 0.77, 0.77, -0.64, 0, 0)"
        marginTop={{
          xs: '215px',
          md: '230px',
        }}
        marginLeft={{
          xs: '240px',
          md: '627px',
        }}
      />
      <Footer />
    </Box>
  );
}
