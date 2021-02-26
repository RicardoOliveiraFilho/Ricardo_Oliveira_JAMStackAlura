import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
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
`;

export default SectionTitleWrapper;
