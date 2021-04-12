import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../../../../theme/textStyleVariantsMap';

const FormMessageWrapper = styled.form`
  ${breakpointsMedia({
    xs: css`
      p {
        ${textStyleVariantsMap.paragraph3}
      }
    `,
    sm: css`
      p {
        ${textStyleVariantsMap.paragraph1}
      }
    `,
    md: css`
      p {
        ${textStyleVariantsMap.paragraph5}
      }
    `,
    lg: css`
      p {
        ${textStyleVariantsMap.paragraph5}
      }
    `,
  })}
`;

export default FormMessageWrapper;
