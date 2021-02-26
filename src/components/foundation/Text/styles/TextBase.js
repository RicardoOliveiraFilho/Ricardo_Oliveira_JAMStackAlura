import styled from 'styled-components';

import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';
import propToStyle from '../../../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${({ variant }) => textStyleVariantsMap[variant]}

  ${propToStyle('margin')}
  ${propToStyle('padding')}
  ${propToStyle('display')}
`;

export default TextBase;
