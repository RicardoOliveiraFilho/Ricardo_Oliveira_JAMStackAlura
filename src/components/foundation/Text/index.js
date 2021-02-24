import React from 'react';
import PropTypes from 'prop-types';

import TextBase from './styles/TextBase';

export default function Text({ tag, variant, children }) {
  return (
    <TextBase
      as={tag}
      variant={variant}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'cardText',
};
