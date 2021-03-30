import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';
import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const SectionTitleWrapper = styled.div`
  ${breakpointsMedia({
    md: css`
      h3 {
        ${textStyleVariantsMap.sectionTitleMD}
      }
    `,
  })}

  ${propToStyle('alignSelf')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
`;

export default SectionTitleWrapper;
