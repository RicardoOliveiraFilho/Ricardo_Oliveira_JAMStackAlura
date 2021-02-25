import styled from 'styled-components';

import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';
import propToStyle from '../../../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${({ variant }) => textStyleVariantsMap[variant]}

  ${propToStyle('margin')}
  ${propToStyle('padding')}
`;

export default TextBase;
