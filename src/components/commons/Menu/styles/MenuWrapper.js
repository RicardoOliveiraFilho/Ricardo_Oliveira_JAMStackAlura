import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import TextStyleVariantsMap from '../../../../theme/textStyleVariantsMap';

const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  border-top: 3px solid ${({ theme }) => theme.colors.borders.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.borders.primary};

  ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      flex-direction: column;
    `,
    lg: css`
      justify-content: space-between;
      flex-direction: row;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;

  h1 {
    margin: 0;
    ${breakpointsMedia({
      sm: css`
        ${TextStyleVariantsMap.logoSM}
      `,
      md: css`
        ${TextStyleVariantsMap.logo}
      `,
    })}
  }

  margin-left: 10px;
`;

MenuWrapper.RightSide = styled.div`
  padding: 12px;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;

  a {
    ${breakpointsMedia({
      sm: css`
        ${TextStyleVariantsMap.paragraph2}
      `,
      md: css`
        ${TextStyleVariantsMap.menuItem}
        margin-left: 20px;
      `,
      lg: css`
        margin-top: 9px;
      `,
    })}

    text-align: center;
    display: block;
    text-decoration: none;
    margin-left: 15px;
    color: ${({ theme }) => theme.colors.links.primary};

    &:hover,
    &:focus {
      text-decoration: underline;
      opacity: 0.5;
    }
  }
`;

export default MenuWrapper;
