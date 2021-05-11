import React from 'react';
import {Link} from 'react-router-dom';

const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <Link className="page-header__logo" to="/">
          <svg className="page-header__logo-image" width="55" height="55">
            <use xlinkHref="img/sprite.svg#wheel"></use>
          </svg>
          <div className="page-header__name">
            <p className="page-header__name--bold">AVTO</p>
            <p className="page-header__name--normal">MOTO</p>
          </div>
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item active">
              <Link to="#">Автомобили</Link>
            </li>
            <li className="main-nav__item">
              <Link to="#">Контакты</Link>
            </li>
            <li className="main-nav__item">
              <Link to="#">Услуги</Link>
            </li>
            <li className="main-nav__item">
              <Link to="#">Вакансии</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PageHeader;
