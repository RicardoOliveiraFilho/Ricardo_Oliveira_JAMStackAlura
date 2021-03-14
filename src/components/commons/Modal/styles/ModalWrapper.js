import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;

  transition: .5s;
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

export default ModalWrapper;
