import { css } from 'styled-components';

import breakpointsMedia from './breakpointsMedia';

function gridSystemHandlerOffset(offset) {
  if (typeof offset === 'number') {
    return css`
      margin-left: ${(100 * offset) / 12}%;
    `;
  }

  return breakpointsMedia({
    xs: offset?.xs
      ? css`
          margin-left: ${(100 * offset.xs) / 12}%;
        `
      : '',
    md: offset?.md
      ? css`
          margin-left: ${(100 * offset.md) / 12}%;
        `
      : '',
  });
}

export default gridSystemHandlerOffset;
