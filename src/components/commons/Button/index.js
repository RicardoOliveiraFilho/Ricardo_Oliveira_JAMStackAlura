import React from 'react';
import styled, { css } from 'styled-components';

const buttonDefault = css``;

const buttonCircle = css`
  border: 1px solid ${({ theme }) => theme.colors.background.primary.color};
  border-radius: 25px;
  box-sizing: border-box;
  background: transparent;
`;

const ButtonWrapper = styled.button`
  cursor: pointer;
  width: 46px;
  height: 46px;

  font-family: Fira Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;

  ${function (props) {
    if (props.circle) {
      return buttonCircle;
    }

    return buttonDefault;
  }}
`;

export default function Button({ children, ...props }) {
  return (
    <ButtonWrapper {...props}>
      {children}
    </ButtonWrapper>
  );
}
