import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';
import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const SectionTitleWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;

  ${breakpointsMedia({
    md: css`
      margin-top: 60px;
      margin-bottom: 76px;

      h3 {
        ${textStyleVariantsMap.sectionTitleMD}
      }
    `,
  })}

  ${propToStyle('alignSelf')}
`;

export default SectionTitleWrapper;
