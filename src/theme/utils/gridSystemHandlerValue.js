import { css } from 'styled-components';

import breakpointsMedia from './breakpointsMedia';

function gridSystemHandlerValue(value) {
  if (typeof value === 'number') {
    return css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value) / 12}%;
      max-width: ${(100 * value) / 12}%;
    `;
  }

  return breakpointsMedia({
    xs: value?.xs
      ? css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * value.xs) / 12}%;
          max-width: ${(100 * value.xs) / 12}%;
        `
      : '',
    md: value?.md
      ? css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
        `
      : '',
  });
}

export default gridSystemHandlerValue;
