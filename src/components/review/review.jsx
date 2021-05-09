import React from 'react';

const Review = () => {
  return (
    <li className="reviews__item review">
      <p className="review__user">Борис Иванов</p>
      <div className="review__advantages">
        <p className="review__title">Достоинства</p>
        <p className="review__text">мощность, внешний вид</p>
      </div>
      <div className="review__disadvantages">
        <p className="review__title">Недостатки</p>
        <p className="review__text">Слабые тормозные колодки (пришлось заменить)</p>
      </div>
      <div className="review__comment">
        <p className="review__title">Комментарий</p>
        <p className="review__text">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
      </div>
      <div className="review__rating rating">
        <span className="rating__stars"></span>
        <span className="rating__text">Советует</span>
      </div>
      <span className="review__time">1 минуту назад</span>
      <button className="review__reply">Ответить</button>
    </li>
  );
};

export default Review;
