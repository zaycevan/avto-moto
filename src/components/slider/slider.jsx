import React from 'react';

const Slider = () => {
  return (
    <div className="general-info__slider slider">
      <img className="slider__image" src="img/image-auto-1.png" width="600" height="275" alt="фото машины"/>
      <ul className="slider__list">
        <li className="slider__item">
          <img className="slider__item-image" src="img/image-auto-1.png" width="128" height="80" alt="уменьшенное фото машины"/>
        </li>
        <li className="slider__item">
          <img className="slider__item-image" src="img/image-auto-2.png" width="128" height="80" alt="уменьшенное фото машины"/>
        </li>
        <li className="slider__item">
          <img className="slider__item-image" src="img/image-auto-3.png" width="128" height="80" alt="уменьшенное фото машины"/>
        </li>
      </ul>
      <button className="slider__button slider__button--left button">
        <svg width="14" height="14">
          <use xlinkHref="img/sprite.svg#arrow"></use>
        </svg>
      </button>
      <button className="slider__button slider__button--right button">
        <svg width="14" height="14">
          <use xlinkHref="img/sprite.svg#arrow"></use>
        </svg>
      </button>
    </div>
  );
};

export default Slider;
