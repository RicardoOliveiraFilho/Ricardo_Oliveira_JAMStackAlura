import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background.secundary.color};
  height: 68px;
  margin-top: ${({ theme }) => theme.spaceValues.xs}px;

  ${breakpointsMedia({
    md: css`
      margin-top: ${({ theme }) => 2 * theme.spaceValues.xs}px;
    `,
  })}
`;

export default FooterWrapper;
