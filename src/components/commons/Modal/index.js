import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';

import ModalWrapper from './styles/ModalWrapper';
import Button from '../Button';

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

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
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            y: '0%',
          },
          closed: {
            y: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.3,
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children({
          'data-model-safe-area': 'true',
          buttonClose: (
            <Button
              type="submit"
              circle
              onClick={onClose}
              marginTop={{
                xs: '10px',
                md: '0px',
              }}
              marginRight={{
                xs: '-300px',
                md: '0px',
              }}
            >
              x
            </Button>
          ),
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
