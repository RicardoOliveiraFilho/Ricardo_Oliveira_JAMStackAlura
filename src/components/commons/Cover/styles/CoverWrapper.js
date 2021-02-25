import styled, { css } from 'styled-components';

import propToStyle from '../../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      flex-wrap: nowrap;
    `,
  })}
`;

CoverWrapper.Middle = styled.div`
  text-align: center;

  ${breakpointsMedia({
    md: css`
      h2 {
        ${textStyleVariantsMap.titleMD}
      }
    `,
  })}
`;

CoverWrapper.Sides = styled.div`
  width: 220px;
  height: 327px;

  ${propToStyle('alignSelf')}

  img {
    ${propToStyle('transform')}
  }

  ${breakpointsMedia({
    md: css`
      width: 315px;
      height: 585px;

      img {
        width: 310px;
        height: 580px;
      }
    `,
  })}
`;

export default CoverWrapper;
