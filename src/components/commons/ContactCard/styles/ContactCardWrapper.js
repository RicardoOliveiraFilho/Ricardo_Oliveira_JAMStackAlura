import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import TextStyleVariantsMap from '../../../../theme/textStyleVariantsMap';

const ContactCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 0px;

  ${breakpointsMedia({
    sm: css`
      margin-left: -60px;
    `,
    md: css`
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 60%;
    `,
    lg: css`
      flex-direction: row;
      justify-content: space-between;
      width: 40%;
    `,
  })}
`;

ContactCardWrapper.Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  ${breakpointsMedia({
    md: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      margin: 0;
      padding: 0;
      margin-left: 10px;
    `,
    lg: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      margin: 0;
      padding: 0;
      margin-left: 10px;
    `,
  })}
`;

ContactCardWrapper.Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;

  p {
    ${TextStyleVariantsMap.paragraph3}
  }

  ${breakpointsMedia({
    md: css`
      width: 70%;
      justify-content: flex-start;
      p {
        ${TextStyleVariantsMap.menuItem}
      }
    `,
    lg: css`
      width: 70%;
      justify-content: flex-start;
      p {
        ${TextStyleVariantsMap.menuItem}
      }
    `,
  })}

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.links.primary};
    transition: opacity ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
      text-decoration: underline;
      opacity: 0.5;
    }

    ${TextStyleVariantsMap.paragraph3}

    ${breakpointsMedia({
      md: css`
        ${TextStyleVariantsMap.menuItem}
      `,
      lg: css`
        ${TextStyleVariantsMap.menuItem}
      `,
    })}
  }
`;

export default ContactCardWrapper;
