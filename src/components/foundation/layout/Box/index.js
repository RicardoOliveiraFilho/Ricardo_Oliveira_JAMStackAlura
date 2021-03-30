import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('borderRadius')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('paddingRight')}
`;

export default Box;
