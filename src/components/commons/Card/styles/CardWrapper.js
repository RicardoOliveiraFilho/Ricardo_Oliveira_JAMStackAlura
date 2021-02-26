import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const CardWrapper = styled.div``;

CardWrapper.CardImage = styled.div`
  margin-top: ${({ theme }) => theme.spaceValues.xs}px;
  margin-left: ${({ theme }) => theme.spaceValues.xs}px;
  margin-right: ${({ theme }) => theme.spaceValues.xs}px;
  width: 289px;
  height: 177px;
  border: 1px solid ${({ theme }) => theme.colors.background.primary.color};

  img {
    width: 289px;
    height: 177px;
  }

  ${breakpointsMedia({
    md: css`
      margin-top: ${({ theme }) => theme.spaceValues.md}px;
      margin-left: ${({ theme }) => theme.spaceValues.md}px;
      margin-right: ${({ theme }) => theme.spaceValues.md}px;

      width: 287px;
      height: 390px;

      img {
        width: 287px;
        height: 390px;
      }
    `,
  })}
`;

CardWrapper.CardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: ${({ theme }) => theme.spaceValues.xs}px;
  margin-right: ${({ theme }) => theme.spaceValues.xs}px;
  margin-bottom: ${({ theme }) => theme.spaceValues.xs}px;

  width: 289px;
  height: 72px;
  border: 1px solid ${({ theme }) => theme.colors.background.primary.color};

  ${breakpointsMedia({
    md: css`
      margin-left: ${({ theme }) => theme.spaceValues.md}px;
      margin-right: ${({ theme }) => theme.spaceValues.md}px;
      margin-bottom: ${({ theme }) => theme.spaceValues.md}px;

      h6 {
        ${textStyleVariantsMap.cardTitleMD}
      }

      width: 287px;
      height: 120px;
    `,
  })}
`;

export default CardWrapper;
