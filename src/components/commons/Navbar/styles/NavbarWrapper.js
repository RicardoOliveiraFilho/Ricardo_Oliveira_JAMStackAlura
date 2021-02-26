import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  margin: 0;
  list-style: none;

  a {
    text-decoration: none;
    margin-right: 75px;
  }

  ${breakpointsMedia({
    md: css`
      a {
        ${textStyleVariantsMap.navbarMD}
      }
    `,
  })}
`;

export default NavbarWrapper;
