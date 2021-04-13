import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  background: #ffffff;
  overflow: hidden;

  i {
    font-size: 2vw;
  }

  ${breakpointsMedia({
    sm: css`
      margin-right: 45px;
    `,
    md: css`
      margin-left: 110px;
    `,
    lg: css`
      margin-left: 45px;
    `,
  })}
`;

SliderWrapper.Item = styled.div`
  border: 2px solid #000000;
  position: relative;
  min-width: 100%;
  height: 80%;
  transition: 0.5s;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

SliderWrapper.ItemContent = styled.div`
  width: 100%;
  height: auto;
`;

const buttonStylizationGeneral = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 80%;
  background: none;
  border: none;
  outline: none;
  transition: 0.5s;
  &:hover {
    background: rgba(0, 0, 0, 0.356);
    cursor: pointer;

    i {
      color: #f5f5f5;
    }
  }
`;

SliderWrapper.LeftNavigation = styled(buttonStylizationGeneral)`
  left: 0;
`;

SliderWrapper.RightNavigation = styled(buttonStylizationGeneral)`
  right: 0;
`;

export default SliderWrapper;
