import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 83px;
  height: 40px;
  background-color:  ${({ theme }) => theme.colors.background.primary.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastColor};

  ${breakpointsMedia({
    md: css`
      width: 136px;
      height: 67px;

      h5 {
        ${textStyleVariantsMap.logoMD}
      }
    `,
  })}
`;

export default LogoWrapper;
