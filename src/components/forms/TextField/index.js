import React from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './styles/InputWrapper';

export default function TextField({
  placeholder,
  name,
  tag,
  onChange,
  value,
  ...props
}) {
  return (
    <InputWrapper>
      <InputWrapper.Input
        type="text"
        as={tag}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
