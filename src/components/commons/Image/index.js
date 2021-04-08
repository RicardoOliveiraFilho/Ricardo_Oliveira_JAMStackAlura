import React from 'react';
import PropTypes from 'prop-types';
import ImageNext from 'next/image';

export default function Image({ src, alt, width, height }) {
  return <ImageNext src={src} alt={alt} width={width} height={height} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
