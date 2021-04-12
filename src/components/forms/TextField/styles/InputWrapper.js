import styled from 'styled-components';
import Text from '../../../foundation/Text';

import propToStyle from '../../../../theme/utils/propToStyle';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

InputWrapper.Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${propToStyle('height')}
  ${propToStyle('resize')}
`;

InputWrapper.Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default InputWrapper;
