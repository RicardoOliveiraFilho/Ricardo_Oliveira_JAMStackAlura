import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import textStyleVariantsMap from '../../../../theme/utils/textStyleVariantsMap';

const HighlightCardWrapper = styled.div`
  ${breakpointsMedia({
    md: css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    `,
  })}
`;

HighlightCardWrapper.CardImage = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.background.primary.color};

  ${breakpointsMedia({
    xs: css`
      margin-top: ${({ theme }) => theme.spaceValues.xs}px;
      margin-left: ${({ theme }) => theme.spaceValues.xs}px;
      margin-right: ${({ theme }) => theme.spaceValues.xs}px;
      width: 289px;
      height: 177px;

      img {
        width: 289px;
        height: 177px;
      }
    `,
    md: css`
      margin-top: 5px;
      margin-right: 0;

      width: 593px;
      height: 320px;

      img {
        width: 593px;
        height: 320px;
      }
    `,
  })}
`;

HighlightCardWrapper.CardTitle = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.background.primary.color};

  ${breakpointsMedia({
    xs: css`
      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: ${({ theme }) => theme.spaceValues.xs}px;
      margin-right: ${({ theme }) => theme.spaceValues.xs}px;
      margin-bottom: ${({ theme }) => theme.spaceValues.xs}px;

      width: 289px;
      height: 72px;
    `,
    md: css`
      margin-top: 21px;
      margin-left: 0;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;

      p {
        margin-top: 30px;
        margin-left: 30px;
        margin-right: 26px;
        margin-bottom: 82px;
      }

      h6 {
        margin-top: 28px;
        margin-left: 30px;
        margin-right: 170px;
        margin-bottom: 30px;
        ${textStyleVariantsMap.cardTitleMD}
      }

      width: 307px;
      height: 320px;
    `,
  })}
`;

HighlightCardWrapper.Highlight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 147px;
  height: 31px;

  position: absolute;

  margin-top: 5px;
  margin-left: 4px;

  background-color: ${({ theme }) => theme.colors.primary.main.contrastColor};
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};

  ${breakpointsMedia({
    md: css`
      width: 228px;
      height: 48px;

      margin-top: 12px;
      margin-left: 12px;

      ${textStyleVariantsMap.destaqueMD}
    `,
  })}
`;

export default HighlightCardWrapper;
