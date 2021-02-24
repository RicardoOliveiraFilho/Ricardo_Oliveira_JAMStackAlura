import styled from 'styled-components';

import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const TextBase = styled.span`
  ${({ variant }) => textStyleVariantsMap[variant]}
`;

export default TextBase;
