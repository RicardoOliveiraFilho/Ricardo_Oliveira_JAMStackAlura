import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import TextStyleVariantsMap from '../../../theme/textStyleVariantsMap';
import propToStyle from '../../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${props => TextStyleVariantsMap[props.variant]};
  color: ${props => get(props.theme, `colors.${props.color}.color`)};

  ${propToStyle('textAlign')}
`;

export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase as={tag} variant={variant} {...props}>
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
  variant: 'paragraph1',
};
