import React from 'react';
import Characteristics from '../characteristics/characteristics';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

const Tabs = () => {
  return (
    <section className="tabs">
      <ul className="tabs__list">
        <li className="tabs__item">
          <button className="tabs__item-button button active">Характеристики</button>
        </li>
        <li className="tabs__item">
          <button className="tabs__item-button button">Отзывы</button>
        </li>
        <li className="tabs__item">
          <button className="tabs__item-button button">Контакты</button>
        </li>
      </ul>
      <div className="tabs__content">
        <Characteristics />
        <Reviews />
        <Contacts />
      </div>
    </section>
  );
};

export default Tabs;
