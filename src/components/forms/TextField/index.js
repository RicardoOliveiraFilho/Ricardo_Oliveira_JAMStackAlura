import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../../theme/utils/propToStyle';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 20px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.background.primary.color};
  outline: 0;

  ${propToStyle('height')}
  ${propToStyle('resize')}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'inputText',
};

export default function TextField({
  name,
  tag,
  onChange,
  onBlur,
  value,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        as={tag}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  onBlur: null,
};
