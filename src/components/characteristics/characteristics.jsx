import React from 'react';

const Сharacteristics = () => {
  return (
    <div className="characteristics">
      <ul className="characteristics__list">
        <li className="characteristics__item">
          <span className="characteristics__item-name">Трансмиссия</span>
          <span className="characteristics__item-value">Роботизированная</span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-name">Мощность двигателя, л.с.</span>
          <span className="characteristics__item-value">249</span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-name">Тип двигателя</span>
          <span className="characteristics__item-value">Бензиновый</span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-name">Привод</span>
          <span className="characteristics__item-value">Полный</span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-name">Объем двигателя, л</span>
          <span className="characteristics__item-value">2.4</span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-name">Макс. крутящий момент</span>
          <span className="characteristics__item-value">370/4500</span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-name">Количество цилиндров</span>
          <span className="characteristics__item-value">4</span>
        </li>
      </ul>
    </div>
  );
};

export default Сharacteristics;
