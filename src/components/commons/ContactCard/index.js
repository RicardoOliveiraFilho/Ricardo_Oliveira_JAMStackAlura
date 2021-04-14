import React from 'react';
import PropTypes from 'prop-types';

import ContactCardWrapper from './styles/ContactCardWrapper';
import Image from '../Image';
import Text from '../../foundation/Text';

export default function ContactCard({ contactInfo }) {
  if (contactInfo.text.href) {
    return (
      <ContactCardWrapper>
        <ContactCardWrapper.Image>
          <Image
            src={contactInfo.image.src}
            alt={contactInfo.image.alt}
            width={contactInfo.image.width}
            height={contactInfo.image.height}
          />
        </ContactCardWrapper.Image>
        <ContactCardWrapper.Text>
          <Text
            tag={contactInfo.text.tag}
            variant={contactInfo.text.variant}
            href={contactInfo.text.href}
            target="_blank"
          >
            {contactInfo.text.children}
          </Text>
        </ContactCardWrapper.Text>
      </ContactCardWrapper>
    );
  }

  return (
    <ContactCardWrapper>
      <ContactCardWrapper.Image>
        <Image
          src={contactInfo.image.src}
          alt={contactInfo.image.alt}
          width={contactInfo.image.width}
          height={contactInfo.image.height}
        />
      </ContactCardWrapper.Image>
      <ContactCardWrapper.Text>
        <Text tag={contactInfo.text.tag} variant={contactInfo.text.variant}>
          {contactInfo.text.children}
        </Text>
      </ContactCardWrapper.Text>
    </ContactCardWrapper>
  );
}

ContactCard.propTypes = {
  contactInfo: PropTypes.shape({
    key: PropTypes.number.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    text: PropTypes.shape({
      tag: PropTypes.string.isRequired,
      variant: PropTypes.string.isRequired,
      href: PropTypes.string,
      children: PropTypes.node.isRequired,
    }).isRequired,
  }).isRequired,
};
