import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SliderWrapper from './styles/SliderWrapper';

export default function Slider({ itens }) {
  const [valueX, setValueX] = useState(0);

  function goLeft() {
    if (valueX === 0) {
      setValueX(-100 * (itens.length - 1));
    } else {
      setValueX(valueX + 100);
    }
  }

  function goRight() {
    if (valueX === -100 * (itens.length - 1)) {
      setValueX(0);
    } else {
      setValueX(valueX - 100);
    }
  }

  return (
    <SliderWrapper>
      {itens.map(item => {
        return (
          <SliderWrapper.Item
            key={item.id}
            style={{ transform: `translateX(${valueX}%)` }}
          >
            <SliderWrapper.ItemContent>{item.value}</SliderWrapper.ItemContent>
          </SliderWrapper.Item>
        );
      })}
      <SliderWrapper.LeftNavigation onClick={goLeft}>
        <i className="fas fa-chevron-left" />
      </SliderWrapper.LeftNavigation>
      <SliderWrapper.RightNavigation onClick={goRight}>
        <i className="fas fa-chevron-right" />
      </SliderWrapper.RightNavigation>
    </SliderWrapper>
  );
}

Slider.propTypes = {
  itens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
