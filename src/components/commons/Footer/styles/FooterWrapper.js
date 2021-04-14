import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import TextStyleVariantsMap from '../../../../theme/textStyleVariantsMap';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;

  ${breakpointsMedia({
    md: css`
      flex-direction: row;
    `,
  })}

  p {
    ${breakpointsMedia({
      md: css`
        margin-top: 5px;
        ${TextStyleVariantsMap.paragraph1}
      `,
    })}
    text-align: center;
    margin-top: 15px;
    margin-bottom: 0px;
  }

  img {
    ${breakpointsMedia({
      md: css`
        margin-right: 23px;
      `,
    })}
    width: 58px;
    margin-right: 0px;
    margin-bottom: 0px;
  }

  a {
    ${breakpointsMedia({
      md: css`
        ${TextStyleVariantsMap.paragraph1}
      `,
    })}
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

export default FooterWrapper;
