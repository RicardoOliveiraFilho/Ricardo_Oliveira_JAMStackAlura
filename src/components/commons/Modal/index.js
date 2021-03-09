import React from 'react';
import PropTypes from 'prop-types';

import ModalWrapper from './styles/ModalWrapper';

export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-model-safe-area="true"]');

        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {children({
        'data-model-safe-area': 'true',
      })}
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
