import React from 'react';
import PropTypes from 'prop-types';

import TextBase from './styles/TextBase';
import Link from '../../commons/Link';

export default function Text({
  tag, variant, children, href, ...props
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant}
        {...props}
      >
        {children}
      </TextBase>
    );
  }

  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'cardText',
  children: null,
  href: '',
};
