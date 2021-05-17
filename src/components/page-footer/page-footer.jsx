import React from 'react';
import {Link} from 'react-router-dom';

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper">
        <ul className="page-footer__list">
          <li className="page-footer__item">
            <Link to="#">Корпоративным клиентам</Link>
          </li>
          <li className="page-footer__item">
            <Link to="#">Клиентам</Link>
          </li>
          <li className="page-footer__item">
            <Link to="#">Аренда авто</Link>
          </li>
          <li className="page-footer__item">
            <Link to="#">Каршеринг</Link>
          </li>
          <li className="page-footer__item">
            <Link to="#">Как продать авто</Link>
          </li>
          <li className="page-footer__item">
            <Link to="#">Trade-in</Link>
          </li>
          <li className="page-footer__item">
            <Link to="#">Test drive</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default PageFooter;
