import React from 'react';
import {Link} from 'react-router-dom';
import Slider from '../slider/slider';

const GeneralInfo = () => {
  return (
    <section className="general-info">
      <div className="general-info__wrapper">
        <h2 className="general-info__title">Марпех 11</h2>
        <ul className="general-info__list">
          <li className="general-info__item">
            <svg className="general-info__item-engine" width="53" height="40">
              <use xlinkHref="img/sprite.svg#engine"></use>
            </svg>
            <p>бензин</p>
          </li>
          <li className="general-info__item">
            <svg className="general-info__item-transmission" width="40" height="40">
              <use xlinkHref="img/sprite.svg#transmission"></use>
            </svg>
            <p>механика</p>
          </li>
          <li className="general-info__item">
            <svg className="general-info__item-capacity" width="40" height="40">
              <use xlinkHref="img/sprite.svg#capacity"></use>
            </svg>
            <p>100 л.с.</p>
          </li>
          <li className="general-info__item">
            <svg className="general-info__item-volume" width="40" height="40">
              <use xlinkHref="img/sprite.svg#volume"></use>
            </svg>
            <p>1.4 л</p>
          </li>
        </ul>
        <div className="general-info__price">
          <span className="general-info__price-actual">2 300 000 ₽</span>
          <span className="general-info__price-old">2 400 000 ₽</span>
        </div>
        <Link className="general-info__request button" to="#">оставить заявку</Link>
        <Link className="general-info__credit button" to="#">В КРЕДИТ ОТ 11 000 ₽</Link>
        <Slider />
      </div>
    </section>
  );
};

export default GeneralInfo;
