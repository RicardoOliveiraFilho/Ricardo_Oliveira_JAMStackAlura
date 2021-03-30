import React from 'react';
import PropTypes from 'prop-types';
import ImageNext from 'next/image';

import ImageWrapper from './styles/ImageWrapper';

export default function Image({
  src, alt, width, height, ...props
}) {
  return (
    <ImageWrapper
      width={width}
      height={height}
      {...props}
    >
      <ImageNext
        src={src}
        alt={alt}
        width={width.xs}
        height={height.xs}
      />
    </ImageWrapper>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.shape({
    xs: PropTypes.number,
    md: PropTypes.number,
  }).isRequired,
  height: PropTypes.shape({
    xs: PropTypes.number,
    md: PropTypes.number,
  }).isRequired,
};
