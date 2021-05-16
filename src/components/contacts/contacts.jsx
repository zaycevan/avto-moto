import React from 'react';
import ContactMap from '../contact-map/contact-map';

const Contacts = () => {

  return (
    <div className="contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <p className="contacts__item-name">Адрес</p>
          <p className="contacts__item-value">Санкт-Петербург,</p>
          <p className="contacts__item-value">набережная реки Карповки, дом 5</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__item-name">Режим работы</p>
          <p className="contacts__item-value">Ежедневно, с 10:00 до 21:00</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__item-name">Телефон</p>
          <a className="contacts__item-value" href="tel: 88003335599">8 (800) 333-55-99</a>
        </li>
        <li className="contacts__item">
          <p className="contacts__item-name">E-mail</p>
          <a className="contacts__item-value" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </li>
      </ul>
      <div className="contacts__map" id="map">
        <ContactMap />
        <img className="contacts__map-image" src="img/map.svg" width="431" height="271" alt="карта"/>
      </div>
    </div>
  );
};

export default Contacts;
