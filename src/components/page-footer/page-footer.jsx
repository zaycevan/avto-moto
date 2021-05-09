import React from 'react';
import {Link} from 'react-router-dom';

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper footer-nav">
        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <Link to="#">Корпоративным клиентам</Link>
          </li>
          <li className="footer-nav__item">
            <Link to="#">Клиентам</Link>
          </li>
          <li className="footer-nav__item">
            <Link to="#">Аренда авто</Link>
          </li>
          <li className="footer-nav__item">
            <Link to="#">Каршеринг</Link>
          </li>
          <li className="footer-nav__item">
            <Link to="#">Как продать авто</Link>
          </li>
          <li className="footer-nav__item">
            <Link to="#">Trade-in</Link>
          </li>
          <li className="footer-nav__item">
            <Link to="#">Test drive</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default PageFooter;
