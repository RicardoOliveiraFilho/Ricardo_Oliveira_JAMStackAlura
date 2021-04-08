import styled, { css } from 'styled-components';
import get from 'lodash/get';

import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import TextStyleVariantsMap from '../../../theme/textStyleVariantsMap';
import propToStyle from '../../../theme/utils/propToStyle';

const buttonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.borders.primary};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  transition: opacity ${({ theme }) => theme.transition};
  ${({ ghost }) => (ghost ? buttonGhost : '')}
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${breakpointsMedia({
    xs: css`
      margin-left: -5px;
      ${TextStyleVariantsMap.paragraph3}
    `,
    sm: css`
      margin-left: -60px;
    `,
    md: css`
      margin-left: 70px;
      ${TextStyleVariantsMap.menuItem}
    `,
    lg: css`
      margin-left: -15px;
      ${TextStyleVariantsMap.menuItem}
    `,
  })}

  ${propToStyle('marginTop')}
`;

export default Button;
