import styled, { css } from 'styled-components';

import propToStyle from '../../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../../../../theme/textStyleVariantsMap';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: 0.3s;
  z-index: 100;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

ModalWrapper.Content = styled.div`
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginTop')}
  ${propToStyle('display')}
  ${propToStyle('width')}

  ${breakpointsMedia({
    xs: css`
      h1 {
        ${textStyleVariantsMap.paragraph1}
      }
    `,
    md: css`
      h1 {
        ${textStyleVariantsMap.title}
      }
    `,
  })}
`;

export default ModalWrapper;
