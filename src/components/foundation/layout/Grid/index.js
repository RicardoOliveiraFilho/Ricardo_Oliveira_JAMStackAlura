import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';
import gridSystemHandlerValue from '../../../../theme/utils/gridSystemHandlerValue';
import gridSystemHandlerOffset from '../../../../theme/utils/gridSystemHandlerOffset';

const Container = styled.div`
  width: 100%;
  padding-right: ${({ theme }) => 2 * theme.spaceValues.xs}px;
  padding-left: ${({ theme }) => 2 * theme.spaceValues.xs}px;
  margin-right: auto;
  margin-left: auto;
  max-width: initial;

  ${breakpointsMedia({
    md: css`
      max-width: ${({ theme }) => theme.breakpoints.md}px;
      padding-right: ${({ theme }) => 2 * theme.spaceValues.md}px;
      padding-left: ${({ theme }) => 2 * theme.spaceValues.md}px;
    `,
  })}

${propToStyle('marginTop')}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: ${({ theme }) => 2 * theme.spaceValues.md * -1}px;
  margin-left: ${({ theme }) => 2 * theme.spaceValues.md * -1}px;
`;

const Col = styled.div`
  padding-right: ${({ theme }) => 2 * theme.spaceValues.md}px;
  padding-left: ${({ theme }) => 2 * theme.spaceValues.md}px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ value }) => gridSystemHandlerValue(value)};
  ${({ offset }) => gridSystemHandlerOffset(offset)};

  ${propToStyle('display')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
`;

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
