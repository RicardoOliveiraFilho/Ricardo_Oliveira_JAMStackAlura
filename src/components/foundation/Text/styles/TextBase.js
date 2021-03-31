import styled from 'styled-components';

import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';
import propToStyle from '../../../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${({ variant }) => textStyleVariantsMap[variant]}

  ${propToStyle('margin')}
  ${propToStyle('padding')}
  ${propToStyle('display')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('position')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginLeft')}
  ${propToStyle('color')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('paddingRight')}
  ${propToStyle('textAlign')}
  ${propToStyle('alignSelf')}
`;

export default TextBase;
