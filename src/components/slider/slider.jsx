import React, {useState, useRef} from 'react';
import {ImageItems} from '../../const';

const Slider = () => {

  const [shownImageIndex, setShownImageIndex] = useState(0);
  const slider = useRef(null);

  const handleLeftButtonClick = () => {
    if (shownImageIndex > 0) {
      slider.current.childNodes.forEach((element) => {
        element.style = `transform: translateX(${(1 - shownImageIndex) * 100}%)`;
      });
      setShownImageIndex(((currentIndex) => currentIndex - 1));
    }
  };
  const handleRightButtonClick = () => {
    if (shownImageIndex < ImageItems.length - 1) {
      slider.current.childNodes.forEach((element) => {
        element.style = `transform: translateX(${(shownImageIndex + 1) * -100}%)`;
      });
      setShownImageIndex((currentIndex) => currentIndex + 1);
    }
  };

  return (
    <div className="general-info__slider slider">
      <div className="slider__wrapper">
        <div className="slider__list" ref={slider}>
          {ImageItems.map((item, i) => (
            <img key={`${item}-${i}`}
              className="slider__image"
              src={`img/image-auto-${item}.jpg`}
              width="600" height="275" alt="фото машины"/>
          ))}
        </div>
        <p className="slider__label">new model</p>
      </div>
      <div className="slider__control">
        <button className="slider__button slider__button--left"
          onClick={handleLeftButtonClick}
          disabled = {shownImageIndex === 0} aria-label="Листать влево">
          <svg width="14" height="14">
            <use xlinkHref="img/sprite.svg#arrow"></use>
          </svg>
        </button>
        <ul className="slider__preview-list">
          <li className="slider__preview-item">
            <img className="slider__item-image" src="img/image-auto-1.jpg" width="128" height="80" alt="уменьшенное фото машины"/>
          </li>
          <li className="slider__preview-item">
            <img className="slider__item-image" src="img/image-auto-2.jpg" width="128" height="80" alt="уменьшенное фото машины"/>
          </li>
          <li className="slider__preview-item">
            <img className="slider__item-image" src="img/image-auto-3.jpg" width="128" height="80" alt="уменьшенное фото машины"/>
          </li>
        </ul>
        <button className="slider__button slider__button--right"
          onClick={handleRightButtonClick}
          disabled = {shownImageIndex === ImageItems.length - 1} aria-label="Листать вправо">
          <svg width="14" height="14">
            <use xlinkHref="img/sprite.svg#arrow"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
