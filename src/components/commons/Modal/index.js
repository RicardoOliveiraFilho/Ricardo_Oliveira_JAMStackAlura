import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';

import ModalWrapper from './styles/ModalWrapper';

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={event => {
        const isSafeArea = event.target.closest(
          '[data-modal-safe-area="true"]',
        );

        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}

      <ModalWrapper.Content
        marginLeft={{
          md: '80px',
          lg: '225px',
          xl: '600px',
        }}
        marginRight={{
          sm: '30px',
        }}
        marginTop={{
          xs: '330px',
          md: '500px',
          lg: '700px',
          xl: '500px',
        }}
        width={{
          lg: '600px',
        }}
      >
        <motion.div
          variants={{
            open: {
              y: '-50%',
            },
            closed: {
              y: '100%',
            },
          }}
          animate={isOpen ? 'open' : 'closed'}
          transition={{
            duration: 0.5,
          }}
        >
          {children({
            'data-modal-safe-area': 'true',
          })}
        </motion.div>
      </ModalWrapper.Content>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
