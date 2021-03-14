import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const FormWrapper = styled.form`
  ${breakpointsMedia({
    md: css`
      h2 {
        ${textStyleVariantsMap.titleModalMD}
      }

      label {
        ${textStyleVariantsMap.labelModalMD}
      }
    `,
  })}
`;

export default FormWrapper;
