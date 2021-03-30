import styled, { css } from 'styled-components';

import propToStyle from '../../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const ImageWrapper = styled.div`

  img {
    width: ${({ width }) => `${width.xs}px`};
    height: ${({ height }) => `${height.xs}px`};
  }

  ${breakpointsMedia({
    md: css`
      img {
        width: ${({ width }) => `${width.md}px`};
        height: ${({ height }) => `${height.md}px`};
      }
    `,
  })}

  ${propToStyle('marginTop')}
  ${propToStyle('marginLeft')}
  ${propToStyle('alignSelf')}
  ${propToStyle('opacity')}
  ${propToStyle('transform')}
  ${propToStyle('position')}
  ${propToStyle('zIndex')}
`;

export default ImageWrapper;
