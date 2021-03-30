import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 2px solid ${({ theme }) => theme.colors.background.primary.color};
  background-color: ${({ theme }) => theme.colors.background.secundary.color};
  height: 40px;

  ${breakpointsMedia({
    md: css`
      height: 67px;
    `,
  })}
`;

HeaderWrapper.Left = styled.div`
  padding-left: 15px;

  ${breakpointsMedia({
    md: css`
      padding-left: 100px;
    `,
  })}
`;

HeaderWrapper.Right = styled.div`

`;

export default HeaderWrapper;
