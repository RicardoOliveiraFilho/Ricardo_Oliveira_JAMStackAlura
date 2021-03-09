import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

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
      <motion.div
        variants={{
          open: {
            y: '-100%',
          },
          closed: {
            y: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children({
          'data-model-safe-area': 'true',
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
